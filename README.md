# ⚽ Matchday Maestro - Landing Page

Premium Next.js landing page for Matchday Maestro, the AI-powered football prediction app that rewards knowledge over luck.

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19.2
- **Styling**: Tailwind CSS + Custom Glassmorphism
- **Animations**: Framer Motion
- **Components**: Shadcn/ui
- **TypeScript**: Full type safety

## 📄 Pages

- `/` - Main landing page with hero, features, testimonials, and CTA
- `/how-it-works` - Detailed explanation of the prediction system
- `/pricing` - Free vs Premium tier comparison
- `/faq` - Frequently asked questions
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## 🎨 Brand Colors

### Primary - Electric Emerald
- Main: `#00C896`
- Dark: `#00A374`
- Light: `#33D4A8`

### Secondary - Deep Blues
- Main: `#1E40AF`
- Dark: `#1E3A8A`
- Light: `#3B82F6`

### Accent & Status
- Accent: `#EC4899` (Hot Pink)
- Warning: `#F59E0B` (Gold)
- Error: `#EF4444` (Red)

## 🛠️ Development

### Install dependencies:
```bash
cd matchday-maestro
npm install
```

### Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for production:
```bash
npm run build
npm start
```

## 📦 Project Structure

```
matchday-maestro/
├── app/
│   ├── page.tsx                # Landing page
│   ├── how-it-works/page.tsx
│   ├── pricing/page.tsx
│   ├── faq/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── hero.tsx
│   ├── features-carousel.tsx
│   ├── problem-section.tsx
│   ├── early-access.tsx
│   ├── final-cta.tsx
│   ├── footer.tsx
│   └── ui/                     # Shadcn components
├── public/
│   ├── matchday-maestro-icon.png
│   ├── matchday-maestro-logo.png
│   └── *.jpg                   # Feature images
└── package.json
```

## ✨ Key Features

### Design
- ✅ Modern glassmorphism UI with animated stadium background
- ✅ Smooth scroll animations with Intersection Observer
- ✅ Responsive design (mobile-first)
- ✅ Electric Emerald brand colors throughout

### Content
- ✅ "The Three Flaws" problem section (competitor analysis)
- ✅ 12 beta user testimonials marquee
- ✅ Countdown timer to December 12th launch
- ✅ Early adopter benefits (First 500 users)
- ✅ Social media integration (X, Instagram, Facebook, TikTok)

### Functionality
- ✅ Multi-page architecture with working navigation
- ✅ Email waitlist signup form
- ✅ Social share buttons
- ✅ Mobile-responsive header and footer
- ✅ Framer Motion animations

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero config

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy

## 🎯 Launch Info

- **Launch Date**: December 12th, 2025
- **Early Access**: First 500 users get premium features free for 3 months
- **Target**: Premier League prediction enthusiasts

## 📧 Contact

- Email: hello@matchdaymaestro.com
- Twitter: [@MaestroMatchday](https://x.com/MaestroMatchday)
- Instagram: [@matchday.maestro](https://instagram.com/matchday.maestro)

---

**Where Football Knowledge Beats Luck. ⚽🚀**
