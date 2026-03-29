# ShopFittings Solutions — React + Vite + Tailwind CSS

Inspired by RJR Shopfitting website style. Dark navy + orange branding, multi-page with React Router.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Topbar.jsx        # Top contact bar
│   │   ├── Navbar.jsx        # Sticky nav + mobile menu
│   │   └── Footer.jsx        # Full footer
│   ├── sections/
│   │   ├── Hero.jsx          # Hero with quote card
│   │   └── HomeSections.jsx  # TrustStrip, Services, WhyUs,
│   │                         # Projects, Stats, Testimonials,
│   │                         # Brands, CtaBanner, Contact
│   └── ui/
│       └── PageHero.jsx      # Shared inner-page hero banner
├── pages/
│   ├── Home.jsx              # Homepage (all sections)
│   ├── ServiceDetail.jsx     # /services/:key
│   └── ProjectDetail.jsx     # /projects/:key
├── data/
│   └── index.js              # All content — edit here
├── hooks/
│   └── index.js              # useReveal + useCountUp
├── App.jsx                   # React Router setup
├── main.jsx
└── index.css                 # Tailwind + custom classes
```

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Full homepage |
| `/services/retail` | Retail Fitouts detail page |
| `/services/hospitality` | Hospitality Fitouts detail page |
| `/services/commercial` | Commercial Fitouts detail page |
| `/services/office` | Office Fitouts detail page |
| `/services/medical` | Medical Fitouts detail page |
| `/services/joinery` | Bespoke Joinery detail page |
| `/projects/pandora` | Pandora project page |
| `/projects/wiley` | Wiley & Co project page |
| `/projects/optus` | Optus project page |
| `/projects/chemist` | Chemist Warehouse project page |
| `/projects/baskin` | Baskin-Robbins project page |

## Customisation

- **All content**: Edit `src/data/index.js` — services, projects, stats, testimonials
- **Colors**: Edit `tailwind.config.js` → `theme.extend.colors`
- **Real project photos**: Replace Unsplash URLs in `src/data/index.js` with your own images
- **Contact form**: Wire up `ContactSection` in `HomeSections.jsx` to EmailJS or your backend
- **New service/project**: Add entry to `SERVICES` or `PROJECTS` object in `data/index.js`

## Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```
