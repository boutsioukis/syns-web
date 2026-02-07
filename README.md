# Syns Landing Page

Air Traffic Control for AI Agents - Landing page built with Next.js, Tailwind CSS, and Framer Motion.

## 🎨 Design Philosophy

**Romanticism meets Cyberpunk**

The aesthetic juxtaposes the chaotic, raw power of nature (classical art backgrounds) with the precise, mathematical safety of our tool (thin neon UI lines, grids, and HUDs). Think "The Storm vs. The Radar."

## 🎨 Color Palette

- **Background**: `#000000` (Deep, void black)
- **Primary Text/UI Borders**: `#e6edf3` (Ice white/grey)
- **Success/Action Accent**: `#3ddc97` (Neon Signal Green)
- **Conflict/Warning Accent**: `#f59e0b` (Amber)

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Components**: Custom React components
- **Animation**: Framer Motion
- **Font**: JetBrains Mono (Terminal aesthetic)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
syns-web/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles and theme
├── components/
│   ├── Hero.tsx         # Hero section with living terminal
│   ├── Problem.tsx      # Problem statement (Flying Blind)
│   ├── Features.tsx     # The Awareness Layer features
│   ├── HowItWorks.tsx   # Terminal workflow demo
│   ├── UseCases.tsx     # Teams vs Individuals
│   └── Footer.tsx       # Footer with links
└── public/
    ├── logo/            # Syns logos
    └── works/           # Classical artwork backgrounds
```

## ✨ Features

### Living Terminal Simulation

The hero section features an automated terminal loop showing:
- Two agents from different collaborators publishing plans
- Real-time collision detection
- Warning messages and recommendations

### Animated Sections

All sections use Framer Motion for:
- Scroll-triggered fade-in animations
- Smooth transitions
- Hover effects with glow

### Responsive Design

- Mobile-first approach
- Grid layouts adapt to screen size
- Terminal displays optimized for all devices

## 🎨 Visual Effects

### Background Treatment

- Classical artwork positioned as deep backgrounds
- Vignette overlays (radial gradients) fade images into black
- Technical grid/scanline textures for digital simulation feel
- Heavy blur for depth

### Glassmorphism UI

- Semi-transparent backgrounds with backdrop blur
- Thin, high-contrast borders (`#e6edf3`)
- Hover states with neon glow effects

### Terminal Styling

- Authentic terminal window chrome
- Traffic light buttons (red, yellow, green)
- Monospace font throughout
- Color-coded output (green for success, amber for warnings)

## 🔧 Customization

### Updating Colors

Edit `/app/globals.css`:

```css
:root {
  --background: #000000;
  --foreground: #e6edf3;
  --accent-green: #3ddc97;
  --accent-amber: #f59e0b;
}
```

### Changing Artwork

Replace images in `/public/works/` with your own classical artwork. Supported formats: JPG, PNG, WebP.

### Modifying Terminal Simulation

Edit the `terminalLines` array in `/components/Hero.tsx` to change the agent interaction flow.

## 📝 Content Updates

### Hero Section

- **Headline**: "Coordinate the Swarm."
- **Sub-headline**: Describes the core value proposition
- **CTA**: Install command with copy button

### Problem Section

Shows the before/after comparison of isolated vs. aware agents.

### Features Section

Highlights three core features:
1. The Cloud Registry (Visibility)
2. Early Conflict Discovery (Intelligence)
3. Zero Friction (Philosophy)

### How It Works

Terminal demo showing:
- `syns plan list` - View active plans
- `syns plan compare` - Detect conflicts
- `syns plan view` - See plan details

### Use Cases

Two categories:
- **For Teams**: Multi-developer coordination
- **For Individuals**: Personal agent orchestration

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms

The site is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any platform supporting Node.js

## 📄 License

All rights reserved - Syns 2026

## 🤝 Contributing

This is the official Syns landing page. For questions or feedback, reach out via:
- GitHub: https://github.com/syns-dev
- Discord: https://discord.gg/syns

---

**Built with Claude Code** 🤖
