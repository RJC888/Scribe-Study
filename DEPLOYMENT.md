# 🚀 DEPLOYMENT GUIDE - Get Scribe Study Live in 10 Minutes

This guide walks you through deploying your Scribe Study app to production.

---

## ⚡ FASTEST: Vercel Deployment (Recommended)

### Why Vercel?
- ✅ **FREE forever** (generous limits)
- ✅ **2-minute setup**
- ✅ **Automatic HTTPS**
- ✅ **Global CDN** (fast worldwide)
- ✅ **Zero config** (works out of the box)

---

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

---

### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts (email confirmation).

---

### Step 3: Deploy

```bash
cd scribe-production
vercel
```

**Follow the prompts:**
- Set up and deploy? **Y**
- Which scope? **Your account**
- Link to existing project? **N**
- What's your project's name? **scribe-study** (or your choice)
- In which directory is your code? **./**
- Want to override settings? **N**

**Vercel will:**
1. Upload your code
2. Install dependencies
3. Deploy frontend + backend
4. Give you a live URL: `https://scribe-study-xyz.vercel.app`

---

### Step 4: Add API Key (CRITICAL!)

Your app is live but won't work yet - need to add the API key.

**Two ways to do this:**

#### Option A: Vercel Dashboard (Easier)

1. Go to: https://vercel.com/dashboard
2. Click your project: **scribe-study**
3. Go to: **Settings** → **Environment Variables**
4. Click **Add New**
5. **Name:** `GROQ_API_KEY`
6. **Value:** Your Groq API key (starts with `gsk_...`)
7. **Environments:** Select all (Production, Preview, Development)
8. Click **Save**
9. Go to **Deployments** tab
10. Click **...** → **Redeploy**

#### Option B: CLI (Faster)

```bash
vercel env add GROQ_API_KEY
```

Paste your API key when prompted.

Then redeploy:
```bash
vercel --prod
```

---

### Step 5: Test Your Live App!

1. Open the URL Vercel gave you
2. Enter passage: "John 3:16"
3. Click "Generate Analysis"
4. Results appear IN THE APP! ✨

---

## 🎯 Custom Domain (Optional)

### Add Your Own Domain

1. Buy domain (Namecheap, Google Domains, etc.)
2. In Vercel dashboard → **Settings** → **Domains**
3. Add your domain: `scribe-study.com`
4. Follow DNS instructions
5. Wait 10 minutes for propagation
6. Your app is now at: `https://scribe-study.com`

---

## 🔄 Updates & Redeployment

### To Update Your App:

1. Edit code locally
2. Run:
```bash
vercel --prod
```

That's it! Changes are live in 30 seconds.

---

## 📊 Monitoring

### Vercel Dashboard Shows:

- **Visits:** How many people using your app
- **Bandwidth:** Data usage
- **Errors:** Any problems
- **Analytics:** User behavior

All free!

---

## 💰 Costs

### Vercel Free Tier:

- **100 GB bandwidth/month** (enough for 10,000+ users)
- **100 hours serverless functions** (unlimited for your use case)
- **Unlimited deployments**
- **Cost: $0**

### If You Exceed (Unlikely):

- Vercel Pro: $20/month (1 TB bandwidth)
- Still incredibly affordable

### Groq API Costs:

- **Free: 14,400 requests/day** (480 users × 30 analyses)
- **Paid: ~$0.001/analysis** (if you exceed free tier)

**Example:**
- 1000 daily users × 20 analyses = $20/day = $600/month
- Still profitable if charging $10/month per user = $10,000 revenue

---

## 🔧 Alternative: Railway.app

If Vercel doesn't work for you, try Railway:

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
cd scribe-production
railway init
railway up

# Add environment variable
railway variables set GROQ_API_KEY=your_key_here
```

Railway also has a generous free tier!

---

## 🐳 Alternative: Docker + Any Server

### Create Dockerfile:

```dockerfile
FROM node:18
WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend/ .
COPY frontend/ ./frontend/
EXPOSE 3000
CMD ["node", "server.js"]
```

### Deploy:

```bash
docker build -t scribe-study .
docker run -p 3000:3000 -e GROQ_API_KEY=your_key scribe-study
```

Deploy to any cloud:
- DigitalOcean App Platform
- AWS Elastic Beanstalk
- Google Cloud Run
- Azure Container Instances

---

## 🎯 SELLING YOUR APP

### After Deployment:

1. **Your app is live** at: https://scribe-study-xyz.vercel.app
2. **Share this URL** with customers
3. **Collect payment** (Stripe, Gumroad, PayPal)
4. **Email customers** the URL + instructions

### Pricing Models:

**Option 1: Free Access**
- Give URL to everyone
- FREE for first 480 daily active users
- Great for portfolio/ministry

**Option 2: Paid Access**
- Add authentication (user login)
- Charge $29 one-time or $9.99/month
- Use auth service (Auth0, Clerk, Firebase)

**Option 3: Download Package**
- Package as Electron desktop app
- Sell on Gumroad for $49
- Users run locally

---

## 🔐 SECURITY CHECKLIST

Before going public:

- [ ] API key in environment variable (NOT in code)
- [ ] Rate limiting enabled (already done in backend)
- [ ] CORS configured for your domain
- [ ] Consider adding user authentication
- [ ] Set up error monitoring (Sentry.io free tier)

---

## ✅ POST-DEPLOYMENT CHECKLIST

- [ ] App accessible at public URL
- [ ] API key configured (check `/api/health`)
- [ ] Test all 24 modules work
- [ ] Grammar Essentials works
- [ ] Advanced Grammar works
- [ ] No errors in browser console (F12)
- [ ] Custom domain added (optional)
- [ ] Analytics set up (optional)

---

## 📈 SCALING TIPS

### As Your User Base Grows:

**0-100 users:**
- Free tier handles it perfectly
- No action needed

**100-1000 users:**
- Monitor Groq usage
- May exceed free tier (~$50-100/month)
- Still profitable if charging users

**1000+ users:**
- Add caching for common passages
- Implement user quotas
- Consider paid Groq tier or alternative AI
- Upgrade Vercel plan if needed

---

## 🆘 TROUBLESHOOTING DEPLOYMENT

### "Build Failed"

**Problem:** Dependencies not installing
**Solution:** 
```bash
cd backend
npm install
# Fix any errors, then deploy again
```

### "Function Error" or 500 Error

**Problem:** API key not set
**Solution:**
- Check environment variable in Vercel dashboard
- Verify key starts with `gsk_`
- Redeploy after adding

### "Cannot reach API"

**Problem:** Wrong API_URL in frontend
**Solution:**
- In production, API_URL should be `/api` (not `localhost`)
- Check `frontend/app.js` line 5

### "CORS Error"

**Problem:** Backend blocking frontend
**Solution:**
- Backend already has CORS enabled
- If still seeing error, check Vercel logs

---

## 🎉 SUCCESS!

Your Bible study app is now:
- ✅ Live on the internet
- ✅ Accessible worldwide
- ✅ Fast (global CDN)
- ✅ Secure (HTTPS)
- ✅ Scalable (handles growth)
- ✅ Professional (ready to sell!)

**Share your app and help people study God's Word!**

---

## 📞 SUPPORT

- **Vercel Issues:** https://vercel.com/support
- **Groq Issues:** https://console.groq.com/docs
- **General Errors:** Check browser console (F12) and share error messages

**You're all set to launch! 🚀**
