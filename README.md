# eGov Foundation — Landing Page (React + Redux)

A production-grade React landing page recreation of [egov.org.in](https://egov.org.in), built for **Task 2** of the Tailwebs assessment.

---

## 🚀 Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI library with functional components + hooks |
| **Redux Toolkit** | Global state management (products, filters, search) |
| **React-Redux** | Connect Redux store to React components |
| **CSS Modules** | Component-scoped styling |
| **DM Sans** | Typography (as per task requirement) |

---

## 📁 Project Structure

```
egov-landing/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/          # Sticky responsive navbar with hamburger
│   │   ├── Hero/            # Hero section with animated badges
│   │   ├── Stats/           # 1B+ stats banner + grid
│   │   ├── Features/        # Bold approaches with tab switcher
│   │   ├── Sustaining/      # 20 years of sustaining change
│   │   ├── DIGIT/           # CTA section for DIGIT platform
│   │   ├── LatestAtEGov/    # Product listing with Redux
│   │   │   ├── LatestAtEGov.jsx  # Main section + search + filters
│   │   │   └── ProductCard.jsx   # Individual product card
│   │   ├── Skeleton/        # Shimmer skeleton loader
│   │   ├── Supporters/      # Supporters logos
│   │   └── Footer/          # Full footer with subscribe form
│   ├── store/
│   │   ├── index.js         # Redux store configuration
│   │   └── slices/
│   │       └── productsSlice.js  # Products slice (fetch, search, filter)
│   ├── data/
│   │   └── mockData.js      # Mock API data (9 products, 8 categories)
│   ├── App.jsx              # Root component with Provider
│   ├── App.css              # Global styles + CSS variables
│   └── index.js             # Entry point
└── package.json
```

---

## ✅ Task Requirements Checklist

### Core Requirements
- [x] React.js with functional components + hooks
- [x] Display "Latest at eGov" product list from mock data
- [x] Product cards with image, name, description, category
- [x] **Search bar** — filters products by name (real-time, Redux state)
- [x] **Category filter** — pill buttons for 8 categories
- [x] Clean UI matching eGov reference design

### Bonus Features
- [x] **Skeleton loader** — shimmer animation while products are "loading"
- [x] **"No results found"** state with clear filters button
- [x] Error/retry state
- [x] Loading delay simulated (1.8s) to showcase skeleton

### Additional
- [x] Fully responsive (desktop, tablet, mobile)
- [x] Redux Toolkit for all product state
- [x] Hover transitions and micro-animations
- [x] Sticky navbar with scroll shadow
- [x] All page sections: Hero, Stats, Features, DIGIT (CTA), Latest, Supporters, Footer
- [x] Floating animated badges on hero image
- [x] DM Sans font throughout

---

## 🛠 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Design Notes

- **Color Palette**: eGov Blue `#0b4ea2`, Orange Accent `#f97316`, Dark Navy `#0f172a`
- **Font**: DM Sans (Google Fonts) — as specified in task
- **Animations**: CSS keyframe shimmer on skeleton, float on hero badges, fadeInUp on grid
- **Image Strategy**: All images from `placehold.co` as per task requirement
