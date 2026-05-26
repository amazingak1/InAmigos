# 🌿 InAmigos Foundation – NGO Awareness Webpage

> A static awareness webpage created as part of the **InAmigos Foundation Internship Task 1**.  
> Built using pure **HTML, CSS, & JS** — no heavy frameworks or libraries.

---

## 📌 About This Project

This webpage was developed to spread awareness about the **InAmigos Foundation** — a Section 8 registered non-profit organisation founded in 2020 by Mr. Govind Shukla, working across 28 states of India through 6 key social initiatives.

---

## 🖼️ Image & Content Sources

> **All images, logos, and external links used in this project are sourced directly from the official InAmigos Foundation website and belong to InAmigos Foundation.**  
> They are used here solely for **educational and awareness purposes** as part of an internship assignment.

| Asset | Source |
|---|---|
| NGO Logo | `inamigosfoundation.org.in/public/storage/settings/` |
| Hero Slideshow Images | `inamigosfoundation.org.in/public/storage/slideshow/` |
| Gallery Photos | `inamigosfoundation.org.in/public/storage/gallery/` |
| Event Photos | `inamigosfoundation.org.in/public/storage/events/` |
| Donate Link | [Razorpay – rzp.io/l/kWQ87HP](https://rzp.io/l/kWQ87HP) |
| Volunteer Form | [Google Forms](https://forms.gle/AB4c1hLaDDmtrKGU7) |
| Official Website | [inamigosfoundation.org.in](https://inamigosfoundation.org.in/) |

> ⚠️ No images were downloaded or stored locally. All `<img>` tags reference the **live URLs** directly from the official website.

---

## 📁 File Structure

```text
amig/
├── index.html          → Main homepage (Hero, About, Projects, Impact, Events, Gallery, CTA, Footer)
├── about.html          → Dedicated About Us page with full credentials and initiative details
├── team.html           → Our Team page (Leadership, Core Team, Values)
├── testimonials.html   → Testimonials page (Stories, Impact Numbers)
├── contact.html        → Contact Us page (Form, Map, FAQ, Info)
├── README.md           → This file
├── css/
│   ├── style.css       → Main stylesheet (layout, components, color variables)
│   ├── animations.css  → Scroll reveal animations, counter animation, hero transitions, advanced effects
│   └── responsive.css  → Media queries for tablet and mobile breakpoints
└── js/
    └── main.js         → Shared interactive features (loader, cursor, particles, etc.)
```

---

## 🛠️ Technical Details

### Stack
- **HTML5** — Semantic markup (`<section>`, `<nav>`, `<footer>`, `<aside>`)
- **CSS3** — Custom properties (variables), Flexbox, CSS Grid
- **Vanilla JavaScript** — Custom interactions and animations
- **Google Fonts** — `Outfit` and `Merriweather` via CDN

### Key Features
| Feature | Implementation |
|---|---|
| Page Loader | CSS animations + JS timeout |
| Hero Slideshow | JS `setInterval` cycling `.active` class on slides every 5 seconds |
| Particle Background | HTML5 `<canvas>` with custom JS particle system |
| Scroll Reveal | `IntersectionObserver` API toggling `.visible` on `.reveal` elements |
| Animated Counters | `IntersectionObserver` + `setInterval` counting up to target values |
| Sticky Navbar | `position: sticky` + JS scroll listener adds `.scrolled` class |
| Mobile Menu | Hamburger button toggles `.open` class on `nav-links` |
| Responsive Layout | CSS Grid with `@media` breakpoints at `1024px`, `768px`, `480px` |
| Custom Cursor | JS mouse tracking with custom CSS elements |
| 3D Tilt Effect | Mouse movement tracking on cards |
| Lightbox Gallery | Dynamic JS overlay for image viewing |
| Scroll Progress | Dynamic CSS width based on scroll position |

### CSS Architecture
- **CSS Variables** defined in `:root` for the full color palette, shadows, border-radius, and transitions
- Styles split into **3 separate files** for maintainability:
  - `style.css` → all component styles
  - `animations.css` → all keyframes, reveal utilities, and advanced effects
  - `responsive.css` → all media queries

### Color Palette
| Name | Value | Usage |
|---|---|---|
| Primary | `#1a6b5a` | Navbar, buttons, headings |
| Primary Dark | `#124d42` | Topbar, dark sections |
| Primary Light | `#2a9d8f` | Accents |
| Accent (Orange) | `#e76f1f` | CTA buttons, tags |
| Accent Light | `#f4a261` | Highlights, shimmer |
| Off White | `#f8f5f0` | Page background |

---

## 📄 Pages

### `index.html` — Homepage
Sections: Page Loader → Topbar → Navbar → Hero Slideshow (with Particles) → Stats Strip → About → Projects (6 cards) → Impact → Events → Gallery → Certifications Marquee → CTA Banner → Footer

### `about.html` — About Us
Sections: Page Hero → Story → Credentials (5 certifications) → 6 Initiatives with impact numbers → CTA Buttons | Sidebar: Volunteer photo, Quick Facts table, Contact card

### `team.html` — Our Team
Sections: Page Hero → Leadership Spotlight → Core Team Grid (8 members) → Core Values (4 cards) → Join CTA

### `testimonials.html` — Testimonials
Sections: Page Hero → Featured Story Spotlight → Stories Grid (9 testimonials) → Impact Numbers Grid → Share Story CTA

### `contact.html` — Contact Us
Sections: Page Hero → Contact Info Cards (4 cards) → Contact Form & Details (Map, Info, Socials) → FAQ Accordion → Donate CTA

---

## ✅ Task Checklist

- [x] Introduction about the NGO
- [x] Details of all 6 ongoing projects
- [x] Social impact section with real stats
- [x] Real images from the official website
- [x] Multiple Call-to-Action buttons (Donate, Volunteer, Join Us)
- [x] Clean, structured, and readable HTML & CSS
- [x] Fully responsive (mobile + tablet + desktop)
- [x] Separate About Us page with working navigation
- [x] Multi-page structure (Home, About, Team, Testimonials, Contact)
- [x] Rich UI interactions and animations

---

## 🌐 Public Hosting
The website can be hosted publicly via GitHub Pages (accessible via repository settings).

---

## 👤 Created By

**Intern Task 1 Submission**  
InAmigos Foundation Internship Program  
*Content and information sourced from [inamigosfoundation.org.in](https://inamigosfoundation.org.in/)*
