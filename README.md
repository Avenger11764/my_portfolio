# 🚀 Avinash Bajpai — 3D Portfolio

A stunning interactive 3D portfolio built with React, Three.js, and GSAP. Features a physics-driven tech stack showcase, smooth scroll animations, and a fully personalized layout reflecting my resume.

[![Live Demo](https://img.shields.io/badge/Live-Demo-5eead4?style=for-the-badge&logo=vercel)](https://avinashbajpai.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Avenger11764-181717?style=for-the-badge&logo=github)](https://github.com/Avenger11764)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-avinash--bajpai-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/avinash-bajpai/)

🌐 **Live:** [https://avinashbajpai.vercel.app/](https://avinashbajpai.vercel.app/)

---

## ✨ Features

- **3D Character Model** — Animated GLTF character powered by `@react-three/fiber` & `@react-three/drei`
- **Physics Tech Balls** — Interactive tech stack spheres using `@react-three/rapier` physics engine
- **Smooth Scroll** — GSAP ScrollSmoother for buttery-smooth page transitions
- **Custom Cursor** — Magnetic cursor with contextual states
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **About Section** — Skills grid, education timeline, and quick stats
- **Projects Carousel** — Slides through MediVault, Dynamic Island, and AlgoPrep
- **Career Timeline** — Education & Hacktoberfest contributions
- **Contact Section** — Direct links to GitHub, LinkedIn, Twitter (X), email & phone

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, TypeScript, Vite |
| **3D / Animation** | Three.js, @react-three/fiber, @react-three/drei, @react-three/rapier, GSAP |
| **Styling** | Vanilla CSS, CSS Variables |
| **Icons** | react-icons (Material Design, Font Awesome 6) |
| **Post-processing** | @react-three/postprocessing (N8AO) |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx          # Bio, skills grid, education
│   ├── Career.tsx         # Experience & education timeline
│   ├── Character/         # 3D character model loader
│   ├── Contact.tsx        # Contact links & footer
│   ├── Landing.tsx        # Hero section
│   ├── Navbar.tsx         # Navigation + GSAP smooth scroll
│   ├── SocialIcons.tsx    # GitHub / LinkedIn / Twitter + Resume
│   ├── TechStack.tsx      # Physics-driven 3D tech balls
│   ├── WhatIDo.tsx        # Skills & services cards
│   ├── Work.tsx           # Projects carousel
│   └── styles/            # Component-level CSS
├── context/               # Loading state provider
├── data/                  # Bone animation data
└── types/                 # TypeScript types
public/
├── images/                # Project screenshots & tech logos
├── models/                # GLTF 3D character + HDR environment
└── Avinash_Bajpai.pdf     # Resume
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Avenger11764/my_portfolio.git
cd my_portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

The app will be live at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

---

## 📌 Projects Featured

### 🏥 MediVault — Healthcare Management System
A digital health wallet integrated with ABHA ID for secure patient identity verification and medical record interoperability. Includes AI-driven summarization and multilingual support.
> **Tech:** React, Tailwind CSS, Supabase, Vite, i18next

### 🖥️ Dynamic Island for Windows — Desktop UI Tool
A high-performance Windows desktop application replicating Apple's "Dynamic Island" UI with physics-based animations. Integrates Spotify Web API and SMTC for real-time media controls.
> **Tech:** Electron, React, Framer Motion, Tailwind CSS, Vite

### 📚 AlgoPrep — Interview Prep Platform
A full-stack platform to organize and practice Data Structures and Algorithms problems with quick navigation between categories, conceptual guides, and code solutions.
> **Tech:** JavaScript, CSS, HTML, Node.js

---

## 📬 Contact

| Platform | Link |
|---|---|
| Email | avenger11764@gmail.com |
| Phone | (+91) 9532009373 |
| LinkedIn | [avinash-bajpai](https://www.linkedin.com/in/avinash-bajpai/) |
| GitHub | [@Avenger11764](https://github.com/Avenger11764) |
| Twitter / X | [@Devavinashhh](https://x.com/Devavinashhh) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Designed & Developed by <strong>Avinash Bajpai</strong> © 2026</p>
