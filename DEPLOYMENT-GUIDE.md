# Static Site Deployment Guide

## Quick Deploy to Static Hosting

This Friends Live website is now fully static and can be deployed to any static hosting provider.

### Option 1: Netlify (Recommended)
1. Build the site: `npm run build`
2. Upload the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Option 2: Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`

### Option 3: GitHub Pages
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions to build and deploy
3. Set source to GitHub Actions

### Option 4: Cloudflare Pages
1. Connect repository
2. Set build command: `npm run build`
3. Set build output directory: `dist`

## Environment Setup for Contact Form

To enable the contact form:
1. Sign up at https://formspree.io
2. Create a new form
3. Copy your form ID
4. Replace `YOUR_FORM_ID` in `client/src/components/contact-section.tsx` with your actual form ID

Example:
```javascript
const response = await fetch('https://formspree.io/f/xpzgkdyw', {
```

## Custom Domain Setup

Most hosting providers support custom domains:
1. Add CNAME record pointing to your hosting provider
2. Configure SSL certificate (usually automatic)
3. Update DNS settings as required

## Performance Optimization

The site is already optimized with:
- Compressed images
- Minified CSS/JS
- Tree-shaken dependencies
- Lazy loading where appropriate

## SEO Configuration

Meta tags are already configured in `client/index.html`:
- Title and description
- Open Graph tags for social sharing
- Viewport settings for mobile

Update these as needed for your specific event details.