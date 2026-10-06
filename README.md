# Big Tech Bird — Award-Level Digital Studio Website

An award-level marketing website and interactive portfolio for **"Big Tech Bird"**, an independent digital studio offering three core disciplines:
1. **Website Design** (`/website-design`)
2. **Social Media Management** (`/social-media`)
3. **AI Integration for Businesses** (`/ai-integration`)
Plus **Home** (`/`), **Work / Case Studies** (`/work`), **Contact** (`/contact`), **Terms & Conditions** (`/terms`), and **Privacy Policy** (`/privacy`).

---

## 🎨 Design System & Strict Palette
- **Beige**: `#EDE6D8` (Primary canvas)
- **Secondary Beige**: `#E2D9C6` (Card accents & section transitions)
- **Black**: `#0A0A0A` (Deep contrast typography, buttons, and inverted contact page)
- **White**: `#FFFFFF` (Clean contrast rhythm, cards, and browser mockups)
- **Texture**: Subtle film-grain noise overlay across beige backgrounds.
- **Typography**: 
  - Headings: Editorial serif (*Instrument Serif* via Google Fonts, oversized hero type ~10-12vw)
  - Body: Modern grotesque (*Space Grotesk* and *Plus Jakarta Sans*)

---

## 🦅 Brand Mascot & Signature Animations

The black line-art bird mascot (inline SVG) adapts to every page:

- **Global**:
  - **Preloader**: The bird draws itself in one continuous SVG stroke (`pathLength`), smoothly unveiling the site.
  - **Custom Cursor**: Black spring dot with interactive labels (`"view"`, `"talk"`, `"drag"`, `"fly"`).
  - **Page Transitions**: Dual-layer curtain wipe with the bird flying across the screen on route change.
  - **Magnetic Buttons**: Curved bottom fill-wipe on hover with smooth spring displacement.
  - **Smooth Scrolling**: Integrated with Lenis.
  - **Footer**: Flapping bird mascot with hover interactions.

- **Home (`/`)**:
  - Perched mascot on the oversized headline takes off and ascends on scroll.
  - Masked line-by-line typography reveal.
  - Word-by-word scroll reveal studio manifesto.
  - Three large interactive service cards with live mini animation previews.
  - Infinite marquee ticker (`WEBSITES • SOCIAL MEDIA • AI • STRATEGY • DESIGN`).
  - 4-stage process timeline (`Discover`, `Design`, `Launch`, `Grow`).

- **Website Design (`/website-design`)**:
  - Bird lands directly on the browser window frame.
  - Interactive wireframe that fills from stroke outlines to a polished high-conversion UI.
  - Interactive before-vs-after draggable comparison slider.
  - Responsive desktop & mobile mockups with parallax.
  - Transparent pricing & timeline packages.

- **Social Media (`/social-media`)**:
  - Bird's feathers burst into floating white post cards with ticking heart/comment counters and mouse parallax.
  - iPhone mockup with continuous auto-scrolling viral feed.
  - Animated compound growth chart drawing itself on scroll.
  - Monthly content calendar grid matrix.

- **AI Integration (`/ai-integration`)**:
  - Bird dissolves into an interactive network of pulsing black nodes and synapses that react to cursor proximity.
  - Use case cards with looping animations (chatbots, automation pipelines, lead scoring, analytics).
  - Interactive live terminal chat testbed with typing animation and prompt suggestions.
  - End-to-end architectural systems flow diagram.

- **Selected Work (`/work`)**:
  - Filterable archive of 6 real-world style case studies across all three disciplines.
  - Interactive case study drawer modal with problem, strategy, results, and quantified metrics.

- **Contact (`/contact`)**:
  - Inverted black page with giant `"Let's take flight."` headline.
  - Interactive proposal inquiry form.
  - Mascot bird perched directly on the submit button.
  - Celebratory confetti & flight transition on dispatch.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended; developed on Node v24)
- npm or pnpm

### Installation
```bash
# Navigate to the project directory
cd C:\Users\micha\.gemini\antigravity\scratch\big-tech-bird

# Install dependencies (already pre-installed)
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Preview
```bash
# Build production bundle with TypeScript check & code-splitting
npm run build

# Preview the production build locally
npm run preview
```

---

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript + Vite
- **Routing**: React Router v7 (`react-router-dom`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animation**: Framer Motion, GSAP, Canvas Confetti
- **Smooth Scroll**: Lenis (`lenis`)
- **Icons**: Lucide React
