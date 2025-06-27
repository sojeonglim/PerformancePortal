# Friends Live - Static Website

A modern, responsive website promoting a live theater performance of the TV series "Friends" by Yoon's English Acting Club.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Friends Theme**: Warm color scheme (brown, tan, beige) matching the TV show
- **Interactive Components**: 
  - Countdown timer to show date
  - Cast member showcase with quotes
  - Quote generator with Friends quotes
  - Smooth scrolling navigation
- **Easy Image Management**: All images stored locally for simple replacement

## Project Structure

```
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Shadcn/ui components
│   │   ├── navigation.tsx
│   │   ├── hero-section.tsx
│   │   ├── cast-section.tsx
│   │   └── ...
│   ├── data/             # Static data files
│   │   ├── cast.ts       # Cast member information
│   │   ├── quotes.ts     # Friends quotes
│   │   └── images.ts     # Image paths
│   ├── pages/            # Page components
│   └── lib/              # Utilities
├── public/               # Static assets
│   └── images/          # All images organized by type
└── dist/                # Built site (after npm run build)
```

## Getting Started

### Development
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Customization

### Replacing Images
1. Navigate to `public/images/`
2. Replace image files with same filenames
3. Or update paths in `src/data/images.ts`

### Updating Cast Information
Edit `src/data/cast.ts` to modify:
- Character names
- Actor names 
- Quotes
- Image paths

### Changing Show Details
Update information in:
- `src/components/hero-section.tsx` - Main banner
- `src/components/show-details.tsx` - Event details
- `src/components/countdown-timer.tsx` - Show date

### Theme Colors
Modify CSS variables in `src/index.css`:
```css
:root {
  --friends-brown: #8B4513;
  --friends-tan: #D2B48C;
  --friends-beige: #F5F5DC;
}
```

## Deployment

This static site can be deployed to any static hosting provider:

### Netlify
1. Build: `npm run build`
2. Deploy: Upload `dist` folder

### Vercel
1. Connect GitHub repository
2. Build command: `npm run build`
3. Output directory: `dist`

### GitHub Pages
1. Enable GitHub Pages
2. Use GitHub Actions to build and deploy

### Cloudflare Pages
1. Connect repository
2. Build command: `npm run build`
3. Build output: `dist`

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Shadcn/ui** for UI components
- **Wouter** for routing
- **Lucide React** for icons

## Browser Support

Modern browsers supporting ES2018+:
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+