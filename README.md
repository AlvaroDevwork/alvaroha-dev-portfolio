# Alvaro H. A. — Professional Web Portfolio (HTML Phase)

---

## v0.1.0

### Overview

This repository contains the **first stable version (v1.0.0)** of my professional web portfolio.
This phase focuses **exclusively on the HTML structure**, built using semantic HTML5 and developed
under a **strict GitFlow workflow**.

The goal of this phase was to construct a clean, scalable, and maintainable HTML foundation
before moving into styling (CSS) and behavior (JavaScript).

---

## Project Scope — Phase 1 (HTML Only)

✔ Semantic HTML5 structure  
✔ Modular section-by-section development  
✔ GitFlow methodology  
✔ Conventional Commits  
✔ Pull Requests and Merge Commits  
✔ Ready for cloud deployment  

❌ No CSS refactor yet  
❌ No design customization yet  
❌ No additional features beyond original structure  

---

## Development Workflow (GitFlow)

The project strictly follows **GitFlow**:

- **main** → stable releases only  
- **develop** → integration branch  
- **feature/** → isolated development per HTML section  
- **release/** → version preparation  
- **tag** → production-ready snapshot  

Each HTML section was developed in its own feature branch and merged into `develop`
using Pull Requests.

---

## Commit History — HTML Construction Order

The HTML was built incrementally in the following order (as reflected in `git log`):

1. `feat(html-head)`  
   Base HTML skeleton, meta tags, and stylesheet references.

2. `feat(navbar-desktop)`  
   Desktop navigation bar with semantic anchor links.

3. `feat(about)`  
   About section with profile description, experience, and education.

4. `feat(experience)`  
   Experience section with categorized skills.

5. `feat(projects)`  
   Projects section displaying portfolio items.

6. `feat(contact)`  
   Contact section with email and LinkedIn links.

7. `feat(footer)`  
   Footer with secondary navigation and copyright.

8. `feat(hamburger-nav)`  
   Responsive mobile navigation with JavaScript toggle.

9. `feat(profile)`  
   Hero profile section with personal image and introduction.

10. `docs(readme)`  
    Project documentation (this file).

Each feature followed:
- One responsibility per commit
- Descriptive Conventional Commit messages
- Merge commits from `feature/*` → `develop`

---

## HTML Section Breakdown

| Section ID | Purpose |
|----------|--------|
| `html` / `head` | Base document structure |
| `nav#desktop-nav` | Desktop navigation |
| `nav#hamburger-nav` | Mobile navigation |
| `section#profile` | Personal introduction |
| `section#about` | About me |
| `section#experience` | Skills & experience |
| `section#projects` | Portfolio projects |
| `section#contact` | Contact information |
| `footer` | Page footer |

---

## Local Usage

This is a **pure static HTML project**.

To preview locally:
1. Clone the repository
2. Open `index.html` in any modern browser
3. Ensure the `assets/` directory exists

No build tools or dependencies are required.

---

## Versioning

- **v1.0.0** → Complete and stable HTML structure  
- Future versions will introduce:
  - CSS refactor
  - Responsive design improvements
  - Optional new features (language toggle, animations, etc.)

---

## Deployment (Next Phase)

The recommended deployment target is **AWS S3 + CloudFront**.

Deployment steps will be documented in future releases.

---

## Contact

**Alvaro H. A.**  
- Email: contacto@alvarodev.work  

---
