# 🔧 Fix: Gotenberg Service for File Conversion

## The Problem

Your converter is trying to connect to Gotenberg but it's not running in production:

```
Error: "Conversion service unavailable. Make sure Gotenberg is running."
```

Gotenberg is a microservice that converts files (PDF, DOCX, HTML, etc.)

---

## 🎯 Solutions

### ✅ OPTION 1: Docker Compose (Easiest)

Update your `docker-compose.yml` to include Gotenberg:

```yaml
version: '3.8'

services:
  app:
    build: .
    container_name: aieditpro
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      GOTENBERG_URL: http://gotenberg:3000
      EMAIL_SERVICE: ${EMAIL_SERVICE:-}
      EMAIL_USER: ${EMAIL_USER:-}
      EMAIL_PASSWORD: ${EMAIL_PASSWORD:-}
      RECIPIENT_EMAIL: ${RECIPIENT_EMAIL:-support@aieditpro.net}
    depends_on:
      - gotenberg
    restart: always
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    networks:
      - aieditpro_network

  gotenberg:
    image: gotenberg/gotenberg:8.0
    container_name: aieditpro_gotenberg
    ports:
      - "3002:3000"
    environment:
      GOTENBERG_DISABLE_GOOGLE_CHROME: "false"
    restart: always
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 30s
    networks:
      - aieditpro_network

  nginx:
    image: nginx:alpine
    container_name: aieditpro_nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
      - ./html:/usr/share/nginx/html:ro
    depends_on:
      - app
    restart: always
    networks:
      - aieditpro_network

networks:
  aieditpro_network:
    driver: bridge
```

**Deploy:**
```bash
docker-compose down
docker-compose up -d
```

---

### ✅ OPTION 2: Vercel (Without Gotenberg - Use External Service)

Gotenberg is a heavyweight service that doesn't work well on Vercel's serverless. Instead:

**Solution 1: Use Vercel with Third-Party Conversion API**
- Replace Gotenberg with CloudConvert, Zamzar, or similar
- Update API route to use external service
- Add API key to environment variables

**Solution 2: Deploy App Elsewhere**
- Use Vercel for frontend only (static export)
- Use Docker/VPS for backend with Gotenberg
- Use API Gateway for communication

**Recommended:** Stick with Docker VPS (simplest for file conversion)

---

### ✅ OPTION 3: Vercel + Separate Gotenberg Server

Keep frontend on Vercel, Gotenberg on separate server:

**1. Update .env in Vercel:**
```
GOTENBERG_URL=https://gotenberg.your-server.com
```

**2. On your VPS, run just Gotenberg:**
```bash
docker run -d \
  --name gotenberg \
  -p 3000:3000 \
  gotenberg/gotenberg:8.0
```

**3. Setup Nginx reverse proxy to Gotenberg**

---

## 🚀 For Your Current Setup (Docker VPS)

Your `docker-compose.yml` is missing Gotenberg. **Update it NOW:**

### Step 1: Backup current config
```bash
cp docker-compose.yml docker-compose.yml.backup
```

### Step 2: Update docker-compose.yml
Add Gotenberg service (see OPTION 1 above)

### Step 3: Update .env.local
```env
GOTENBERG_URL=http://gotenberg:3000
```

### Step 4: Redeploy
```bash
docker-compose down
docker-compose up -d --build
```

### Step 5: Test
Go to your site → Converter → Try uploading a file ✅

---

## 📊 Gotenberg Service Details

### What It Does:
- Converts files: PDF, DOCX, XLSX, PPTX, HTML, TXT, RTF, EPUB
- Uses LibreOffice for Office formats
- Uses Chromium for HTML→PDF
- Fast (~2-5 seconds per file)

### System Requirements:
- **Memory:** 512MB minimum (1GB recommended)
- **CPU:** 1 core minimum
- **Disk:** 500MB for Docker image

### Docker Image:
```
gotenberg/gotenberg:8.0 (280MB)
```

---

## 🔧 Verify Gotenberg is Running

### Check Container Status:
```bash
docker-compose ps
# Should show gotenberg container as "Up"
```

### Test Gotenberg Health:
```bash
curl http://localhost:3002/health
# Should return: OK
```

### View Logs:
```bash
docker-compose logs gotenberg
# Should show startup messages
```

---

## 📋 Updated docker-compose.yml

Below is the **complete updated file** you should use:

```yaml
version: '3.8'

services:
  app:
    build: .
    container_name: aieditpro
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      GOTENBERG_URL: http://gotenberg:3000
      EMAIL_SERVICE: ${EMAIL_SERVICE:-}
      EMAIL_USER: ${EMAIL_USER:-}
      EMAIL_PASSWORD: ${EMAIL_PASSWORD:-}
      RECIPIENT_EMAIL: ${RECIPIENT_EMAIL:-support@aieditpro.net}
    depends_on:
      gotenberg:
        condition: service_healthy
    restart: always
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    networks:
      - aieditpro_network

  gotenberg:
    image: gotenberg/gotenberg:8.0
    container_name: aieditpro_gotenberg
    ports:
      - "3002:3000"
    environment:
      GOTENBERG_DISABLE_GOOGLE_CHROME: "false"
    restart: always
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 30s
    networks:
      - aieditpro_network

  nginx:
    image: nginx:alpine
    container_name: aieditpro_nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
      - ./html:/usr/share/nginx/html:ro
    depends_on:
      - app
    restart: always
    networks:
      - aieditpro_network

networks:
  aieditpro_network:
    driver: bridge
```

---

## ⚡ Quick Fix (5 Minutes)

1. **Update docker-compose.yml** (add Gotenberg service)
2. **Update .env.local** (set `GOTENBERG_URL=http://gotenberg:3000`)
3. **Redeploy:** `docker-compose down && docker-compose up -d --build`
4. **Test:** Try file conversion ✅

---

## 🧪 Test After Deployment

1. Go to: https://aieditpro.net/converter
2. Upload a test file (PDF or DOCX)
3. Try converting to another format
4. File should download ✅

---

## 📊 Expected Behavior

| Step | Status |
|------|--------|
| Upload file | ✅ Instant |
| Conversion starts | ✅ Shows spinner |
| Gotenberg processes | ⏱️ 2-5 seconds |
| File downloads | ✅ Auto download |

---

## 🆘 Troubleshooting

### Error: "Cannot connect to Gotenberg"
```bash
# Check if Gotenberg container is running
docker-compose ps

# Restart Gotenberg
docker-compose restart gotenberg

# Check logs
docker-compose logs gotenberg
```

### Error: "Out of memory"
```bash
# Gotenberg needs more resources
# Add to docker-compose.yml:
deploy:
  resources:
    limits:
      memory: 2G
```

### Conversions are slow
```bash
# Give Gotenberg more CPU/Memory
# Default is fine, but can increase
```

---

## ✅ Checklist

- [ ] Backup current docker-compose.yml
- [ ] Update docker-compose.yml with Gotenberg service
- [ ] Update .env.local with GOTENBERG_URL
- [ ] Stop current containers: `docker-compose down`
- [ ] Rebuild and restart: `docker-compose up -d --build`
- [ ] Wait 30 seconds for startup
- [ ] Check container status: `docker-compose ps`
- [ ] Test conversion on website
- [ ] Verify file downloads ✅

---

**Once done, your file converter will work perfectly!** 🎉
