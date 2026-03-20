# 🚀 Quick Fix: Deploy with Gotenberg

## The Issue
File converter not working because Gotenberg microservice is missing.

## The Solution (3 steps)

### Step 1: SSH into Your Server
```bash
ssh root@your-server-ip
cd /path/to/aieditpro
```

### Step 2: Update and Deploy
```bash
# Pull latest code with Gotenberg setup
git pull origin main

# Stop old containers
docker-compose down

# Start with Gotenberg included
docker-compose up -d --build
```

### Step 3: Verify
```bash
# Check all containers are running
docker-compose ps

# Expected output:
# - aieditpro (app) - UP
# - aieditpro_gotenberg (gotenberg) - UP
# - aieditpro_nginx (nginx) - UP

# Test Gotenberg health
curl http://localhost:3002/health
# Should output: OK
```

---

## Testing

1. Go to: https://aieditpro.net/converter
2. Upload a test file (PDF, DOCX, etc.)
3. Convert to another format
4. File should download ✅

---

## What Changed

**docker-compose.yml now includes:**
- ✅ Gotenberg service (port 3002)
- ✅ Health checks for all services
- ✅ Automatic startup with app
- ✅ Proper networking between services

**Result:**
- File converter works
- Email still works
- Website runs on port 80/443

---

## If You Get Errors

```bash
# View app logs
docker-compose logs app

# View Gotenberg logs
docker-compose logs gotenberg

# Restart services
docker-compose restart

# Full reset (delete all data)
docker-compose down -v
docker-compose up -d --build
```

---

## Done!

File conversion should now work perfectly! 🎉
