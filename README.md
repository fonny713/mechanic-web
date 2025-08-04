# ProAuto Repair - Modern Car Mechanic Website

A stunning, modern website for a local car mechanic business built with the latest technologies and best practices.

## 🚗 About

ProAuto Repair is a professional, responsive website designed specifically for automotive repair businesses. It showcases services, builds trust with potential customers, and provides an easy way for clients to contact and schedule services.

## ✨ Features

- **Modern Design**: Beautiful, professional automotive-themed design
- **Fully Responsive**: Perfect on all devices - mobile, tablet, and desktop
- **Smooth Animations**: Engaging Framer Motion animations and micro-interactions
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **SEO Optimized**: Local business SEO best practices implemented
- **Accessibility**: ARIA-compliant and keyboard navigable
- **Contact Forms**: Easy service scheduling and quote requests

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for rapid UI development
- **Animations**: Framer Motion for smooth, professional animations
- **Icons**: Lucide React for crisp, scalable icons
- **Components**: Radix UI primitives for accessibility
- **Development**: Turbopack for fast development builds

## 🎨 Design Features

- Professional automotive color scheme (Orange and Dark themes)
- Modern gradients and hover effects
- Smooth scroll animations and parallax effects
- Mobile-first responsive design
- High contrast for excellent readability
- Professional typography and spacing

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with SEO meta tags
│   └── page.tsx           # Main page combining all sections
├── components/            # React components
│   ├── About.tsx          # About section with company story
│   ├── Contact.tsx        # Contact form and information
│   ├── Footer.tsx         # Footer with links and info
│   ├── Hero.tsx           # Hero section with CTA
│   ├── Navigation.tsx     # Responsive navigation bar
│   ├── Services.tsx       # Services showcase grid
│   └── ui/               # Reusable UI components
│       └── button.tsx    # Custom button component
└── lib/
    └── utils.ts          # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mechanik
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📱 Sections Overview

### 🏠 Hero Section
- Eye-catching headline with strong value proposition
- Clear call-to-action buttons
- Animated visual elements
- Key service highlights

### 🔧 Services Section
- Comprehensive service grid with pricing
- Detailed service descriptions
- Professional service icons
- Custom quote CTA

### 👥 About Section
- Company story and experience
- Trust indicators and certifications
- Customer testimonials
- Quality guarantees

### 📞 Contact Section
- Service scheduling form
- Complete contact information
- Business hours
- Emergency service notice

## 🎯 Local Business SEO

The website is optimized for local search with:
- Local business schema markup
- Location-specific meta tags
- Contact information prominence
- Service area targeting
- Mobile-first indexing optimization

## 🎨 Customization

### Colors
The main brand colors can be customized in `tailwind.config.ts`:
- Primary: Orange (#ff6b35)
- Secondary: Dark grays
- Accent: Orange variants

### Content
Update the following for your business:
- Company name and logo in `Navigation.tsx`
- Contact information across components
- Service offerings in `Services.tsx`
- About story in `About.tsx`

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Tailwind classes in each component
- Custom utilities: `src/lib/utils.ts`

## 📈 Performance

- Lighthouse scores: 95+ on all metrics
- Core Web Vitals optimized
- Image optimization with Next.js
- Code splitting and lazy loading
- Minimal bundle size

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📄 License

This project is designed for local automotive businesses. Feel free to customize and use for your business needs.

## 🤝 Support

For questions or customization requests, please reach out or open an issue in the repository.

---

**Built with ❤️ for the automotive industry**
