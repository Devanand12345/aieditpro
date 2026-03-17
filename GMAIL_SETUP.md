# 📧 Gmail Configuration for aieditpronet@gmail.com

## Quick Setup (2 minutes)

### Step 1: Enable 2-Step Verification
1. Go to https://myaccount.google.com/
2. Click "Security" in left sidebar
3. Find "2-Step Verification"
4. Click "Get Started"
5. Follow prompts to verify with your phone
6. Click "Turn on 2-Step Verification"

### Step 2: Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. You might need to sign in again
3. Select:
   - **App:** "Mail"
   - **Device:** "Windows Computer" (or your device)
4. Click "Generate"
5. You'll see a 16-character password like: `xxxx xxxx xxxx xxxx`
6. **Copy this password** (click the copy icon)

### Step 3: Add to Environment File
1. Open `.env.local` in project root
2. Find this line:
```
EMAIL_PASSWORD=Enter your Gmail App Password here
```
3. Replace with your 16-character password:
```
EMAIL_PASSWORD=xxxxxxxxxxxx
```
4. **Save the file**

### Step 4: Restart Dev Server
```bash
# Stop current dev server (Ctrl+C)
# Restart with:
npm run dev
```

### Step 5: Test Email
1. Go to http://localhost:3000/contact
2. Fill out the form:
   - Name: Test User
   - Email: your-email@gmail.com
   - Type: Feedback
   - Subject: Test Email
   - Message: This is a test
3. Click "Send Message"
4. Should see: ✅ "Thank you! We'll get back to you soon."
5. **Check your inbox for the email!**

---

## Your Email Configuration

```env
EMAIL_SERVICE=gmail
EMAIL_USER=aieditpronet@gmail.com
EMAIL_PASSWORD=your-16-char-password-here
RECIPIENT_EMAIL=aieditpronet@gmail.com
```

---

## What Happens When User Submits Form

### Email Sent to: aieditpronet@gmail.com

**Subject:** `[TYPE] SUBJECT`
- Example: `[FEEDBACK] Great new feature!`

**Email Contents:**
- Type of submission (Feedback, Bug, Feature, General)
- User's name and email
- Full message
- Timestamp

**Auto-Reply Sent to User:**
- Confirmation email
- Thanks for reaching out
- We'll respond within 24 hours

---

## Troubleshooting

### "Email Not Sending"

**Check 1: 2-Step Verification Enabled?**
```
✅ Must be enabled for App Password to work
```

**Check 2: App Password Correct?**
```
✅ Should be 16 characters (spaces ignored)
✅ Copy from https://myaccount.google.com/apppasswords
```

**Check 3: .env.local Updated?**
```bash
# Verify email is configured
cat .env.local

# Should show all 4 lines
```

**Check 4: Dev Server Restarted?**
```bash
# After changing .env.local, must restart:
npm run dev
```

**Check 5: Check Logs**
```
When you submit form, watch terminal for errors
```

---

## Accounts Setup

### Email Will Send FROM:
```
aieditpronet@gmail.com
```

### Email Will Send TO:
```
aieditpronet@gmail.com
```

### User Receives Reply FROM:
```
aieditpronet@gmail.com
```

---

## Features Enabled

✅ Contact form submissions sent to your email
✅ Bug reports sent to your email
✅ Feature requests sent to your email
✅ General feedback sent to your email
✅ Auto-reply sent to users
✅ All form data included in email
✅ Timestamp included

---

## Gmail Security Notes

✅ **App Password is Safe**
- Only allows email sending
- Cannot change passwords or settings
- Can be revoked anytime

✅ **Your Main Password is Safe**
- App Password is different
- Never share the main Gmail password

✅ **How to Revoke (if needed)**
- Go to https://myaccount.google.com/apppasswords
- Find "Mail - Windows Computer"
- Click delete button
- Generate a new one

---

## Next: Deploy with Email

When ready to deploy to production (aieditpro.net):

### For Vercel:
1. Go to Vercel Dashboard
2. Your Project → Settings → Environment Variables
3. Add these 4 variables:
   - `EMAIL_SERVICE`: gmail
   - `EMAIL_USER`: aieditpronet@gmail.com
   - `EMAIL_PASSWORD`: your-16-char-password
   - `RECIPIENT_EMAIL`: aieditpronet@gmail.com
4. Redeploy

### For Docker VPS:
1. SSH into server
2. Update `.env.local` with email config
3. Restart: `docker-compose restart app`

### For Traditional Hosting:
1. Update .env variables via hosting control panel
2. Restart application

---

## Test Results

When everything is configured:

1. ✅ Submit form at http://localhost:3000/contact
2. ✅ See success message
3. ✅ Check aieditpronet@gmail.com inbox
4. ✅ See email with all form data
5. ✅ User gets auto-reply confirmation

---

## Current Status

- [x] Email service: Gmail
- [x] Recipient: aieditpronet@gmail.com
- [x] Awaiting: Gmail App Password
- [x] Config file: Ready
- [x] Dev server: Ready

**Next Step:** Generate Gmail App Password and add to .env.local
