# Matchday Maestro Website Redesign - Implementation Brief

## Design Philosophy
- Minimal, editorial aesthetic (inspired by Timely.com, Q Agency, modern portfolios)
- NO gradients, NO glow effects, NO glassmorphism
- Clean white background (#FAFBFC), dark navy text (#0A0E27), single accent green (#00FF6B)
- Brutalist typography: 900 weight headlines, proper letter-spacing
- Breathing room: generous padding, asymmetric layouts

## Typography System
- Font: Inter (weights: 600, 800, 900)
- H1: 56-72px, weight 900, letter-spacing -0.02em
- Body: 16-18px, weight 400-500
- Labels: 12-13px, weight 700, uppercase, letter-spacing 0.05em

## Color Palette
- Primary Background: #FAFBFC
- Text: #0A0E27
- Muted Text: #64748B
- Accent: #00FF6B
- Surface: #FFFFFF
- Border: #E2E8F0

## Component Structure

### Navigation
- Fixed top, white background with blur
- Logo left (MATCHDAY MAESTRO, 18px, weight 900)
- CTA button right (#0A0E27 background, white text)
- Height: 80px, border-bottom: 1px solid #E2E8F0

### Hero Section
- Two-column grid (1.2fr text, 1fr visual)
- Eyebrow badge: green background, uppercase, 11px
- H1: "The First Fair Football Prediction App"
- Subtitle: 18-22px, max-width 540px
- Two CTAs: Primary (navy), Secondary (white with border)
- Stats below: 3-column grid, 36px numbers, 13px labels
- Visual: Match preview card with countdown timer

### Problem Section
- Dark navy background (#0A0E27), white text
- Title: 42-56px, "Every Other App Rewards Whoever's Watching TV First"
- 3-column card grid
- Cards: rgba(255,255,255,0.05) background, minimal border
- Icons: 32px emoji, spacing below

### Solution Section  
- Light background (#FAFBFC)
- Same 3-column layout
- White cards with #E2E8F0 borders
- Clean, minimal styling

## Files to Update
1. `src/app/page.tsx` - Main homepage component
2. `src/styles/globals.css` - Typography and base styles
3. `src/components/Hero.tsx` - Hero section component
4. `src/components/ProblemSection.tsx` - Problem cards
5. `src/components/SolutionSection.tsx` - Solution cards

## Key Requirements
- Mobile responsive: Stack columns at 768px breakpoint
- Clean hover states: translateY(-4px), subtle shadow
- Fast loading: Minimal animations, no heavy effects
- Countdown timer: Real JavaScript countdown from 30s

## What NOT to Do
- NO purple/blue gradients
- NO glow effects or box-shadows with color
- NO dark mode toggle (light mode only for now)
- NO glassmorphism or backdrop-filter (except nav)
- NO complex animations or transitions over 0.3s