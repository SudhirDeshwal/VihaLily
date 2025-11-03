# Quick Start Guide

## 🚀 Get Your Website Running in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- A code editor (VS Code recommended)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: Open in Browser

Open http://localhost:3000

✅ Your website is now running locally!

---

## 📧 Enable Form Submissions

**⚡ Quick Setup (5 min):** See [SETUP-FORMSPREE.md](SETUP-FORMSPREE.md) for step-by-step instructions.

**What you'll need:**
1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create two forms
3. Copy the form IDs
4. Update lines 30 and 27 in your code files

**For detailed deployment:** See [SETUP.md](SETUP.md)

---

## 🌐 Deploy to Production

### Easy Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click Deploy
   - Done! Your site is live in ~2 minutes

---

## 📱 Website Pages

- **Home** - `/` - Landing page with hero and services preview
- **About Us** - `/about` - Company story, mission, vision, values
- **Services** - `/services` - Four main services with details
- **Jobs** - `/jobs` - Career opportunities
- **Apply** - `/apply` - Job application form
- **Contact** - `/contact` - Contact information and form
- **Privacy** - `/privacy` - Privacy policy

---

## 🎨 Customization

### Change Colors

Edit `app/globals.css` - look for CSS variables at the top:
```css
:root {
  --primary-blue: #007BFF;
  --primary-light: #4F9FF8;
  /* ... */
}
```

### Update Contact Info

Edit these files:
- `components/Footer.tsx` - Footer contact information
- `app/contact/page.tsx` - Contact page details

### Add Your Content

All content is in the component files - just edit the text directly!

---

## 📋 Checklist Before Going Live

- [ ] Set up Formspree account
- [ ] Update form IDs in code
- [ ] Test all forms locally
- [ ] Deploy to Vercel/Netlify
- [ ] Test forms on live site
- [ ] Add custom domain (optional)
- [ ] Add favicon (optional)
- [ ] Add Google Maps (optional)

---

## 🆘 Need Help?

Check these files:
- **SETUP.md** - Detailed setup instructions
- **README.md** - Full documentation
- [formspree.io/help](https://help.formspree.io) - Formspree help
- [nextjs.org/docs](https://nextjs.org/docs) - Next.js docs

---

**Questions?** All form submissions go to: **infovihalilycareinc@gmail.com**

