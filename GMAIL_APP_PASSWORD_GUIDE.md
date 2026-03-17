# 🔑 Generate Gmail App Password - Step by Step

## The Error We Got

When we tried to send a test email, Gmail rejected it with:
```
Username and Password not accepted
Error code: EAUTH (Bad Credentials)
```

**This means:** The password in `.env.local` is just a placeholder and needs to be replaced with your real Gmail App Password.

---

## ✅ How to Fix It (3 Steps)

### Step 1️⃣: Go to Gmail Account Settings
**Link:** https://myaccount.google.com/

1. Sign in with: **aieditpronet@gmail.com**
2. Click **"Security"** in the left sidebar
3. Look for **"2-Step Verification"**

### Step 2️⃣: Enable 2-Step Verification (Required for App Password)
1. Find "2-Step Verification"
2. Click **"Get started"** or **"Enable"**
3. Google will ask you to verify with your phone
4. Complete the verification
5. **2-Step Verification should now be ON** ✅

### Step 3️⃣: Generate App Password
**Link:** https://myaccount.google.com/apppasswords

1. Make sure you're signed in as: **aieditpronet@gmail.com**
2. You should see a dropdown menu
3. **App:** Select "Mail" (already selected)
4. **Device:** Select "Windows Computer"
5. Click **"Generate"** button
6. Google will show you a 16-character password like:
   ```
   abcd efgh ijkl mnop
   ```
7. **Copy this password** (click the copy icon)

---

## 🔧 Add Password to .env.local

### File Location:
```
C:\Users\dev07\AIEditPro\aieditpro\.env.local
```

### Current Content:
```env
GOTENBERG_URL=http://localhost:3002

EMAIL_SERVICE=gmail
EMAIL_USER=aieditpronet@gmail.com
EMAIL_PASSWORD=Enter your Gmail App Password here
RECIPIENT_EMAIL=aieditpronet@gmail.com
```

### What to Change:
Find this line:
```
EMAIL_PASSWORD=Enter your Gmail App Password here
```

Replace with your password. Example:
```
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

### After Editing:
```env
GOTENBERG_URL=http://localhost:3002

EMAIL_SERVICE=gmail
EMAIL_USER=aieditpronet@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
RECIPIENT_EMAIL=aieditpronet@gmail.com
```

**Save the file** ✅

---

## 🔄 Restart Dev Server

After updating `.env.local`, restart the server:

```bash
# Stop current server (if running)
# Press Ctrl+C in terminal

# Restart
npm run dev
```

Server should restart with the new environment variables loaded.

---

## 🧪 Test the Email

Once restarted, run the test again:

```powershell
powershell -File "C:\Users\dev07\AIEditPro\aieditpro\test-email.ps1"
```

**Expected Results:**
- ✅ Response Status: 200 (Success)
- ✅ Email received in aieditpronet@gmail.com inbox
- ✅ Subject: `[GENERAL] Test Email from AI-EditPro`
- ✅ Contains all form data

---

## 📧 What to Look For in the Email

When the test is successful, you'll receive an email like:

```
From: aieditpronet@gmail.com
To: aieditpronet@gmail.com
Subject: [GENERAL] Test Email from AI-EditPro

Content:
- Type: General
- From: Test User - AI-EditPro (test@example.com)
- Subject: Test Email from AI-EditPro
- Message: This is a test email to verify the contact form is working correctly...
- Submitted at: [Date & Time]
```

---

## ❓ Troubleshooting

### Problem: Still getting "Bad Credentials" error

**Check:**
1. Did you enable 2-Step Verification? (Required!)
2. Is the password exactly 16 characters?
3. Did you copy it correctly from Google?
4. Did you restart the dev server?
5. Are spaces included in password? (They are, copy as-is)

**Solution:**
- Revoke the app password: https://myaccount.google.com/apppasswords
- Generate a new one
- Copy carefully
- Paste into .env.local
- Restart server

### Problem: Can't find 2-Step Verification

**Solution:**
1. Go to: https://myaccount.google.com/security
2. Look for "2-Step Verification"
3. If you can't find it, your account may already have it enabled
4. Proceed to generate app password

### Problem: No option for App Passwords

**Solution:**
1. Make sure 2-Step Verification is enabled
2. Try logging out and back in
3. Use incognito/private browser window
4. If still not available, contact Google Support

---

## 🎯 Next: Send Real Emails

Once the test email works:

1. ✅ Go to http://localhost:3000/contact
2. ✅ Fill out the form with your information
3. ✅ Submit
4. ✅ Check aieditpronet@gmail.com for the email
5. ✅ You're done! 🎉

---

## 🚀 Production Deployment

When you deploy to aieditpro.net, add the same environment variables:

**For Vercel:**
- Vercel Dashboard → Project Settings → Environment Variables
- Add the 4 EMAIL_ variables with your Gmail App Password

**For Docker/VPS:**
- Update .env.local on the server with your Gmail App Password
- Restart container

---

## 📋 Checklist

- [ ] Enable 2-Step Verification: https://myaccount.google.com/security
- [ ] Generate App Password: https://myaccount.google.com/apppasswords
- [ ] Copy the 16-character password
- [ ] Update .env.local with password
- [ ] Save .env.local
- [ ] Restart dev server: npm run dev
- [ ] Run test: powershell -File test-email.ps1
- [ ] Check inbox for email
- [ ] Test contact form: http://localhost:3000/contact
- [ ] Submit form and verify email received

---

**Once you've done these steps and run the test, let me know the results!**
