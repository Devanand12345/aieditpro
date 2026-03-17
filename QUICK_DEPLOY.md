# ⚡ Quick Deployment Checklist

## 🎯 Before Deploying

### 1. Test Locally
```bash
npm run dev
# Visit http://localhost:3000
# Test all pages: home, contact, privacy, terms
```

### 2. Build Production
```bash
npm run build
# Should complete with no errors
```

### 3. Check Environment Variables
```bash
cat .env.local
# Must have: EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD, RECIPIENT_EMAIL
```

### 4. Final Git Commit
```bash
git add .
git commit -m "Ready for production deployment"
git push origin main
```

---

## 🚀 Choose Your Deployment Method

### ✅ EASIEST: Vercel (5 minutes)
1. Go to https://vercel.com
2. Sign in with GitHub
3. Import `aieditpro` repository
4. Add environment variables
5. Click Deploy
6. Connect domain `aieditpro.net`

**Result:** App live at aieditpro.net ✨

---

### ⚙️ ADVANCED: Docker VPS (30 minutes)
1. SSH into VPS: `ssh root@your-server-ip`
2. Clone repo: `git clone https://github.com/USERNAME/aieditpro.git`
3. Copy `docker-compose.yml` and `nginx.conf`
4. Create `.env.local` with email config
5. Run: `docker-compose up -d`
6. Point domain to server IP in DNS

**Result:** Self-hosted on your server ✨

---

### 📦 SIMPLE: Traditional Hosting (20 minutes)
1. Upload files via FTP to hosting
2. SSH and run: `npm install && npm run build`
3. In cPanel → Setup Node.js App
4. Configure port and startup file
5. Point domain to hosting

**Result:** App live via hosting provider ✨

---

## 🌐 Domain Setup

### If using Vercel:
1. In Vercel dashboard → Domains
2. Add `aieditpro.net`
3. Follow DNS instructions
4. Wait 24-48 hours

### If using VPS:
1. Go to domain registrar
2. Point nameservers OR A record to server IP
3. Wait 24-48 hours

### DNS Propagation Check:
```bash
nslookup aieditpro.net
# Should show your server IP
```

---

## ✅ Post-Deployment

### 1. Test Everything
- [ ] Homepage loads
- [ ] Contact form works
- [ ] Privacy Policy accessible
- [ ] Terms & Conditions accessible
- [ ] HTTPS working
- [ ] Mobile responsive

### 2. Setup Monitoring
- [ ] Uptimerobot (free) - monitors if site is down
- [ ] Email alerts enabled

### 3. Enable Email (if not already)
- [ ] Add `.env` variables on production
- [ ] Send test form submission
- [ ] Verify email received

---

## 📊 Performance Check

### Google Lighthouse Score
```bash
# Run after deployment
# Score should be 90+ on all metrics
```

### Core Web Vitals
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

Visit: https://pagespeed.web.dev

---

## 🔧 Common Issues & Fixes

### "Build Failed"
```bash
# Verify locally works
npm run build

# Check for TypeScript errors
npm run build -- --verbose

# Check .env variables
cat .env.local
```

### "Domain Not Working"
```bash
# Check DNS propagation
nslookup aieditpro.net

# Wait 24-48 hours for DNS to propagate
```

### "Email Not Sending"
```bash
# Verify .env variables on production
# Test with contact form submission
# Check server logs for errors
```

### "Site Slow"
```bash
# Check Lighthouse score
# Optimize images
# Reduce bundle size
# Enable caching headers
```

---

## 📞 Support

### Vercel Issues
- Dashboard: https://vercel.com/dashboard
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

### VPS Issues
- Docker: https://docs.docker.com
- Nginx: https://nginx.org/docs
- Node.js: https://nodejs.org

---

## 🎉 Success Indicators

✅ Site accessible at aieditpro.net
✅ HTTPS working (green lock icon)
✅ All pages loading quickly
✅ Contact form working
✅ Mobile responsive
✅ Lighthouse score 90+

---

## Next Steps

1. **Choose deployment method** (Vercel recommended)
2. **Follow setup steps** from DEPLOYMENT.md
3. **Test in production**
4. **Monitor performance**
5. **Setup email alerts**

**Your site will be live in 5-30 minutes!**
