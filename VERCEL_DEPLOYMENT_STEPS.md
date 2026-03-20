# 🚀 Deploy to Vercel - Step by Step

## VERCEL DEPLOYMENT GUIDE

Your AI-EditPro will be live at **aieditpro.net** in 5 minutes!

---

## 📋 What You Need

- ✅ GitHub account (free)
- ✅ Your code pushed to GitHub
- ✅ Your domain: aieditpro.net
- ✅ Email credentials already set up

---

## 🎯 Step 1: Push Code to GitHub

First, make sure all your code is pushed to GitHub:

```bash
cd C:\Users\dev07\AIEditPro\aieditpro

# Check status
git status

# Add all changes
git add .

# Commit
git commit -m "Prepare for Vercel deployment"

# Push to GitHub
git push origin main
```

✅ Done! Your code is on GitHub

---

## 🌐 Step 2: Go to Vercel

**Visit:** https://vercel.com

---

## 🔐 Step 3: Sign Up / Sign In

### If you don't have Vercel account:
1. Click **"Sign Up"**
2. Choose **"Continue with GitHub"**
3. Authorize Vercel to access GitHub
4. Click **"Authorize"**

### If you already have account:
1. Click **"Sign In"**
2. Choose **"GitHub"**
3. You're in!

---

## ➕ Step 4: Create New Project

After signing in:

1. Click **"Add New..."** button (top right)
2. Select **"Project"**

---

## 📂 Step 5: Import Repository

You'll see "Import Git Repository"

1. Under "GitHub", you should see your repositories
2. Find and click **"aieditpro"**
3. Click **"Import"**

---

## ⚙️ Step 6: Configure Project

You'll see project configuration screen:

### Framework Preset:
- Should show: **Next.js** (auto-detected) ✅

### Build and Output Settings:
- **Build Command:** `npm run build` ✅
- **Output Directory:** `.next` ✅
- **Install Command:** `npm install` ✅

*All should be auto-detected. Don't change them.*

### Root Directory:
- Should be: **./aieditpro** (if not, it's from your project root)

---

## 🔑 Step 7: Add Environment Variables

This is IMPORTANT for email to work!

1. Scroll down to **"Environment Variables"** section
2. Click **"Add"** (or similar button)
3. Add these 4 variables:

| Name | Value |
|------|-------|
| `EMAIL_SERVICE` | `gmail` |
| `EMAIL_USER` | `aieditpronet@gmail.com` |
| `EMAIL_PASSWORD` | `knia ltjz hrab gnin` |
| `RECIPIENT_EMAIL` | `aieditpronet@gmail.com` |

**Add each one:**
1. Enter Name
2. Enter Value
3. Click Add

**After adding all 4, you'll see them listed.**

---

## 🚀 Step 8: Deploy!

1. Click **"Deploy"** button (bottom right)
2. Wait for deployment to finish (2-3 minutes)

You'll see:
```
✓ Building...
✓ Uploading...
✓ Vercel Deployment Complete
```

---

## ✅ Step 9: Get Your Live URL

After deployment:

1. You'll see a success message
2. You'll get a temporary URL like: `https://aieditpro.vercel.app`
3. **Copy this URL** and test it works:
   - Open in browser
   - Check homepage loads
   - Try tools
   - Test contact form

---

## 🌍 Step 10: Connect Custom Domain

Now connect **aieditpro.net** to your Vercel deployment:

### In Vercel Dashboard:

1. Click your project name
2. Go to **"Settings"** tab
3. Click **"Domains"** in left sidebar
4. Click **"Add"** button
5. Enter: `aieditpro.net`
6. Click **"Add"**

### Vercel will show DNS instructions

You'll see something like:
```
Add these DNS records to your domain registrar:
- A record: @ → 76.76.19.165
- CNAME: www → cname.vercel-dns.com
```

---

## 🔗 Step 11: Update Domain DNS

Go to your domain registrar (GoDaddy, Namecheap, etc.):

1. Log in to your registrar
2. Find DNS settings
3. Add/Update these records:

**Option A (If using Vercel Nameservers):**
- Change nameservers to Vercel's provided ones
- Wait 24-48 hours

**Option B (If keeping current registrar):**
1. Add A record:
   - Name: `@` or `aieditpro.net`
   - Type: `A`
   - Value: `76.76.19.165` (from Vercel)

2. Add CNAME record:
   - Name: `www`
   - Type: `CNAME`
   - Value: `cname.vercel-dns.com`

3. Save
4. Wait 24-48 hours for DNS to propagate

---

## ⏳ Step 12: Wait for DNS Propagation

DNS can take 24-48 hours to fully propagate.

**To check if DNS is ready:**
```bash
nslookup aieditpro.net
# Should show your Vercel IP
```

Once DNS is ready:
- Visit https://aieditpro.net
- You should see your AI-EditPro site! 🎉

---

## 🧪 Test Everything Works

After deployment and DNS is working:

1. ✅ Homepage loads at aieditpro.net
2. ✅ Check HTTPS (green lock icon)
3. ✅ Go to /tools
4. ✅ Try a tool (JSON Beautifier, etc.)
5. ✅ Go to /contact
6. ✅ Submit contact form
7. ✅ Check aieditpronet@gmail.com for email
8. ✅ Check /privacy-policy
9. ✅ Check /terms-conditions
10. ✅ Test on mobile

---

## ⚠️ Known Limitation: File Converter

**File converter will NOT work** on Vercel because:
- Vercel is serverless (no persistent services)
- Gotenberg needs to run as a service
- Vercel doesn't support Docker services

**Workarounds:**
1. Don't use file converter (most features work)
2. Switch to Railway (everything works, still free)
3. Add separate Gotenberg server

---

## 🔄 Auto-Deployments

Great news! **Every time you push to GitHub, Vercel auto-deploys:**

```bash
# Make changes locally
git add .
git commit -m "Update something"
git push origin main

# Vercel automatically:
# 1. Detects push
# 2. Builds your app
# 3. Deploys to production
# Done! 🎉
```

---

## 🆘 Troubleshooting

### Deployment failed?
1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing environment variables (add them)
   - Build command wrong (should be `npm run build`)
   - Missing dependencies (check package.json)

### Domain not working?
1. DNS takes 24-48 hours
2. Check with: `nslookup aieditpro.net`
3. If still not working after 48h:
   - Verify DNS records are correct
   - Try clearing browser cache
   - Try incognito/private window

### Email not sending?
1. Check environment variables are correct in Vercel
2. Verify Gmail password is: `knia ltjz hrab gnin`
3. Make sure 2-Step Verification is on for Gmail account
4. Check Vercel logs for errors

### Something else broken?
1. Check Vercel build logs
2. Go to your project → Deployments → Click failed deployment
3. See the error messages
4. Fix in your code
5. Push to GitHub (auto-redeploys)

---

## 📊 After Deployment

### Your Site Includes:

✅ **Homepage**
✅ **17+ Developer Tools**
✅ **Contact Form** (with email)
✅ **Privacy Policy**
✅ **Terms & Conditions**
✅ **Donation Widget**
✅ **Mobile Responsive**
✅ **HTTPS/SSL** (free, automatic)
✅ **CDN** (fast global delivery)

❌ **File Converter** (not on Vercel, use Railway for this)

---

## 💡 Next Steps

1. **Now:** Follow steps 1-12 above
2. **After deployment:** Test everything works
3. **If needed:** Upgrade to Railway for file converter
4. **Optional:** Add monitoring (Uptime Robot)

---

## 📞 Need Help?

### Vercel Documentation:
- https://vercel.com/docs

### Common Vercel Issues:
- https://vercel.com/docs/projects/troubleshooting

### GitHub Help:
- https://docs.github.com

---

## ✨ Summary

Your AI-EditPro will be **LIVE and FREE** at **aieditpro.net** with:

✅ Website + Tools + Email working
✅ HTTPS + CDN included
✅ Automatic deployments
✅ No server maintenance
✅ No cost (forever free)

The only thing that won't work: File converter
(But everything else does! 🎉)

---

**Ready? Let's deploy!**

Follow steps 1-12 above and your site will be live! 🚀
