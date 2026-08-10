---
title: "Developer Portfolio"
slug: "portfolio"
tagline: "Interactive developer portfolio featuring modern UI and fluid motion."
description: "Minimalist, multi-themed software engineering portfolio built with Astro, TypeScript, and GSAP."
longDescription: "A technical showcase featuring interactive UI animations, typed Astro content collections, dynamic theme switching, and custom GSAP scroll sequences."
status: "completed"
featured: true
category: "Web Development & UI/UX"
role: "Sole Developer"
technologies:
  - "Astro.js"
  - "TypeScript"
  - "GSAP"
  - "React"
  - "SCSS"
githubUrl: "https://github.com/oswwwaldo/portfolio"
liveUrl: "https://portfolio.dev"
thumbnail: "/assets/projects/portfolio/thumbnail.webp"
gallery:
  - "/assets/projects/portfolio/preview-1.webp"
  - "/assets/projects/portfolio/preview-2.webp"
  - "/assets/projects/portfolio/preview-3.webp"
contributors: null
semester: "Summer 2026"
startDate: "May 2026"
endDate: "August 2026"
keyFeatures:
  - "Clean, responsive visual design and structured UI layouts"
  - "GSAP motion triggers and reactive component transitions"
  - "Astro Content Collections for strictly typed project/blog schemas"
  - "Multi-theme switcher with persistent local storage state"
---

# Developer Portfolio

A minimalist, high-performance developer portfolio built to showcase full-stack projects, written thoughts, and video edits through a modern, responsive user interface.

Bridging static speed with interactive motion design, this site utilizes Astro's island architecture alongside GSAP timeline orchestration to deliver zero-latency navigation, theme customization, and fluid page transitions.

The Developer Portfolio demonstrates how full-stack component architecture, static site generation, and deliberate animation engines can coexist. By combining Astro's performance with GSAP's precision, it delivers a memorable web experience without sacrificing build efficiency or web accessibility.

## Problem

Developer portfolios frequently fall into one of two extremes: generic, uninspired templates that fail to show creative personality, or overly heavy single-page web applications (SPAs) burdened by massive JavaScript bundles, poor SEO, and sluggish initial page loads. Furthermore, integrating complex UI animations often leads to layout thrashing, accessibility degradation, and broken mobile responsiveness.

## Approach

To solve the tension between rich motion graphics and lightweight performance, the portfolio is engineered around **Astro.js** as its core static generator. 

By leveraging Astro's zero-JavaScript-by-default architecture, all layout elements, articles, and content grids render as pure HTML/CSS at build time. Dynamic interactivity—such as GSAP scroll sequences, floating project thumbnails, and interactive theme toggles—is isolated to explicit client islands powered by **TypeScript** and modular **GSAP** timelines.

## Impact

* **Optimal Core Web Vitals:** Sub-second page loads achieved by serving pre-rendered HTML while offloading animations to GPU-accelerated GSAP pipelines.
* **Distinct Visual Identity:** A custom design system incorporating clean layout framing, responsive ASCII art elements, and modern web typography.
* **Strict Type Safety:** Driven by Zod-validated Astro Content Collections, eliminating dead links and broken schema structures across all case studies and posts.

## Technical Breakdown

### Core Architecture & Content Engine

Content is decoupled from layout code using Astro Content Collections. Each project and post exists as a strictly typed Markdown or JSON document validated against a Zod schema at build time.

### GSAP Motion Orchestration & Micro-Interactions

Animations are modularized into dedicated client scripts to keep the main thread clean:

* **ScrollTrigger Timelines:** Orchestrate section reveals, header pill scroll effects, and image gallery panning without layout jumps.
* **Hover & Pointer Tracking:** Project lists feature floating thumbnail previews and dynamic shape backgrounds driven by hardware-accelerated transforms (`transform: translate3d`).
* **Theme System:** Dynamic theme swapping (including light, dark, and ASCII modes) operates via CSS custom properties and persistent state stored in `localStorage`.