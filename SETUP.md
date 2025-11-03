# Setup Guide for Viha Lily Care Inc. Website

This guide will help you set up form submissions and deploy the website.

## 📧 Form Setup - Formspree (Recommended)

### Step 1: Create a Formspree Account

1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Two Forms

You'll need **two separate forms** for the job application and contact form.

#### Form 1: Job Application Form

1. In your Formspree dashboard, click "New Form"
2. Name it "Job Application" or "Viha Lily Care - Applications"
3. Add your email address: `infovihalilycareinc@gmail.com`
4. Copy the form ID (it will look like `xkvbnpqz` or similar)
5. Keep this ID - you'll need it in the next step

#### Form 2: Contact Form

1. In your Formspree dashboard, click "New Form" again
2. Name it "Contact Form" or "Viha Lily Care - Contact"
3. Add your email address: `infovihalilycareinc@gmail.com`
4. Copy the form ID (it will look like `abc123def` or similar)
5. Keep this ID - you'll need it in the next step

### Step 3: Update Your Website Code

Replace `YOUR_FORM_ID` with your actual Formspree form IDs:

#### In `app/apply/page.tsx` (line 33):

```typescript
const response = await fetch('https://formspree.io/f/YOUR_APPLICATION_FORM_ID', {
```

Replace `YOUR_APPLICATION_FORM_ID` with the form ID you got from Step 2, Form 1.

#### In `app/contact/page.tsx` (line 30):

```typescript
const response = await fetch('https://formspree.io/f/YOUR_CONTACT_FORM_ID', {
```

Replace `YOUR_CONTACT_FORM_ID` with the form ID you got from Step 2, Form 2.

### Step 4: Test Form Submissions

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:3000/apply`
3. Fill out and submit the job application form
4. Check your email at `infovihalilycareinc@gmail.com` for the submission
5. Do the same for the contact form at `http://localhost:3000/contact`

---

## 🚀 Deployment Options

### Option 1: Deploy to Vercel (Recommended - Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Import Project"
   - Select your repository
   - Click "Deploy" (all settings are automatic)
   - Your site will be live in ~2 minutes at `https://your-project.vercel.app`

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., vihalilycare.com)
   - Follow DNS setup instructions

### Option 2: Deploy to Netlify

1. **Push to GitHub** (same as Step 1 above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with your GitHub account
   - Click "New site from Git"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"
   - Your site will be live at `https://random-name.netlify.app`

3. **Custom Domain (Optional):**
   - In Netlify dashboard, go to Site settings → Domain management
   - Add your custom domain
   - Follow DNS setup instructions

### Option 3: Deploy to Cloudflare Pages

1. **Push to GitHub** (same as Step 1 above)

2. **Deploy to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages
   - Click "Create a project"
   - Connect to your GitHub repository
   - Build settings:
     - Framework preset: Next.js
     - Build command: `npm run build`
     - Build output directory: `.next`
   - Click "Save and Deploy"
   - Your site will be live at `https://your-project.pages.dev`

---

## 📝 After Deployment

### Important Steps:

1. **Update Formspree Allowed Domains:**
   - Go to Formspree dashboard
   - For each form, go to Settings → Domains
   - Add your deployed domain (e.g., `your-project.vercel.app`)

2. **Test Everything:**
   - Visit your live website
   - Test all navigation links
   - Submit a test job application
   - Submit a test contact form
   - Check that you receive emails at `infovihalilycareinc@gmail.com`

3. **Optional Enhancements:**
   - Add a favicon in `public/favicon.ico`
   - Add a logo in the navbar
   - Enable Google Maps on contact page (get embed code from Google Maps)
   - Set up Google Analytics (optional)

---

## 🆘 Troubleshooting

### Forms Not Working?

1. Check that you updated `YOUR_FORM_ID` in both files
2. Verify Formspree form IDs are correct
3. Check browser console for errors (F12 → Console tab)
4. Make sure your deployed domain is added to Formspree allowed domains

### Build Errors?

1. Make sure you ran `npm install` first
2. Check for TypeScript errors: `npm run lint`
3. Delete `.next` folder and try again: `npm run build`

### Can't Receive Emails?

1. Check spam folder
2. Verify email address in Formspree settings
3. Make sure Formspree sent you a confirmation email

---

## 💡 Need Help?

- Formspree Support: [help.formspree.io](https://help.formspree.io)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)

---

**🎉 Congratulations!** Your nursing agency website is now live!

