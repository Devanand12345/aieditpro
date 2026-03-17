# ⚡ QUICK EMAIL SETUP FOR aieditpronet@gmail.com

## What You Need To Do (2 minutes)

### Step 1️⃣: Enable 2-Step Verification
Go to: https://myaccount.google.com/security

1. Click "2-Step Verification"
2. Click "Get Started"
3. Follow phone verification
4. Enable it

### Step 2️⃣: Generate App Password
Go to: https://myaccount.google.com/apppasswords

1. Select "Mail"
2. Select "Windows Computer" (or your device)
3. Click "Generate"
4. **Copy the 16-character password**

Example: `xxxx xxxx xxxx xxxx`

### Step 3️⃣: Add Password to .env.local
File: `.env.local` in project root

Find this line:
```
EMAIL_PASSWORD=Enter your Gmail App Password here
```

Replace with your password (example):
```
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

✅ **Save the file**

### Step 4️⃣: Restart Dev Server
```bash
# Stop: Ctrl+C
# Start:
npm run dev
```

### Step 5️⃣: Test It!
1. Go to http://localhost:3000/contact
2. Fill the form with test data
3. Click "Send Message"
4. Check your inbox: aieditpronet@gmail.com
5. You should see the email! ✅

---

## Current Status

✅ Email Configured:
```
FROM: aieditpronet@gmail.com
TO: aieditpronet@gmail.com
```

✅ Contact Form:
- Sends to your email when user submits
- User gets auto-reply confirmation
- All form data included

⏳ Waiting For:
- Gmail App Password (16 characters)

---

## When Deployed to aieditpro.net

### For Vercel:
1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add 4 variables:
   - EMAIL_SERVICE: `gmail`
   - EMAIL_USER: `aieditpronet@gmail.com`
   - EMAIL_PASSWORD: `your-16-char-password`
   - RECIPIENT_EMAIL: `aieditpronet@gmail.com`
3. Deploy

### For Docker/VPS:
1. Update `.env.local` on server
2. Restart: `docker-compose restart app`

### For Traditional Hosting:
1. Update environment variables in control panel
2. Restart application

---

## Need Help?

See: `GMAIL_SETUP.md` for detailed instructions
