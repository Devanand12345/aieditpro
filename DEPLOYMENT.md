# 🚀 AI-EditPro Deployment Guide

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)
**Best for:** Next.js apps, automatic deployments, free tier available
- Zero configuration needed
- Automatic HTTPS
- CI/CD included
- Custom domain support

### Option 2: Docker + VPS
**Best for:** Full control, multiple apps, custom setup
- Requires Docker knowledge
- Self-hosted server
- Maximum flexibility

### Option 3: Traditional Hosting
**Best for:** Shared hosting providers
- Using FTP/SFTP
- cPanel/Plesk support
- Limited Node.js support

---

## 🔵 **Option 1: Vercel Deployment (RECOMMENDED)**

### Prerequisites
- GitHub account (free)
- Vercel account (free at vercel.com)
- Your code pushed to GitHub

### Step 1: Push Code to GitHub

```bash
# Initialize git (if not done)
git init

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/aieditpro.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to **https://vercel.com**
2. Click **Sign Up** → Choose **GitHub**
3. Authorize Vercel to access your GitHub account
4. Click **Import Project**
5. Select your `aieditpro` repository
6. Click **Import**

### Step 3: Configure Project Settings

**Framework:** Next.js (auto-detected)
**Build Command:** `npm run build`
**Output Directory:** `.next`
**Install Command:** `npm install`

### Step 4: Add Environment Variables

Click **Environment Variables** and add:
```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=support@aieditpro.net
```

*(Leave blank for now, add later)*

### Step 5: Deploy

Click **Deploy** button

Vercel will:
- Build your app
- Run tests
- Deploy to CDN
- Give you a live URL

### Step 6: Connect Custom Domain

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Enter **aieditpro.net**
4. Follow DNS instructions to point domain to Vercel

**DNS Setup (if using Vercel Nameservers):**
- Change your domain registrar's nameservers to Vercel's
- Takes 24-48 hours to propagate

**DNS Setup (if keeping current registrar):**
- Add CNAME record: `aieditpro.net` → `cname.vercel-dns.com`
- Add A record pointing to Vercel IP (shown in Vercel dashboard)

### Automatic Deployments

Every time you push to GitHub:
```bash
git add .
git commit -m "Your message"
git push origin main
```

Vercel automatically deploys!

---

## 🐳 **Option 2: Docker + VPS Deployment**

### Prerequisites
- VPS with Ubuntu/Debian
- Docker & Docker Compose installed
- SSH access to server
- Domain pointing to server IP

### Step 1: Create Dockerfile

Create `Dockerfile` in project root:

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]
```

### Step 2: Create Docker Compose File

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - EMAIL_SERVICE=gmail
      - EMAIL_USER=${EMAIL_USER}
      - EMAIL_PASSWORD=${EMAIL_PASSWORD}
      - RECIPIENT_EMAIL=${RECIPIENT_EMAIL}
    restart: always
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - app
    restart: always
```

### Step 3: Create Nginx Config

Create `nginx.conf`:

```nginx
events {
    worker_connections 1024;
}

http {
    upstream app {
        server app:3000;
    }

    server {
        listen 80;
        server_name aieditpro.net www.aieditpro.net;
        
        # Redirect HTTP to HTTPS
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 443 ssl;
        server_name aieditpro.net www.aieditpro.net;

        ssl_certificate /etc/nginx/ssl/cert.pem;
        ssl_certificate_key /etc/nginx/ssl/key.pem;

        location / {
            proxy_pass http://app;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
}
```

### Step 4: Deploy to VPS

```bash
# SSH into your server
ssh root@your-server-ip

# Clone repository
git clone https://github.com/YOUR_USERNAME/aieditpro.git
cd aieditpro

# Create .env file
cat > .env.local << EOF
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=support@aieditpro.net
EOF

# Start containers
docker-compose up -d

# Check status
docker-compose ps
```

### Step 5: Setup SSL Certificate

```bash
# Using Let's Encrypt (free)
docker run -it --rm \
  -v /app/ssl:/etc/letsencrypt \
  certbot/certbot certonly --standalone \
  -d aieditpro.net \
  -d www.aieditpro.net
```

### Update & Redeploy

```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker-compose up -d --build
```

---

## 🌐 **Option 3: Traditional Hosting (cPanel/Plesk)**

### Prerequisites
- Hosting account with Node.js support
- SSH access
- cPanel or similar control panel

### Step 1: Upload Files

Using FTP/SFTP:
```
ftp://your-hosting.com
User: your-username
Password: your-password

Upload entire project to: /home/username/public_html/aieditpro/
```

### Step 2: Install Dependencies

SSH into server:
```bash
ssh username@your-hosting.com
cd ~/public_html/aieditpro
npm install
npm run build
```

### Step 3: Setup Node.js App

In cPanel:
1. Go to **Setup Node.js App**
2. Click **Create Application**
3. Set **Node.js version:** 20.x
4. Set **Application root:** `/home/username/public_html/aieditpro`
5. Set **Application URL:** `aieditpro.net`
6. Set **Startup file:** `npm start`
7. Click **Create**

### Step 4: Configure PM2 (Process Manager)

```bash
npm install -g pm2

pm2 start npm --name "aieditpro" -- start
pm2 startup
pm2 save
```

### Step 5: Setup Reverse Proxy

cPanel should auto-configure Nginx/Apache to reverse proxy to Node.js

---

## 📊 **Comparison Table**

| Feature | Vercel | Docker VPS | Traditional |
|---------|--------|-----------|-------------|
| Setup Time | 5 min | 30 min | 20 min |
| Cost | Free-$20/mo | $5-20/mo | $5-15/mo |
| Scaling | Automatic | Manual | Limited |
| SSL | Free | Free | Free |
| Uptime | 99.95% | 99.5% | 99.0% |
| Custom Domain | ✅ | ✅ | ✅ |
| Email Support | ✅ | ✅ | ✅ |
| Cold Starts | Possible | None | None |

---

## ✅ **Pre-Deployment Checklist**

### Code Quality
- [ ] All pages tested locally
- [ ] No console errors
- [ ] Build passes: `npm run build`
- [ ] All links working

### Environment
- [ ] `.env.local` configured with email credentials
- [ ] No sensitive data in code
- [ ] `.gitignore` includes `.env.local`

### Performance
- [ ] Images optimized
- [ ] No unused packages
- [ ] Build size reasonable
- [ ] Lighthouse score 90+

### Security
- [ ] HTTPS enforced
- [ ] No hardcoded secrets
- [ ] Rate limiting on contact form (optional)
- [ ] CORS configured if needed

### Content
- [ ] Privacy Policy complete
- [ ] Terms & Conditions complete
- [ ] Contact form tested
- [ ] All legal pages accessible

---

## 🔧 **Post-Deployment Setup**

### 1. Monitor Performance
```bash
# Vercel: View analytics in dashboard
# VPS: Monitor with: pm2 monit
```

### 2. Setup Email Alerts
- Configure uptime monitoring (UptimeRobot, Pingdom)
- Set alerts for form submission failures

### 3. Enable Backups
- **Vercel:** Automatic (no action needed)
- **VPS:** Setup automated git backups
```bash
# Setup backup cron job
0 0 * * * cd ~/aieditpro && git add . && git commit -m "Auto backup" && git push
```

### 4. Monitor Logs
```bash
# Vercel: View in dashboard
# VPS: View with: docker-compose logs -f app
```

### 5. Database Backups (if needed)
- Currently no database needed
- If you add one, setup automated backups

---

## 🚨 **Troubleshooting**

### Pages Not Loading
```bash
# Verify build
npm run build

# Check for errors
npm run dev
```

### Email Not Sending
```bash
# Check .env variables
cat .env.local

# Test email configuration
# Go to /contact and submit form
# Check console for errors
```

### SSL Certificate Issues
```bash
# Renew certificate
docker run -it --rm \
  -v /app/ssl:/etc/letsencrypt \
  certbot/certbot renew
```

### Performance Issues
```bash
# Check build size
npm run build
du -sh .next/

# Analyze bundle
npm install --save-dev @next/bundle-analyzer
```

---

## 📝 **Deployment Commands Summary**

### Vercel
```bash
# Just push to GitHub - auto deploys!
git push origin main
```

### Docker VPS
```bash
# Deploy
docker-compose up -d --build

# Update
git pull && docker-compose up -d --build

# Stop
docker-compose down

# Logs
docker-compose logs -f app
```

### Traditional Hosting
```bash
# Update code
git pull origin main

# Rebuild
npm run build

# Restart app
pm2 restart aieditpro
```

---

## 🎯 **Recommended: Vercel Deployment**

For AI-EditPro, I recommend **Vercel** because:

✅ **Zero configuration** - Just connect GitHub
✅ **Automatic HTTPS** - Free SSL certificate
✅ **CDN included** - Fast global delivery
✅ **Serverless** - Scales automatically
✅ **Free tier** - Start for $0/month
✅ **Preview deployments** - Test before production
✅ **Analytics** - Built-in monitoring

### Quick Start with Vercel

1. Push to GitHub
2. Go to vercel.com
3. Click "Import Project"
4. Select your repository
5. Add environment variables
6. Click Deploy
7. Connect domain (aieditpro.net)

**That's it!** Your site is live in 5 minutes.

---

## 📞 **Need Help?**

### Documentation
- Vercel: https://vercel.com/docs
- Next.js: https://nextjs.org/docs
- Docker: https://docs.docker.com
- Node.js: https://nodejs.org/docs

### Common Issues
- Check build logs in deployment dashboard
- Verify environment variables are set
- Test email configuration in .env.local
- Check domain DNS settings (24-48 hour propagation)

### Next Steps
1. Choose deployment option
2. Follow the steps above
3. Test all pages on production
4. Monitor performance
5. Setup backups & monitoring
