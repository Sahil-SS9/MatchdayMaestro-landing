import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, gdprConsent } = await request.json()

    // Validate input
    if (!email || !gdprConsent) {
      return NextResponse.json(
        { error: 'Email and GDPR consent are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check for blocked domains that Mailchimp rejects
    const blockedDomains = ['example.com', 'example.org', 'test.com', 'testing.com', 'mailinator.com', '10minutemail.com']
    const emailDomain = email.split('@')[1]?.toLowerCase()
    if (blockedDomains.includes(emailDomain)) {
      return NextResponse.json(
        { error: 'Please use a valid email address (not a test domain)' },
        { status: 400 }
      )
    }

    // Mailchimp configuration
    // You'll need to replace these with your actual Mailchimp details
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX // e.g., 'us1'

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER_PREFIX) {
      console.warn('Mailchimp environment variables not configured. Using mock response.')
      // For development/testing, return success without actual Mailchimp call
      return NextResponse.json({
        message: 'Successfully subscribed to waiting list (development mode)',
        email: email
      })
    }

    // Mailchimp API endpoint
    const mailchimpUrl = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`

    // Prepare subscriber data
    const subscriberData = {
      email_address: email,
      status: 'subscribed', // Use 'subscribed' for immediate subscription (assuming single opt-in)
      merge_fields: {
        // Add any additional fields you want to collect
      },
      tags: ['matchday-maestro-waitlist']
    }

    // Make request to Mailchimp
    const response = await fetch(mailchimpUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscriberData),
    })

    const responseData = await response.json()

    if (!response.ok) {
      // Handle Mailchimp-specific errors
      if (response.status === 400 && responseData.title === 'Member Exists') {
        return NextResponse.json(
          { error: 'This email is already subscribed to our waiting list' },
          { status: 409 }
        )
      }

      console.error('Mailchimp API error:', {
        status: response.status,
        statusText: response.statusText,
        responseData: responseData
      })
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Successfully subscribed to waiting list!',
      email: email
    })

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
