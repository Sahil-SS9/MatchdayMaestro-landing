import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
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

    // Validate field lengths
    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be less than 100 characters' },
        { status: 400 }
      )
    }

    if (subject.length > 200) {
      return NextResponse.json(
        { error: 'Subject must be less than 200 characters' },
        { status: 400 }
      )
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be less than 5000 characters' },
        { status: 400 }
      )
    }

    // Check for blocked test domains
    const blockedDomains = ['example.com', 'example.org', 'test.com', 'testing.com', 'mailinator.com', '10minutemail.com']
    const emailDomain = email.split('@')[1]?.toLowerCase()
    if (blockedDomains.includes(emailDomain)) {
      return NextResponse.json(
        { error: 'Please use a valid email address' },
        { status: 400 }
      )
    }

    // Check for Resend configuration
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'hello@matchdaymaestro.com'

    if (!RESEND_API_KEY) {
      // In production, require email service configuration
      if (process.env.NODE_ENV === 'production') {
        console.error('RESEND_API_KEY not configured in production')
        // Log the contact form submission for manual follow-up
        console.log('Contact form submission (email not sent):', {
          name,
          email,
          subject,
          message: message.substring(0, 200) + '...',
          timestamp: new Date().toISOString()
        })
        // Still return success since we logged it
        return NextResponse.json({
          message: 'Thank you for your message. We will get back to you soon!'
        })
      }
      // Development mode - just log and return success
      console.log('Contact form submission (dev mode):', { name, email, subject, message })
      return NextResponse.json({
        message: 'Message received successfully!'
      })
    }

    // Send email via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Matchday Maestro <noreply@send.matchdaymaestro.com>',
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `[Contact Form] ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00C896;">New Contact Form Submission</h2>
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            <h3>Message:</h3>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
              ${escapeHtml(message)}
            </div>
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            <p style="color: #666; font-size: 12px;">
              This message was sent from the Matchday Maestro contact form.
              Reply directly to this email to respond to ${escapeHtml(name)}.
            </p>
          </div>
        `,
        text: `
New Contact Form Submission
============================

From: ${name} (${email})
Subject: ${subject}

Message:
${message}

---
This message was sent from the Matchday Maestro contact form.
        `.trim(),
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Resend API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Thank you for your message. We will get back to you soon!'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Helper function to escape HTML to prevent XSS in emails
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}
