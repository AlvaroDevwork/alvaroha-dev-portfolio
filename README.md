# Alvaro Huenuqueo — Professional Web Portfolio  
## v0.2.0 — HTML, CSS & JavaScript Integration Phase

---

## Overview

This repository contains the **v0.2.0 release** of my professional web portfolio.

This version represents the complete integration of **HTML, CSS, and JavaScript**, transforming the initial static HTML foundation into a fully styled, responsive, and interactive web portfolio.

The project was developed following **professional software engineering practices**, including:

- Strict **GitFlow workflow**
- **Conventional Commits**
- **Pull Requests**
- Incremental and traceable feature integration

---

## Project Scope — Phase 2 (HTML + CSS + JS)

### ✅ Included in v0.2.0

- Semantic HTML5 structure  
- Modular and scalable CSS architecture  
- Responsive design using media queries  
- Desktop and mobile navigation (hamburger menu)  
- JavaScript interaction for mobile navigation  
- Consistent class naming and layout alignment  
- GitFlow methodology  
- Conventional Commits  
- Pull Requests and merge commits  
- Automated GitHub Pages deployment via tags  

### ❌ Not included yet

- Advanced JavaScript logic  
- Animations beyond base CSS transitions  
- Backend or API integration  
- JavaScript frameworks (React, Vue, etc.)

---

## Development Workflow (GitFlow)

This project strictly follows **GitFlow**:

- `main` → stable, tagged releases only  
- `develop` → active integration branch  
- `feature/*` → new functionality or sections  
- `fix/*` → syntax, structure, or consistency fixes  
- `release/*` → version stabilization (when applicable)  
- `tag` → production-ready snapshots  

All changes are integrated into `develop` through **Pull Requests and merge commits**.

---

## Commit History — Real Construction Order

The project was built incrementally, as reflected in the Git history.

### HTML Foundation — v0.1.0

- `feat(html-head)` — Base HTML skeleton and meta structure  
- `feat(navbar-desktop)` — Desktop navigation with anchor links  
- `feat(about)` — About section with experience and education  
- `feat(experience)` — Experience section with skill grouping  
- `feat(projects)` — Portfolio projects showcase  
- `feat(contact)` — Contact section with email and LinkedIn  
- `feat(footer)` — Footer with navigation and copyright  
- `feat(profile)` — Hero profile section with image and intro  

### CSS Integration — v0.2.0

- `style(css)` — Base CSS configuration (fonts, resets, transitions)  
- `feat(css-navbar)` — Desktop navigation styles  
- `feat(css-navbar-mobile)` — Mobile hamburger navigation styles  
- `style(css-layout)` — Global section layout and containers  
- `feat(css-profile)` — Profile section layout and alignment  
- `feat(css-components)` — Shared buttons and icon components  
- `fix(css-naming)` — CSS class and ID naming alignment  
- `feat(css-sections)` — About, Experience, Projects, Contact and Footer styles  
- `feat(css-mediaqueries)` — Responsive breakpoints and layout adjustments  

### JavaScript Integration

- `feat(js-menu)` — Hamburger menu toggle logic  

### Structural Fixes & Stabilization

- `fix(html-python-title)` — Typo correction in HTML content  
- `fix(html)` — Markup structure fixes, class alignment, and anchor corrections  

---

## HTML Section Breakdown

| Section | Purpose |
|------|--------|
| `nav#desktop-nav` | Desktop navigation |
| `nav#hamburger-nav` | Mobile navigation |
| `section#profile` | Hero profile section |
| `section#about` | About me |
| `section#experience` | Skills and experience |
| `section#projects` | Portfolio projects |
| `section#contact` | Contact information |
| `footer` | Footer and secondary navigation |

---

## CSS Architecture

The CSS is structured for **clarity, maintainability, and scalability**.

### `style.css`

- Base styles  
- Layout structure  
- Shared components (buttons, icons)  
- Section-specific styles  

### `mediaqueries.css`

- Responsive behavior  
- Breakpoints for desktop, tablet, and mobile  

### Design principles applied

- Mobile-first adjustments  
- Reusable components  
- Consistent class naming  
- HTML–CSS structural alignment  

---

## JavaScript Overview

JavaScript usage is intentionally **minimal and focused**.

### `script.js`

- Handles hamburger menu toggle  
- Ensures clean separation of concerns  
- No external dependencies  

---

## Local Usage

This is a **pure static web project**.

### Run locally

```bash
git clone https://github.com/AlvaroHuenuqueoArias/alvaroha-dev-portfolio-official.git
cd alvaroha-dev-portfolio-official
open index.html
---

No build tools, package managers, or external dependencies are required.

---

## Deployment

Deployment is handled via **GitHub Pages** using a **GitHub Actions workflow**.

### Trigger

The site is automatically deployed when a version tag is pushed:

```text
vX.Y.Z

---

## Versioning Strategy

The project follows **Semantic Versioning**, aligned with development phases:

- `v0.1.0` → HTML-only foundation  
- `v0.2.0` → HTML + CSS + JavaScript integration *(current release)*  
- `v0.3.0` *(planned)* → Enhancements, animations, and optional improvements  

Each version is closed with a **Git tag** and deployed automatically.

---

## Contact

**Alvaro Huenuqueo**

- LinkedIn: <https://www.linkedin.com/in/alvaroalejandro-huenuqueoarias/>  
- Email: <alvarohuenuqueoarias@hotmail.com>
