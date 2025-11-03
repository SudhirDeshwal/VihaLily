# Viha Lily Care Inc. - Healthcare Staffing Website

Modern, static website for Viha Lily Care Inc., a nursing & healthcare staffing agency in Ontario.

## 🎯 Features

- ✅ Fully static website (no backend required)
- ✅ Professional, responsive design
- ✅ Contact and job application forms
- ✅ All pages: Home, About Us, Services, Jobs, Apply, Contact, Privacy
- ✅ Mobile-first responsive layout
- ✅ Ready for free hosting (Vercel, Netlify, Cloudflare Pages)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/
│   ├── about/          # About Us page
│   ├── services/       # Services page
│   ├── jobs/           # Jobs/Careers page
│   ├── apply/          # Job application form
│   ├── contact/        # Contact form
│   ├── privacy/        # Privacy Policy
│   ├── layout.tsx      # Root layout with Navbar & Footer
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
└── public/             # Static assets
```

## 📧 Form Integration

Currently, forms are set up with placeholder submission logic. To enable actual email submissions:

### Option 1: Formspree (Recommended)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form ID
4. Update `app/apply/page.tsx` and `app/contact/page.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    ...formData,
    _to: 'infovihalilycareinc@gmail.com'
  }),
});
```

### Option 2: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create email service and template
3. Add API keys to environment variables
4. Update forms with EmailJS SDK

### Option 3: Netlify Forms (if hosting on Netlify)

Add `netlify` attribute to your form tags:
```html
<form method="POST" data-netlify="true" netlify-honeypot="bot-field">
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically on every push

```bash
vercel
```

### Deploy to Netlify

1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

### Deploy to Cloudflare Pages

1. Push your code to GitHub
2. Import project in Cloudflare Pages
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `out`

## 📄 Pages

- **Home** (`/`) - Hero, highlights, services preview
- **About Us** (`/about`) - Company story, mission, vision, values
- **Services** (`/services`) - LTC, hospital, home care, emergency staffing
- **Jobs** (`/jobs`) - Current openings and career opportunities
- **Apply** (`/apply`) - Job application form
- **Contact** (`/contact`) - Contact form and information
- **Privacy** (`/privacy`) - Privacy policy

## 🎨 Customization

### Colors

Edit `app/globals.css`:
```css
:root {
  --primary-blue: #007BFF;
  --primary-light: #4F9FF8;
  /* ... */
}
```

### Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/about/page.tsx`

### Company Information

Modify text content directly in component files.

## 📝 Build Commands

```bash
# Development
npm run dev

# Production build (static export)
npm run build

# Preview production build
npm start
```

## 🌐 Tech Stack

- **Framework**: Next.js 14 (with static export)
- **Styling**: Plain CSS with CSS variables
- **Forms**: Formspree/EmailJS/Netlify Forms
- **Hosting**: Vercel, Netlify, or Cloudflare Pages
- **Deployment**: Free tier hosting

## 📞 Support

For questions or support, contact:
- Email: infovihalilycareinc@gmail.com
- Location: Brampton, Ontario

## 📄 License

© 2025 Viha Lily Care Inc. All rights reserved.

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Test locally: `npm run dev`
3. ⬜ Set up Formspree account and get Form ID
4. ⬜ Update `YOUR_FORM_ID` in `app/apply/page.tsx` and `app/contact/page.tsx`
5. ⬜ Deploy to Vercel/Netlify/Cloudflare Pages
6. ⬜ Test all forms and links on deployed site
7. ⬜ Add favicon and logo (optional)
8. ⬜ Add custom domain (optional)

