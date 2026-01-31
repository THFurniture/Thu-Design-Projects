# THU Design Projects

A luxury residential design studio website showcasing West Coast living through architectural precision and natural beauty. Built with modern web technologies to deliver an elegant, cinematic experience.

## About

THU Design Projects is a luxury residential design studio focused on the intersection of architectural philosophy and tactile craftsmanship. The website presents a curated portfolio of residential projects, emphasizing the balance between architectural precision and the raw beauty of nature.

## Features

- 🏡 **Home Page**: Hero section with parallax effects, intro, stats, categories, and call-to-action
- 📖 **About Page**: Narrative storytelling, design pillars, craftsmanship showcase, and philosophy
- 🎬 **Cinematic Animations**: Smooth parallax scrolling and transitions powered by Framer Motion
- 🎨 **Modern Design**: Elegant typography, sophisticated color palette, and refined UI components
- 📱 **Responsive**: Fully responsive design optimized for all devices
- ⚡️ **Performance**: Server-side rendering and optimized asset loading

## Tech Stack

- **Framework**: React Router 7
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Fonts**: Inter & Playfair Display (Google Fonts)

## Project Structure

```
app/
├── components/
│   ├── about/          # About page components
│   │   ├── about-hero.tsx
│   │   ├── narrative.tsx
│   │   ├── pillars.tsx
│   │   ├── craftsmanship.tsx
│   │   └── cta.tsx
│   ├── home/           # Home page components
│   │   ├── hero.tsx
│   │   ├── intro.tsx
│   │   ├── stats.tsx
│   │   ├── categories.tsx
│   │   └── cta.tsx
│   ├── layout/         # Shared layout components
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   └── ui/             # Reusable UI components
│       └── button.tsx
├── routes/             # Route pages
│   ├── home.tsx
│   └── about.tsx
├── hooks/              # Custom React hooks
│   ├── useScrollToTop.ts
│   └── useSmoothScroll.ts
└── lib/                # Utility functions
    └── utils.ts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, pnpm, or bun

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

## Building for Production

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t thudesignprojects .

# Run the container
docker run -p 3000:3000 thudesignprojects
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`:

```
├── package.json
├── package-lock.json
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling with a custom color palette defined in `colorpalette.md`. The design emphasizes:

- Dark, sophisticated color schemes
- Elegant typography with serif and sans-serif combinations
- Smooth animations and transitions
- Cinematic parallax effects

## Project Galleries

The website showcases several luxury residential projects:

- **Groveland Road 928** - West Vancouver
- **King Georges Way 815** - West Vancouver
- **King Georges Way 830** - West Vancouver
- **Quayside Drive 680** - New Westminster

All project images are optimized AVIF format located in `public/projects/`.

---

Built with ❤️ using React Router and modern web technologies.
