## Email Configuration Guide for Contact Form

### Overview
The contact form has been implemented and is ready to send emails. Currently, it's configured to work without email setup, but to actually send emails, you'll need to configure email credentials.

### Files Created
- **`src/app/contact/page.tsx`** - Contact page with feedback form
- **`src/app/api/contact/route.ts`** - API endpoint that handles form submissions
- **`src/app/privacy-policy/page.tsx`** - Privacy Policy page
- **`src/app/terms-conditions/page.tsx`** - Terms & Conditions page

### Contact Form Features
✅ Multiple submission types:
- General Inquiry
- Feedback
- Bug Report  
- Feature Request

✅ Mobile-optimized responsive form
✅ Input validation (email format, required fields)
✅ Confirmation messages (success/error)
✅ Auto-reply capability (not yet activated)

### How to Enable Email Sending

#### Option 1: Gmail (Recommended for simplicity)
1. Enable 2-Step Verification on your Gmail account
2. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select Mail and Windows Computer
   - Copy the 16-character password
3. Create `.env.local` in project root:
```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

#### Option 2: SendGrid (Professional)
1. Sign up at https://sendgrid.com
2. Create API key
3. Update `.env.local`:
```
EMAIL_SERVICE=SendGrid
EMAIL_USER=apikey
EMAIL_PASSWORD=SG.your-api-key
RECIPIENT_EMAIL=your-email@sendgrid.com
```

#### Option 3: Other Services
The code uses `nodemailer`, which supports:
- Outlook/Microsoft 365
- Yahoo Mail
- Mailgun
- AWS SES
- Custom SMTP servers

### Environment Variables
Create `.env.local` in the project root with:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email-address
EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=support@aieditpro.net
```

### Current Behavior (Without Email Config)
- ✅ Form validates input
- ✅ Shows success message to user
- ✅ Form data is logged to console (for development)
- ❌ Email NOT sent yet
- The API returns success, so users won't know the difference

### Test the Form
1. Navigate to `/contact`
2. Fill out the form with:
   - Name: Test User
   - Email: test@example.com
   - Type: Feedback
   - Subject: Test Message
   - Message: This is a test
3. Click "Send Message"
4. You'll see: ✅ "Thank you! We'll get back to you soon."

### After Setting Up Email
1. Add environment variables to `.env.local`
2. Restart dev server: `npm run dev`
3. Test the form again
4. You should receive an email with the submission

### Form Submission Flow
```
User fills form
    ↓
Validates input
    ↓
Sends to /api/contact
    ↓
API validates again
    ↓
[IF EMAIL CONFIG EXISTS] → Sends 2 emails:
    1. Admin notification
    2. Auto-reply to user
[IF NO EMAIL CONFIG] → Logs to console
    ↓
Returns success response
    ↓
Shows confirmation message
```

### Email Templates
**Admin Email Subject:** `[{TYPE}] {SUBJECT}`
Example: `[FEEDBACK] Great new feature idea!`

**User Auto-Reply Subject:** `We received your message - AI-EditPro`

### Support
To add email support later:
1. Place `.env.local` in root
2. Add EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD, RECIPIENT_EMAIL
3. Restart dev server
4. Contact form will automatically start sending emails

No code changes needed - just environment variables!
