# 🚀 AI-EditPro - Complete Deployment Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Deployment Options](#deployment-options)
3. [Local Development](#local-development)
4. [Production Deployment](#production-deployment)
5. [Email Configuration](#email-configuration)
6. [Troubleshooting](#troubleshooting)

---

## ⚡ Quick Start

### For Local Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Visit http://localhost:3000
```

### For Production (Vercel - Recommended)
```bash
# Push to GitHub
git push origin main

# Visit vercel.com → Import Project → Select aieditpro
# Deploy automatically in 5 minutes
```

---

## 🎯 Deployment Options

### 1. **Vercel** ⭐ RECOMMENDED
- **Time:** 5 minutes
- **Cost:** Free → $20/month
- **Best for:** Quick deployment, no server management
- **Steps:** See [QUICK_DEPLOY.md](./QUICK_DEPLOY.md)

### 2. **Docker + VPS**
- **Time:** 30 minutes
- **Cost:** $5-20/month
- **Best for:** Full control, self-hosted
- **Steps:** See [DEPLOYMENT.md](./DEPLOYMENT.md#-option-2-docker--vps-deployment)

### 3. **Traditional Hosting**
- **Time:** 20 minutes
- **Cost:** $5-15/month
- **Best for:** Shared hosting environments
- **Steps:** See [DEPLOYMENT.md](./DEPLOYMENT.md#-option-3-traditional-hosting-cpanelplesk)

---

## 💻 Local Development

### Prerequisites
- Node.js 20+
- npm or yarn
- Git

### Setup
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/aieditpro.git
cd aieditpro

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your email credentials

# Start development server
npm run dev
```

### Access
- **Local:** http://localhost:3000
- **Network:** http://172.29.128.1:3000

### Available Routes
- `/` - Homepage
- `/converter` - File converter
- `/tools` - Developer tools
- `/contact` - Contact form
- `/privacy-policy` - Privacy Policy
- `/terms-conditions` - Terms & Conditions

---

## 🚀 Production Deployment

### Step 1: Prepare Code
```bash
# Ensure everything is committed
git status

# Build production
npm run build

# Test production build
npm start
```

### Step 2: Push to GitHub
```bash
git push origin main
```

### Step 3: Choose Deployment Method

#### A. Vercel (Fastest)
1. Go to https://vercel.com
2. Sign in with GitHub
3. Import this repository
4. Add environment variables
5. Deploy

#### B. Docker VPS
```bash
# SSH to server
ssh root@your-server-ip

# Clone and deploy
git clone https://github.com/YOUR_USERNAME/aieditpro.git
cd aieditpro
docker-compose up -d
```

#### C. Traditional Hosting
```bash
# Upload via FTP/SFTP
# Then via SSH:
npm install
npm run build
# Configure in cPanel
```

### Step 4: Configure Domain
Point `aieditpro.net` to deployment:

**Vercel:**
- Vercel Dashboard → Domains → Add `aieditpro.net`

**VPS:**
- Domain Registrar → DNS → Point to server IP

**Hosting:**
- Control Panel → Domains → Point to hosting nameservers

---

## 📧 Email Configuration

### Current Status
✅ Contact form functional
✅ Email system ready
⏳ Waiting for email credentials to activate

### How to Enable Email

#### Step 1: Choose Email Service

**Gmail (Recommended):**
```bash
# Generate App Password:
# 1. Enable 2-Step Verification on Gmail
# 2. Go to https://myaccount.google.com/apppasswords
# 3. Select "Mail" and "Windows Computer"
# 4. Copy 16-character password
```

**SendGrid (Professional):**
```bash
# Go to https://sendgrid.com
# Create API key
```

#### Step 2: Add to Environment
Create `.env.local` (for local) or production environment variables:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
RECIPIENT_EMAIL=support@aieditpro.net
```

#### Step 3: Test
```bash
# Restart dev server
npm run dev

# Visit http://localhost:3000/contact
# Submit test form
# Check email inbox
```

---

## 📁 Project Structure

```
aieditpro/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Homepage
│   │   ├── layout.tsx               # Root layout
│   │   ├── Navbar.tsx               # Navigation
│   │   ├── DonationWidget.tsx        # Donation modal
│   │   ├── contact/page.tsx          # Contact form
│   │   ├── privacy-policy/page.tsx   # Privacy Policy
│   │   ├── terms-conditions/page.tsx # Terms & Conditions
│   │   ├── api/contact/route.ts      # Contact API
│   │   └── tools/                    # Developer tools
│   └── data/tools.ts                 # Tools configuration
├── public/
│   ├── robots.txt                   # SEO
│   └── sitemap.xml                  # Sitemap
├── Dockerfile                        # Docker image
├── docker-compose.yml               # Docker compose
├── nginx.conf                       # Nginx config
├── DEPLOYMENT.md                    # Deployment guide
├── EMAIL_SETUP.md                   # Email setup
├── QUICK_DEPLOY.md                  # Quick reference
└── package.json
```

---

## 🔧 Build & Deployment Commands

### Development
```bash
npm run dev          # Start dev server on port 3000
```

### Production
```bash
npm run build        # Build for production
npm start            # Start production server
```

### Docker
```bash
docker build -t aieditpro .                    # Build image
docker-compose up -d                            # Start containers
docker-compose logs -f app                      # View logs
docker-compose down                             # Stop containers
```

---

## 📊 Performance & Monitoring

### Before Deployment Checklist
- [ ] All pages tested locally
- [ ] Build succeeds: `npm run build`
- [ ] No console errors
- [ ] Contact form functional
- [ ] Email configured (if using)
- [ ] All links working
- [ ] Responsive on mobile

### After Deployment
- [ ] Site accessible at aieditpro.net
- [ ] HTTPS working (green lock)
- [ ] All pages loading
- [ ] Contact form working
- [ ] Performance score 90+ (Lighthouse)
- [ ] No errors in console

### Monitoring Tools
- **Uptime:** UptimeRobot (free)
- **Performance:** Google Lighthouse
- **Analytics:** Vercel Dashboard (if using Vercel)

---

## 🛡️ Security

### Configured
✅ HTTPS encryption
✅ Input validation on contact form
✅ XSS protection (Next.js built-in)
✅ CSRF protection
✅ Environment variables for secrets
✅ Security headers configured

### To Add (Optional)
- [ ] Rate limiting on contact form
- [ ] CAPTCHA on contact form
- [ ] Web Application Firewall (WAF)
- [ ] DDoS protection

---

## 🐛 Troubleshooting

### Build Fails
```bash
npm run build -- --verbose
# Check for TypeScript errors
# Verify all imports correct
```

### Dev Server Won't Start
```bash
# Kill any process on port 3000
lsof -i :3000
kill -9 <PID>

# Clear Next.js cache
rm -rf .next

# Restart
npm run dev
```

### Email Not Sending
```bash
# Verify .env variables
cat .env.local

# Check API endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test","type":"general"}'

# Check server logs
```

### Slow Performance
```bash
# Run Lighthouse audit
# Check bundle size: npm run build && du -sh .next/
# Analyze images: npx next/bundle-analyzer
```

### Domain Not Working
```bash
# Check DNS propagation
nslookup aieditpro.net
dig aieditpro.net

# Wait 24-48 hours for DNS update
```

---

## 📞 Support & Resources

### Documentation
- **Next.js:** https://nextjs.org/docs
- **Vercel:** https://vercel.com/docs
- **Docker:** https://docs.docker.com
- **Node.js:** https://nodejs.org/docs

### Tools
- **Bundle Analyzer:** `npm install --save-dev @next/bundle-analyzer`
- **Lighthouse:** https://pagespeed.web.dev
- **DNS Checker:** https://www.nslookup.io

---

## 🎉 Deployment Success Checklist

### Final Verification
- [ ] Site accessible at aieditpro.net
- [ ] HTTPS certificate active
- [ ] Homepage displays correctly
- [ ] All tools accessible
- [ ] Contact form functional
- [ ] Privacy Policy readable
- [ ] Terms & Conditions readable
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] Lighthouse score 90+
- [ ] Email notifications working (if configured)

### Next Steps
1. ✅ Deploy to production
2. ✅ Verify all functionality
3. ✅ Configure email (optional)
4. ✅ Setup monitoring
5. ✅ Enable analytics
6. ✅ Regular backups

---

## 📈 Post-Launch Tasks

### Week 1
- Monitor uptime and performance
- Check error logs
- Test contact form submissions
- Verify email delivery

### Week 2-4
- Analyze user behavior
- Monitor page load times
- Fix any reported issues
- Optimize performance

### Monthly
- Review analytics
- Update dependencies: `npm update`
- Backup data
- Monitor security

---

## 🚀 Ready to Deploy?

### Choose Your Method:
1. **Vercel** → See [QUICK_DEPLOY.md](./QUICK_DEPLOY.md)
2. **Docker** → See [DEPLOYMENT.md](./DEPLOYMENT.md#-option-2-docker--vps-deployment)
3. **Hosting** → See [DEPLOYMENT.md](./DEPLOYMENT.md#-option-3-traditional-hosting-cpanelplesk)

**Your site will be live in 5-30 minutes!**

---

## 📝 Quick Commands Reference

```bash
# Development
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Git
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push origin main # Push to GitHub

# Docker
docker build -t aieditpro .     # Build image
docker-compose up -d             # Start containers
docker-compose logs -f app       # View logs
docker-compose down              # Stop containers

# Testing
npm run lint         # Check code quality
npm run build        # Verify production build
```

---

## 🎯 Current Status

✅ **Development:** Complete and tested
✅ **Local Testing:** All pages working
✅ **Build:** Passing (no errors)
✅ **Code Quality:** Clean and optimized
✅ **Documentation:** Comprehensive
⏳ **Production:** Ready to deploy
⏳ **Email:** Ready (needs credentials)

**Next Action:** Choose deployment option and follow steps above.
