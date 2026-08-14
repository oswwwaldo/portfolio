---
id: "github-issue-roulette"
title: "GitHub Issue Roulette"
slug: "github-issue-roulette"
caption: "Discover open-source opportunities with a single spin."
description: "A gamified developer tool designed to eliminate search paralysis by serving randomized, curated GitHub issues filtered by programming language, project popularity, and entry-level tags."
status: "completed"
featured: true
category: "Developer Tools"
role: "Full Stack Developer"
technologies:
  - "TypeScript"
  - "React"
  - "Next.js"
  - "Tailwind CSS"
  - "Framer Motion"
  - "GitHub REST API"
  - "GitHub GraphQL API"
githubUrl: "https://github.com/oswwwaldo/github-issue-roulette"
liveUrl: "https://github-issue-roulette.vercel.app"
thumbnail:
  title: "GitHub Issue Roulette Preview"
  cover: "../../assets/projects/github-issue-roulette/thumbnail.webp"
  coverAlt: "GitHub Issue Roulette application interface"
gallery:
  - "/assets/projects/github-issue-roulette/preview-1.webp"
  - "/assets/projects/github-issue-roulette/preview-2.webp"
  - "/assets/projects/github-issue-roulette/preview-3.webp"
contributors: null
year: "2026"
semester: "Summer 2026"
startDate: "May 2026"
endDate: "July 2026"
keyFeatures:
  - "Randomized issue discovery powered by GitHub REST and GraphQL APIs"
  - "Custom filters for primary programming language, star counts, and 'good first issue' tags"
  - "Physics-based interactive roulette animation built with Framer Motion"
  - "Local history tracking, bookmarked issue dashboard, and rate-limit management"
---

## GitHub Issue Roulette

An interactive web application engineered to gamify open-source exploration, breaking down entry barriers for developers seeking actionable repository tasks.

By replacing complex search queries with a fluid, physics-driven selection wheel, GitHub Issue Roulette turns the search for bug fixes, feature requests, and starter issues into an engaging, low-friction discovery process.

## Problem

Aspiring open-source contributors often encounter decision fatigue when searching for places to start. Finding accessible entry points requires crafting complex GitHub search syntax, navigating through outdated repositories, or sifting through thousands of unmaintained issues. This friction frequently deters developers before they write a single line of code.

## Approach

To transform open-source onboarding into an intuitive habit, **GitHub Issue Roulette** brings serendipity and dynamic filtering to issue discovery.

The application queries GitHub’s live graph to fetch open, unassigned issues matching specified developer criteria—such as preferred tech stacks, project activity, or beginner-friendly labels. An animated roulette interface randomly selects a viable task, giving developers immediate context, contributor guidelines, and a direct link to start coding.

## Impact

* **Accelerated Contribution Onboarding:** Eliminates search fatigue by surfacing vetted, open tasks tailored to a developer's skill level in seconds.
* **Gamified Engagement:** Replaces tedious manual searches with interactive, physics-based spin mechanics that encourage daily exploration.
* **Targeted Discovery:** Filters out stale or abandoned repositories, ensuring users are directed toward active projects seeking community help.

## Technical Breakdown

### API Orchestration & Rate Limit Management

The backend integrates with both GitHub REST and GraphQL APIs to construct optimized search payloads. To handle unauthenticated API rate limits seamlessly, the app implements client-side token management alongside efficient query caching using React Query to minimize redundant network requests.

### Interactive State & Spring Physics

Built on Next.js and TypeScript, the roulette wheel utilizes `framer-motion` spring physics for realistic acceleration and deceleration cycles. Issue states, filter preferences, and saved target issues are persisted locally in `localStorage`, maintaining user history across browser sessions without requiring a centralized database.