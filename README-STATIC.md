# Friends Live - Static Website

This is now a pure static website for the Friends Live theater performance. All backend dependencies have been removed.

## Image Management

To replace any images in the website:

### Cast Member Photos
Replace these files in `client/public/images/cast/`:
- `rachel.jpg` - Rachel Green character photo
- `monica.jpg` - Monica Geller character photo  
- `phoebe.jpg` - Phoebe Buffay character photo
- `ross.jpg` - Ross Geller character photo
- `chandler.jpg` - Chandler Bing character photo
- `joey.jpg` - Joey Tribbiani character photo

### Background Images
Replace these files in `client/public/images/backgrounds/`:
- `hero-background.jpg` - Main hero section background
- `about-group.jpg` - Group photo in about section
- `venue.jpg` - Theater venue photo
- `promo-video.jpg` - Video thumbnail image

## Content Management

### Cast Information
Edit `client/src/data/cast.ts` to update:
- Character names
- Actor names  
- Character quotes
- Image paths

### Contact Form
The contact form uses Formspree. To activate:
1. Sign up at https://formspree.io
2. Create a new form
3. Replace `YOUR_FORM_ID` in `client/src/components/contact-section.tsx` with your actual form ID

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This static site can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Any static hosting provider

Simply upload the `dist` folder after running `npm run build`.

## File Structure

```
client/
├── public/
│   └── images/
│       ├── cast/          # Cast member photos
│       └── backgrounds/   # Background images
├── src/
│   ├── components/        # React components
│   ├── data/              # Static data files
│   └── pages/             # Page components
└── index.html
```