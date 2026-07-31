# Moiz Ahmed — Portfolio Website

> **Senior Full Stack Developer & Agentic AI Engineer**  
> Sialkot, Punjab, Pakistan · [moizmalikofficiall@gmail.com](mailto:moizmalikofficiall@gmail.com) · [moizahmed.online](https://www.moizahmed.online)

Official source repository for the personal portfolio of **Moiz Ahmed** — a Full Stack Developer and Agentic AI Engineer specialising in modern web architecture, LLM-powered applications, and high-performance eCommerce solutions.

---

## 🌐 Live Website

**[https://www.moizahmed.online](https://www.moizahmed.online)**

---

## 🏗️ Technology Stack

This portfolio is engineered with a production-grade, modern front-end stack:

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| 3D & Physics | Three.js · @react-three/fiber · @react-three/rapier |
| Animations | GSAP 3 · ScrollTrigger · @gsap/react |
| Post-Processing | @react-three/postprocessing · N8AO ambient occlusion |
| UI Components | react-icons · react-fast-marquee |
| Analytics | Vercel Analytics |
| Linting | ESLint + TypeScript-ESLint |

---

## ✨ Key Features

- **Interactive 3D Tech Stack** — Physics-based sphere simulation rendering technology logos via Three.js Rapier physics engine with real-time pointer interaction.
- **GSAP Scroll Animations** — Horizontal scroll-pinned project showcase and reveal animations powered by GSAP ScrollTrigger.
- **Expandable Service Cards** — Touch and hover-aware capability cards with smooth CSS transitions for mobile and desktop.
- **Technical Case Study Modals** — In-depth project breakdowns covering problem statements, system architecture, engineering challenges, solutions, and performance metrics.
- **Custom Cursor** — Context-aware cursor with disable states on interactive links.
- **Responsive & Accessible** — Semantic HTML5, ARIA labels, keyboard navigation support, and mobile-first design across all sections.
- **Animated Loading Screen** — Polished entry experience before main content renders.

---

## 📁 Project Structure

```
Portfolio-Website-main/
├── public/
│   ├── images/            # Project screenshots & tech stack logos
│   ├── models/            # 3D character model & HDR environment maps
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Character/     # Animated 3D avatar (Three.js / @react-three/fiber)
│   │   ├── styles/        # Component-scoped CSS files
│   │   ├── utils/         # Shared utility functions
│   │   ├── About.tsx      # Professional summary section
│   │   ├── Career.tsx     # Experience & education timeline
│   │   ├── CaseStudyModal.tsx  # Project deep-dive modal
│   │   ├── Contact.tsx    # Footer with contact & social links
│   │   ├── Cursor.tsx     # Custom cursor component
│   │   ├── FAQ.tsx        # Frequently asked questions
│   │   ├── Landing.tsx    # Hero / landing section
│   │   ├── Loading.tsx    # Animated entry loader
│   │   ├── MainContainer.tsx   # Root layout wrapper
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── Reviews.tsx    # Client testimonials
│   │   ├── SocialIcons.tsx    # Floating social icon panel
│   │   ├── TechStack.tsx  # Interactive 3D physics tech display
│   │   ├── WhatIDo.tsx    # Services / capabilities cards
│   │   ├── Work.tsx       # Horizontal scroll project gallery
│   │   └── WorkImage.tsx  # Project card image component
│   ├── data/
│   │   ├── projectsData.ts    # All project case study content
│   │   └── boneData.ts        # 3D avatar skeleton data
│   ├── context/           # React context providers
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Running Locally

**Prerequisites:** Node.js ≥ 18 and npm

```bash
# 1. Clone the repository
git clone https://github.com/Mo0zi/Portfolio-Website-main.git
cd Portfolio-Website-main

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Additional Scripts

```bash
npm run build      # Production build (TypeScript compile + Vite bundle)
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint across the entire codebase
```

---

## 💼 Featured Projects

### 1. StitchSmart — AI eCommerce SaaS Platform (B2B & B2C)
**Stack:** React · Node.js · Express · MongoDB · Google Gemini API · LangChain · FAISS · RAG Automation  
An AI-powered eCommerce SaaS platform automating store operations and featuring a custom RAG-based AI chatbot. Evolved from a university project into a full production SaaS solution combining both B2B (wholesale bulk ordering) and B2C (retail storefront & AI assistance) features in a single unified web platform. Reduced catalog search latency by **68%** with **99.4%** query precision.

### 2. MarketGO AI — Agentic Marketing Automation SaaS
**Stack:** LangChain · Agentic AI · React · Express.js · OpenAI API  
Autonomous multi-agent SaaS that generates end-to-end digital marketing campaigns. Implemented strict state-machine controls and token-aware queue throttling, cutting campaign setup time by **85%** with a **4.8/5** user satisfaction rating.

### 3. Haash Wears — B2B eCommerce Web Platform
**Stack:** PHP MVC · MySQL · JavaScript · SEO  
Custom-built B2B wholesale portal on a lightweight PHP MVC framework. Multi-level server query caching and strategic database indexing delivered a **140ms TTFB** and a **120% increase** in organic search impressions.

### 4. CCPD Web Platform — Enterprise Management Portal
**Stack:** PHP MVC · MySQL · JavaScript · REST APIs  
Secure enterprise portal with CSRF protection, role-based access control (RBAC), and third-party API integrations. Bitwise permission middleware achieves O(1) access control lookup with **100% security audit compliance**.

### 5. Shopify Custom Stores — High-Converting Themes
**Stack:** Shopify Liquid · JavaScript · SEO · Core Web Vitals  
Modular, performance-first Shopify themes engineered from scratch. Achieved a **95+ Mobile Lighthouse score**, **under 1.6s Mobile LCP**, and a **28% conversion rate improvement**.

### 6. AI & RAG Custom Integrations — Bespoke AI Solutions
**Stack:** LangChain · FAISS · Google Gemini API · React · Node.js  
Custom AI pipelines for enterprise document intelligence — zero data leakage architecture, **96% precision** on document retrieval, and **sub-250ms** vector query execution.

---

## 🛠️ Core Engineering Expertise

**Artificial Intelligence & Agentic Systems**  
Agentic AI Workflows · LangChain Framework · Retrieval-Augmented Generation (RAG) · FAISS Vector Search · Google Gemini API · OpenAI API · LLM Pipeline Engineering

**Full-Stack Development**  
React.js · Node.js · Express.js · TypeScript · PHP MVC Architecture · JavaScript (ES6+) · REST API Design · Next.js

**Database Engineering**  
MongoDB · MySQL · Relational Schema Design · Query Optimisation · Indexing Strategies

**eCommerce & CMS**  
Custom Shopify Theme Development · Liquid Templating · Payment Gateway Integration · Core Web Vitals Optimisation · SEO Engineering

**3D / Creative Front-End**  
Three.js · @react-three/fiber · @react-three/rapier · GSAP · WebGL

---

## 📅 Career Timeline

| Period | Role | Organisation |
|---|---|---|
| 2022 – 2026 | BS Computer Sciences | University of Central Punjab, Lahore |
| 2024 | Full Stack Developer | CCPD |
| 2024 | Full Stack Developer | Haash Wears |
| 2025 | Shopify Store Developer | Freelance — Silk School & Others |
| 2025 – Present | Freelance Full Stack & AI Developer | Self-Employed |

---

## 📬 Contact & Social

| Channel | Link |
|---|---|
| Email | [moizmalikofficiall@gmail.com](mailto:moizmalikofficiall@gmail.com) |
| Phone / WhatsApp | [+92 324 9670130](https://wa.me/923249670130) |
| GitHub | [github.com/Mo0zi](https://github.com/Mo0zi) |
| Twitter / X | [@Mo0ziofficiall](https://x.com/Mo0ziofficiall) |
| Instagram | [@mo0zi.official](https://www.instagram.com/mo0zi.official/) |

---

## ⚖️ License & Usage

This repository is shared publicly for **code inspection and open-source learning purposes only**.

**Please do not:**
- Clone or commercially reproduce the full website design or layout.
- Redistribute the 3D character model, HDR environment maps, or other proprietary assets.

See the [LICENSE](LICENSE) file for complete terms.

---

*© 2026 Moiz Ahmed. Designed and developed by Moiz Ahmed. All rights reserved.*
