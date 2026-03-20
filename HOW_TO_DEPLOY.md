# 🚀 AI-EditPro - Deploy Now

## Choose Your Deployment Option

You have 3 choices. Pick one:

---

## ⭐ OPTION 1: Vercel (EASIEST - 5 Minutes)

**Best for:** Fastest deployment, zero maintenance, automatic HTTPS

**Limitation:** File converter (Gotenberg) won't work on Vercel (serverless platform)
**Solution:** Use this only if you don't need file converter, or use Docker for that

### Steps:

**Step 1: Push to GitHub**
```bash
git push origin main
```

**Step 2: Go to Vercel**
- Visit https://vercel.com
- Sign in with GitHub
- Click "Add New..." → "Project"
- Select "aieditpro" repository
- Click "Import"

**Step 3: Configure**
- Framework: Next.js (auto-detected)
- Build Command: `npm run build`
- Environment Variables:
  ```
  EMAIL_SERVICE=gmail
  EMAIL_USER=aieditpronet@gmail.com
  EMAIL_PASSWORD=knia ltjz hrab gnin
  RECIPIENT_EMAIL=aieditpronet@gmail.com
  GOTENBERG_URL=https://your-gotenberg-server.com
  ```

**Step 4: Deploy**
- Click "Deploy"
- Wait 2-3 minutes
- Get live URL

**Step 5: Connect Domain**
- Vercel Dashboard → Settings → Domains
- Add "aieditpro.net"
- Follow DNS instructions

**Result:** ✅ Website live at aieditpro.net (file converter requires separate Gotenberg)

---

## 🐳 OPTION 2: Docker + VPS (RECOMMENDED FOR YOU - 30 Minutes)

**Best for:** Full functionality including file converter, maximum control

**Includes:** App, Gotenberg, Nginx, Email

### What You Need:
- VPS server ($5-20/month from DigitalOcean, Linode, AWS, etc.)
- SSH access to server
- Domain pointing to server

### Steps:

**Step 1: Get a VPS Server**

Popular options:
- **DigitalOcean** ($6/mo, 1GB RAM)
- **Linode** ($5/mo, 1GB RAM)
- **AWS** (free tier available)
- **Hetzner** ($5/mo, 2GB RAM)

Choose Ubuntu 22.04 or Debian 12

**Step 2: SSH into Server**
```bash
ssh root@your-server-ip
```

**Step 3: Install Docker**
```bash
# Update system
apt update && apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt install docker-compose -y

# Verify
docker --version
```

**Step 4: Clone Repository**
```bash
cd /root
git clone https://github.com/YOUR_USERNAME/aieditpro.git
cd aieditpro
```

**Step 5: Create Environment File**
```bash
cat > .env.local << EOF
EMAIL_SERVICE=gmail
EMAIL_USER=aieditpronet@gmail.com
EMAIL_PASSWORD=knia ltjz hrab gnin
RECIPIENT_EMAIL=aieditpronet@gmail.com
GOTENBERG_URL=http://gotenberg:3000
EOF
```

**Step 6: Start Containers**
```bash
docker-compose up -d --build
```

**Step 7: Get SSL Certificate**
```bash
# Install Certbot
apt install certbot python3-certbot-nginx -y

# Get certificate
certbot certonly --standalone -d aieditpro.net -d www.aieditpro.net
```

**Step 8: Update Nginx Config**
Update nginx.conf with SSL paths pointing to:
```
/etc/letsencrypt/live/aieditpro.net/fullchain.pem
/etc/letsencrypt/live/aieditpro.net/privkey.pem
```

**Step 9: Restart Containers**
```bash
docker-compose down
docker-compose up -d
```

**Step 10: Point Domain to Server**
Go to your domain registrar and:
- Point A record to server IP
- Or change nameservers to server provider
- Wait 24-48 hours for DNS propagation

**Result:** ✅ Everything working: website + file converter + email + HTTPS

---

## 📦 OPTION 3: Traditional Hosting (20 Minutes)

**Best for:** Budget hosting, simple setup

**Limitation:** No file converter (Gotenberg not supported)

### Steps:

**Step 1: Get Hosting**
- Get shared hosting with Node.js 20+ support
- Examples: Heroku, Render, Railway, etc.

**Step 2: Deploy**

For **Heroku**:
```bash
npm install -g heroku
heroku login
heroku create aieditpro
git push heroku main
```

For **Render**:
1. Go to render.com
2. Click "New+" → "Web Service"
3. Connect GitHub
4. Select aieditpro repo
5. Add environment variables
6. Deploy

**Step 3: Add Domain**
- Add custom domain in hosting dashboard
- Point DNS to hosting

**Result:** ✅ Website live (no file converter)

---

## 📊 Quick Comparison

| Feature | Vercel | Docker VPS | Hosting |
|---------|--------|-----------|---------|
| Setup Time | 5 min | 30 min | 20 min |
| Cost | Free-$20 | $5-20 | Free-$15 |
| File Converter | ❌ No | ✅ Yes | ❌ No |
| Email | ✅ Yes | ✅ Yes | ✅ Yes |
| HTTPS | ✅ Free | ✅ Free | ✅ Free |
| Maintenance | Minimal | Moderate | Minimal |

---

## ✅ MY RECOMMENDATION

**Use Option 2 (Docker VPS)** because:
- ✅ File converter works perfectly
- ✅ All features included
- ✅ Affordable ($5-20/month)
- ✅ You already have Docker setup ready
- ✅ Full control over your app
- ✅ Great learning experience

---

## 🎯 Quick Deploy (Docker VPS)

```bash
# 1. SSH to server
ssh root@your-server-ip

# 2. Clone
cd /root
git clone https://github.com/YOUR_USERNAME/aieditpro.git
cd aieditpro

# 3. Environment
cat > .env.local << EOF
EMAIL_SERVICE=gmail
EMAIL_USER=aieditpronet@gmail.com
EMAIL_PASSWORD=knia ltjz hrab gnin
RECIPIENT_EMAIL=aieditpronet@gmail.com
GOTENBERG_URL=http://gotenberg:3000
EOF

# 4. Deploy
docker-compose up -d --build

# 5. Check
docker-compose ps

# 6. Test
curl http://localhost:3000
# Should show HTML

# 7. Get SSL
certbot certonly --standalone -d aieditpro.net

# 8. Update nginx.conf with SSL paths

# 9. Restart
docker-compose down && docker-compose up -d

# 10. Point domain to server IP
```

**Done!** Your site is live with everything working! 🎉

---

## 🧪 Test Everything

Once deployed:

1. ✅ Go to https://aieditpro.net
2. ✅ Check homepage loads
3. ✅ Test file converter (upload & convert)
4. ✅ Test contact form (submit & check email)
5. ✅ Check HTTPS (green lock)
6. ✅ Test on mobile

---

## 📞 Support

**For Vercel:** See DEPLOYMENT.md → Option 1
**For Docker:** See DEPLOYMENT.md → Option 2 OR GOTENBERG_SETUP.md
**For Hosting:** See DEPLOYMENT.md → Option 3

---

## 🚀 Ready?

Pick your option above and follow the steps!

**Questions? Check:**
- DEPLOYMENT.md - Full detailed guide
- GOTENBERG_SETUP.md - File converter setup
- DEPLOY_GOTENBERG_FIX.md - Quick Gotenberg fix
