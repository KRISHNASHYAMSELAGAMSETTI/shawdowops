
# ShadowOps AI — Final Launch Package

An AI co-founder that auto-launches micro-SaaS businesses from India using:

- ✅ Carrd for landing pages
- ✅ Stripe (INR) for payments
- ✅ Zapier for automation
- ✅ FastAPI backend
- ✅ Next.js frontend

---

## 🧠 How It Works

1. You visit the `/launch` page
2. ShadowOps sends data to Zapier via webhook
3. Zapier:
   - Generates a Stripe INR payment link
   - Sends a Gmail with landing page + payment link
4. User pays → You win

---

## ⚙️ Deployment Instructions

### 📦 Backend: Railway
1. Upload `/backend/app/` to [https://railway.app](https://railway.app)
2. Set environment variable:
   ```
   ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/XXXXXX/XXXXXX
   ```
3. Railway uses `Dockerfile` and `Procfile` automatically

---

### 🌐 Frontend: Vercel
1. Upload `/frontend/` to [https://vercel.com](https://vercel.com)
2. Set environment variable:
   ```
   NEXT_PUBLIC_BACKEND_URL=https://your-backend.up.railway.app
   ```

---

### 🧱 Landing Page: Carrd
1. Go to [https://carrd.co](https://carrd.co)
2. Create a page with:
   - Title: FocusFlow AI
   - CTA: `Get Started – ₹499`
   - URL: Your Stripe payment link
3. Publish your Carrd site

---

### 💳 Stripe (INR)
1. Register at [https://stripe.com/in](https://stripe.com/in)
2. Add a product → "FocusFlow AI"
3. Set price: ₹499 (INR)
4. Create a payment link → paste into Carrd

---

### ⚡ Zapier
1. Trigger: Webhooks by Zapier → Catch Hook
2. Action 1: Stripe → Create Payment Link
3. Action 2: Gmail → Send payment + access email

---

## 🧠 AI-Generated Launch Content

**Product Name:** FocusFlow AI  
**Tagline:** The AI-powered study planner for Indian students  
**Email Template:**  
```
Hey Krishna 👋

Your AI-powered productivity system is ready!

🌐 Site: https://focusflow.carrd.co  
💳 Pay: https://buy.stripe.com/test_INRXXXX

– Team ShadowOps
```

--- 
