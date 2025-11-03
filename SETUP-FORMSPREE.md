# Quick Formspree Setup Guide

## ⚠️ Current Status

**Your forms are currently not configured.** You'll see a helpful message when submitting forms that tells you to set up Formspree.

## ✅ Quick Setup (5 Minutes)

### Step 1: Sign Up for Formspree
1. Go to https://formspree.io
2. Click "Sign Up" (free plan is perfect)
3. Verify your email

### Step 2: Create Your First Form (Job Application)

1. In Formspree dashboard, click **"New Form"**
2. **Form Name:** `Job Applications - Viha Lily Care`
3. **Email Recipient:** `infovihalilycareinc@gmail.com`
4. Click **"Create"**
5. **Copy the Form ID** - it looks like: `xkvbnpqz` or `abc123def`

### Step 3: Create Your Second Form (Contact)

1. Click **"New Form"** again
2. **Form Name:** `Contact Form - Viha Lily Care`
3. **Email Recipient:** `infovihalilycareinc@gmail.com`
4. Click **"Create"**
5. **Copy the Form ID** - different from the first one

### Step 4: Update Your Code

Now update the form IDs in your code:

#### Update Job Application Form

**File:** `app/apply/page.tsx`  
**Line:** 30

**Change this:**
```typescript
const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'; // Replace with your actual Formspree form ID
```

**To this (using your actual form ID):**
```typescript
const FORMSPREE_FORM_ID = 'xkvbnpqz'; // Replace with your actual Formspree form ID
```

#### Update Contact Form

**File:** `app/contact/page.tsx`  
**Line:** 27

**Change this:**
```typescript
const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'; // Replace with your actual Formspree form ID
```

**To this (using your actual form ID):**
```typescript
const FORMSPREE_FORM_ID = 'abc123def'; // Replace with your actual Formspree form ID
```

### Step 5: Test It!

1. Save your files
2. Restart dev server if needed: `npm run dev`
3. Go to http://localhost:3000/apply
4. Submit a test application
5. Check `infovihalilycareinc@gmail.com` for the email!

---

## 🎉 Done!

Your forms are now working and will send emails to `infovihalilycareinc@gmail.com`.

---

## 📸 Visual Guide

### Where to Find Your Form ID

After creating a form in Formspree, you'll see a URL like:
```
https://formspree.io/f/xkvbnpqz
                    ^^^^^^^^^
                    This is your Form ID!
```

Just copy that ID and paste it in your code.

---

## 🆘 Having Trouble?

### "Form submission limit reached"
- Free Formspree allows 50 submissions per month
- If you need more, upgrade to a paid plan or create multiple forms

### Not receiving emails
- Check spam folder
- Verify email address in Formspree settings
- Make sure you verified your Formspree account email

### Forms still showing error message
- Make sure you saved the files
- Restart your dev server: `npm run dev`
- Check the browser console (F12) for any errors

---

## 📞 Need More Help?

- Formspree Help: https://help.formspree.io
- Contact: infovihalilycareinc@gmail.com

