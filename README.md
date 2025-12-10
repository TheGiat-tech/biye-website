# BiYé Website

BiYé — A professional FemTech & IoT accessibility website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Overview

BiYé is a next-generation FemTech and IoT initiative redefining women's hygiene accessibility in public environments. This website showcases our mission, solution, and provides comprehensive information for investors, partners, and users.

## ✨ Features

- **Bilingual Support**: Full English and Hebrew translations with proper RTL layout
- **Professional Design**: Modern, clean interface with peach pink color scheme
- **Responsive**: Mobile-first design that works beautifully on all devices
- **SEO Optimized**: Includes sitemap.xml, robots.txt, and Open Graph metadata
- **Accessible**: WCAG compliant with semantic HTML and ARIA labels
- **Fast**: Static site generation with Next.js for optimal performance

## 📄 Pages

- **Home** (`/`): Hero section with About, Problem, Solution, Vision, Investors, Media, and Contact sections
- **Investors** (`/investors`): Investment opportunities and partnership information
- **Contact** (`/contact`): Contact form with company information
- **Privacy Policy** (`/privacy-policy`): Comprehensive privacy policy
- **Terms of Use** (`/terms-of-use`): Terms and conditions

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TheGiat-tech/biye-website.git
   cd biye-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Update environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:
```bash
npm run build
```

### Production

Start the production server:
```bash
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.33 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended), Netlify, or any Node.js hosting

## 🎨 Design

The website features a professional peach pink color palette:
- Primary: #FF9B9B
- Secondary: #FFB5B5
- Accent: #FFC9C9
- Dark Peach: #E88888

## 📱 Responsive Design

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Internationalization

The website supports:
- English (default)
- Hebrew (עברית) with RTL layout

Language preference is saved in localStorage and persists across sessions.

## 🔍 SEO

The site includes:
- Dynamic sitemap.xml
- robots.txt
- Open Graph tags for social sharing
- Twitter Card metadata
- Semantic HTML structure
- Descriptive meta tags

## 📦 Project Structure

```
biye-website/
├── app/
│   ├── components/
│   │   ├── global/        # Header, Footer
│   │   ├── sections/      # Home page sections
│   │   └── LanguageContext.tsx
│   ├── types/             # TypeScript interfaces
│   ├── utils/             # Translations, helpers
│   ├── contact/           # Contact page
│   ├── investors/         # Investors page
│   ├── privacy-policy/    # Privacy policy page
│   ├── terms-of-use/      # Terms page
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── public/
│   └── biye-machine.svg
└── package.json
```

## 🤝 Contributing

This is a private repository for BiYé. For contributions or suggestions, please contact the development team.

## 📄 License

© 2024 BiYé. All rights reserved.

## 📧 Contact

For questions or support:
- Email: info@biye.com
- Website: [https://biye.com](https://biye.com)

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

---

Built with ❤️ for women's wellbeing
