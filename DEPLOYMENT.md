# GitHub Pages Deployment Guide

## Your Website is Ready for GitHub Pages! 🎉

### Changes Made:
1. ✅ Updated `vite.config.ts` with base path `/Electionwebsite-1/`
2. ✅ Added deployment scripts to `package.json`
3. ✅ Created GitHub Actions workflow for automatic deployment
4. ✅ Built production version in `/dist` folder
5. ✅ Installed `gh-pages` package for deployment

---

## Deployment Instructions:

### Method 1: Using GitHub Actions (Automatic - Recommended)

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ready for GitHub Pages"
   ```

2. **Create GitHub Repository**:
   - Go to https://github.com/new
   - Name your repository: `Electionwebsite-1`
   - Don't initialize with README (you already have files)
   - Click "Create repository"

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Electionwebsite-1.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository settings
   - Click "Pages" in the left sidebar
   - Under "Build and deployment":
     - Source: **GitHub Actions**
   - Save the settings

5. **Your site will automatically deploy!**
   - GitHub Actions will build and deploy your site
   - Visit: `https://YOUR_USERNAME.github.io/Electionwebsite-1/`

---

### Method 2: Using gh-pages Package (Manual)

1. **Initialize Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create and Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Electionwebsite-1.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy using npm**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to Settings > Pages
   - Source: Select `gh-pages` branch
   - Click Save

5. **Access your site**:
   - URL: `https://YOUR_USERNAME.github.io/Electionwebsite-1/`

---

## Important Notes:

### If Your Repository Name is Different:
If your repository name is **NOT** `Electionwebsite-1`, update the `base` path in `vite.config.ts`:

```typescript
base: '/YOUR-REPO-NAME/',
```

Then rebuild:
```bash
npm run build
```

### Local Testing:
To test the built version locally:
```bash
npm run preview
```

### Development:
To run in development mode:
```bash
npm run dev
```

---

## Troubleshooting:

### Images or Assets Not Loading:
- Ensure all image URLs in your code use absolute URLs (starting with `https://`)
- Or use relative paths without leading slash

### 404 Error on Refresh:
- GitHub Pages doesn't support client-side routing by default
- Your single-page app should work fine for direct navigation

### Build Fails:
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`

---

## File Structure After Deployment:

```
Electionwebsite 1/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── components/                 # Your React components
├── dist/                       # Production build (auto-generated)
├── node_modules/              # Dependencies
├── App.tsx
├── index.html
├── index.tsx
├── package.json               # Updated with deploy scripts
├── vite.config.ts            # Updated with base path
└── README.md                 # This file
```

---

## Next Steps:

1. Replace `YOUR_USERNAME` with your actual GitHub username
2. Create the repository on GitHub
3. Push your code
4. Enable GitHub Pages
5. Share your website! 🚀

Your website URL will be:
**`https://YOUR_USERNAME.github.io/Electionwebsite-1/`**

---

## Support:

If you encounter any issues:
1. Check GitHub Actions tab for build errors
2. Verify the base path matches your repository name
3. Ensure GitHub Pages is enabled in repository settings
4. Wait a few minutes after first deployment for DNS propagation

Good luck with your Ward Representative website! 🎊
