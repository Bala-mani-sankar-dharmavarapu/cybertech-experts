# 🚀 Netlify Deployment Guide

## ✅ Issues Fixed

### Issue 1: React 19 Peer Dependency

**Error:** `react-helmet-async` peer dependency conflict  
**Solution:** Added `.npmrc` with `legacy-peer-deps=true`

### Issue 2: Cached Dependencies

**Error:** `Cannot find module 'ajv/dist/compile/codegen'`  
**Solution:** Updated `netlify.toml` to clear cache before build

---

## 📁 Files Added

1. **`.npmrc`** - Ignore peer dependency warnings
2. **`netlify.toml`** - Netlify build configuration

---

## 🚀 Deploy Now

### Option 1: Commit & Push (Recommended)

```bash
git add .
git commit -m "Fix Netlify deployment - clear cache and use legacy-peer-deps"
git push origin main
```

Netlify will automatically redeploy ✅

### Option 2: Clear Cache Manually (Alternative)

If you still face issues:

1. Go to Netlify Dashboard
2. Site Settings → Build & Deploy → Build Settings
3. Click "Clear cache and retry deploy"

---

## ✅ What the Build Does Now

```bash
rm -rf node_modules          # Clear cached dependencies
npm install --legacy-peer-deps  # Fresh install ignoring peer warnings
npm run build                # Build React app
```

---

## 🎯 Expected Result

After pushing:

- ✅ Netlify detects new commit
- ✅ Clears node_modules
- ✅ Installs dependencies fresh
- ✅ Builds successfully
- ✅ Deploys to production

---

## 📊 Build Time

- **First build (after cache clear):** ~2-3 minutes
- **Subsequent builds:** ~1-2 minutes

---

## ✅ Verification

Check these after deployment:

1. Site loads correctly
2. All pages work (/, /academy, /why-choose-us, /service/\*)
3. No console errors
4. Test social media sharing

---

## 🆘 If Still Failing

Try this in Netlify Dashboard:

1. Site Settings → Build & Deploy → Environment
2. Add environment variable: `CI=false` (to ignore warnings as errors)
3. Redeploy

---

## 📞 Quick Fix Commands

If you need to test locally first:

```bash
# Clear everything and rebuild
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

---

_Your SEO-optimized site is ready to deploy! 🎉_
