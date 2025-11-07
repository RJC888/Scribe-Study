# 🚀 SETUP GUIDE - Scribe Study

Get your Bible study app running in 10 minutes.

---

## ⚡ QUICK START

### Prerequisites
- [x] GitHub account (you have: RJC888)
- [ ] Groq API key (get free at console.groq.com)
- [ ] Files uploaded to GitHub

---

## 📋 STEP-BY-STEP SETUP

### Step 1: Get FREE Groq API Key (2 minutes)

1. **Go to:** https://console.groq.com
2. **Sign up:**
   - Click "Sign Up"
   - Enter email and create password
   - Verify email
   - **No credit card required!**

3. **Create API Key:**
   - Login to Groq console
   - Click "API Keys" in left sidebar
   - Click "Create API Key"
   - Name it: "Scribe Study"
   - Click "Create"
   - **COPY THE KEY** (starts with `gsk_...`)
   - **IMPORTANT:** Save it somewhere safe - you won't see it again!

4. **Save your key:**
   ```
   GROQ_API_KEY=gsk_____________________________
   ```

---

### Step 2: Deploy to Vercel (3 minutes)

#### Method A: One-Click Deploy (Easiest)

1. **From your GitHub repo** (https://github.com/RJC888/scribe-study)
2. **Scroll down** to README
3. **Click** the purple "Deploy with Vercel" button
4. **Vercel opens:**
   - Click "Continue with GitHub"
   - Authorize Vercel (if first time)
   - Select repository: `RJC888/scribe-study`
5. **Configure Project:**
   - Project Name: `scribe-study` (or customize)
   - Root Directory: `./` (leave as is)
   - Framework Preset: None (leave as is)
6. **Environment Variables:**
   - Name: `GROQ_API_KEY`
   - Value: [paste your Groq API key]
   - Click "Add"
7. **Click "Deploy"**
8. **Wait 2-3 minutes** (watch the progress)
9. **Success!** Your app is live! 🎉

**Your URL:** `https://scribe-study-[random].vercel.app`

#### Method B: Manual Vercel Deploy

1. **Go to:** https://vercel.com
2. **Login** with GitHub
3. **Click:** "Add New" → "Project"
4. **Import Git Repository:**
   - Select: `RJC888/scribe-study`
   - Click "Import"
5. **Configure:**
   - Framework: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
6. **Environment Variables:**
   - Click "Add" under "Environment Variables"
   - Name: `GROQ_API_KEY`
   - Value: [your Groq API key]
7. **Click "Deploy"**
8. **Wait 2-3 minutes**
9. **Your app is live!**

---

### Step 3: Test Your App (2 minutes)

1. **Open your live URL** (provided by Vercel)
2. **You should see:**
   - Beautiful Scribe Study interface
   - Top navigation: Devotional, Text Analysis, Original Languages, etc.
   - Sidebar with modules
   - Search box for scripture passages

3. **Test it:**
   - Click "Devotional" tab (should be selected by default)
   - Enter passage: `John 3:16`
   - Click "Generate Analysis" button
   - **Wait 5-10 seconds**
   - Results should appear IN THE APP!

4. **If it works:** ✅ You're done!
5. **If it doesn't:** See Troubleshooting below

---

## 🎯 LOCAL DEVELOPMENT (Optional)

Want to run the app on your computer before deploying?

### Requirements
- Node.js 18+ ([download here](https://nodejs.org))
- Terminal/Command Prompt

### Steps

1. **Clone your repository:**
   ```bash
   git clone https://github.com/RJC888/scribe-study.git
   cd scribe-study
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Create .env file:**
   ```bash
   cp .env.example .env
   ```

4. **Edit .env file:**
   - Open `backend/.env` in text editor
   - Add your Groq API key:
     ```
     GROQ_API_KEY=gsk_your_actual_key_here
     GROQ_MODEL=llama-3.1-70b-versatile
     PORT=3000
     ```
   - Save and close

5. **Start the server:**
   ```bash
   npm start
   ```

6. **Open browser:**
   - Go to: http://localhost:3000
   - Your app should load!

7. **Test:**
   - Enter "John 3:16"
   - Click "Generate Analysis"
   - Results appear in-app

**To stop:** Press `Ctrl+C` in terminal

---

## 🎨 CUSTOMIZATION

### Add Your Grammar Prompts

**Your grammar prompts are in:** `prompts/` folder
- `grammar-essentials.txt` (6,500 words)
- `advanced-grammar.txt` (15,000 words)

**To add them to your app:**

1. **Open:** `frontend/app.js`
2. **Find** (around line 100):
   ```javascript
   'grammar-essentials': {
       name: 'Grammar Essentials',
       prompt: `PASTE_YOUR_GRAMMAR_ESSENTIALS_PROMPT_HERE`,
       icon: '📖'
   },
   ```
3. **Replace** `PASTE_YOUR_GRAMMAR_ESSENTIALS_PROMPT_HERE` with entire content of `prompts/grammar-essentials.txt`
4. **Do the same** for `advanced-grammar`
5. **Save** file
6. **Commit** changes to GitHub
7. **Vercel auto-redeploys** (30 seconds)

### Change App Name

**Edit:** `frontend/index.html`
**Find** (line ~50): `<div class="app-name">Scribe Study</div>`
**Change to:** Your preferred name
**Save and commit**

### Change Colors

**Edit:** `frontend/index.html`
**Find** (lines 20-34):
```css
:root {
    --stone-dark: #3a4244;
    --stone: #4a5456;
    --evergreen: #4a5d4e;
    /* ... more colors */
}
```
**Customize** color values
**Save and commit**

### Change AI Model

**Edit environment variable in Vercel:**
1. Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add new: `GROQ_MODEL`
4. Value options:
   - `llama-3.1-70b-versatile` (default - best quality)
   - `llama-3.1-8b-instant` (faster, still good)
   - `mixtral-8x7b-32768` (longest context)
5. Redeploy

---

## 🐛 TROUBLESHOOTING

### "Cannot connect to server"

**Local development:**
- Is backend running? Check terminal
- Try: `cd backend && npm start`
- Check port 3000 isn't in use

**Production:**
- Check Vercel deployment logs
- Vercel Dashboard → Your Project → Deployments → Click latest → Logs

### "API key not configured"

**Check:**
1. Vercel Dashboard → Settings → Environment Variables
2. Is `GROQ_API_KEY` present?
3. Does it start with `gsk_`?
4. Is it the complete key (long string)?

**Fix:**
- Add/edit environment variable
- Go to Deployments tab
- Click "⋯" → "Redeploy"

### "Results not appearing"

**Check browser console:**
1. Press F12 (or right-click → Inspect)
2. Click "Console" tab
3. Look for red error messages
4. Common issues:
   - API key invalid
   - Network blocked
   - CORS error

**Fix:**
- Verify API key is correct
- Check Groq console for valid key
- Try different browser

### "Deployment failed"

**Common causes:**
1. Missing environment variable
2. Syntax error in code
3. Build command issue

**Check:**
- Vercel deployment logs (detailed error)
- Verify all files uploaded correctly
- Check `vercel.json` is present

### "Rate limit exceeded"

**Cause:** Too many requests (rare with free tier)

**Solutions:**
1. Wait 15 minutes (rate limit resets)
2. Create new Groq account (fresh limits)
3. Upgrade to Groq paid tier

---

## 📊 USAGE LIMITS

### Groq Free Tier
- **14,400 requests/day**
- **= 600 requests/hour**
- **= 10 requests/minute**
- **Supports:** ~480 users × 30 analyses each

**More than enough for:**
- Personal use
- Beta testing
- Small groups
- Initial launch

### Vercel Free Tier
- **100GB bandwidth/month**
- **100 hours serverless functions/month**
- **Supports:** 10,000+ monthly users

**Perfect for starting out!**

---

## 🔐 SECURITY BEST PRACTICES

### DO:
- ✅ Keep API keys in environment variables
- ✅ Never commit `.env` file to GitHub
- ✅ Use strong passwords
- ✅ Enable 2FA on accounts
- ✅ Keep `.gitignore` file

### DON'T:
- ❌ Share API keys publicly
- ❌ Commit secrets to GitHub
- ❌ Use same password everywhere
- ❌ Ignore security warnings

---

## 📈 SCALING UP

### When You Exceed Free Tier:

**Groq (14,400 requests/day exceeded):**
- Upgrade to paid: ~$0.10-0.30 per 1M tokens
- Cost per analysis: ~$0.001
- 30,000 requests/day = ~$15/month

**Vercel (100GB bandwidth exceeded):**
- Upgrade to Pro: $20/month
- Includes: 1TB bandwidth, analytics, more

**Total at scale:**
- 1000 daily users = ~$30-50/month
- Still profitable if charging $10/month per user

---

## 🆘 GETTING HELP

### Documentation
- **This file:** Setup guide
- **DEPLOYMENT.md:** Production deployment details
- **ACCESS-INFO.md:** Credentials and URLs
- **README.md:** Overview and features

### Support Resources
- **Groq:** https://console.groq.com/docs
- **Vercel:** https://vercel.com/docs  
- **GitHub:** https://docs.github.com

### Community
- **Groq Discord:** Check console.groq.com for link
- **Vercel Community:** vercel.com/community

---

## ✅ POST-SETUP CHECKLIST

- [ ] Groq API key obtained and saved
- [ ] Deployed to Vercel successfully
- [ ] App accessible at live URL
- [ ] Tested: entered passage and got results
- [ ] No errors in browser console
- [ ] Grammar prompts added (optional)
- [ ] Customized app name/colors (optional)
- [ ] Shared with beta testers
- [ ] Ready to scale/sell!

---

## 🎉 YOU'RE LIVE!

Your professional Bible study app is now:
- ✅ Deployed to the internet
- ✅ Accessible worldwide
- ✅ Fast and reliable
- ✅ Ready for users
- ✅ Ready to sell

**Next steps:**
1. Test all 24 modules
2. Add your grammar prompts
3. Customize branding
4. Share with friends
5. Start selling!

---

## 💰 READY TO SELL?

### Next Actions:
1. **Set up payment** (Stripe, Gumroad)
2. **Create landing page** (explain your app)
3. **Add authentication** (user logins - optional)
4. **Market it** (social media, email)
5. **Launch!**

**Your professional Bible study business starts here.** 🕮

---

**Questions? Check DEPLOYMENT.md and ACCESS-INFO.md for more details.**

**Congratulations on your launch!** 🚀
