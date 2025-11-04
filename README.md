# ⚽ Matchday Maestro - Landing Page

Premium landing page for Matchday Maestro, the AI-powered football prediction app that rewards knowledge over luck.

## 🚀 Live Website

- **Main Landing Page**: `matchday-maestro.html`
- **Privacy Policy**: `privacy-policy.html` 
- **Terms of Service**: `terms-of-service.html`

## 📧 Email Signup Integration

Professional email signup form with:
- ✅ Custom button text: "Join Waiting List"
- ✅ Custom success message: "Thanks! We'll notify you when Matchday Maestro launches."
- ✅ Premium styling matching the website design
- ✅ Secure Mailchimp API integration via Netlify Functions
- ✅ GDPR compliance with consent tracking
- ✅ Mobile responsive design

## 🛠️ Deployment (Netlify)

### Quick Deploy:
1. **Drag & drop** this folder to [netlify.com](https://netlify.com)
2. **Add environment variables** in Netlify dashboard:
   ```
   MAILCHIMP_API_KEY = your_api_key
   MAILCHIMP_AUDIENCE_ID = bf38127eee
   MAILCHIMP_SERVER_PREFIX = us18
   ```
3. **Deploy** - Your site is live!

### Files Structure:
```
FusionFirstStudios/
├── netlify/
│   └── functions/
│       └── subscribe.js        # Secure Mailchimp integration
├── matchday-maestro.html       # Main landing page  
├── privacy-policy.html         # Privacy policy page
├── terms-of-service.html       # Terms of service page
└── README.md                   # This file
```

## 🔐 Security

- ✅ API keys stored securely in environment variables
- ✅ Server-side processing via Netlify Functions
- ✅ No exposed credentials in client-side code
- ✅ GDPR compliant email collection

## 📊 Features

### 🎨 Design:
- Modern glass morphism styling
- Premium color scheme (blues, greens, gold accents)
- Smooth animations and micro-interactions  
- Mobile-first responsive design
- Professional typography

### 🧠 Functionality:
- Email validation with real-time feedback
- GDPR consent tracking
- Loading states and error handling
- Success/error messaging
- Google Analytics integration ready

### 📧 Mailchimp Integration:
- Secure API connection via serverless function
- Automatic tagging: `Waitlist`, `MatchdayMaestro`, `Website_Signup`
- Source tracking and GDPR compliance
- Custom merge fields for enhanced segmentation

## 🎯 Launch Ready

Built for the **November 1st launch** with:
- Professional email collection system
- Launch notification capability  
- Early access user management
- Conversion tracking and analytics

---

**Ready to collect emails and build excitement for the future of fair football predictions! ⚽🚀**
