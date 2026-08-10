---
id: "new-tab-chess"
title: "New Tab Chess"
slug: "new-tab-chess"
caption: "Transform every open tab into a quick bullet chess match."
description: "Built to seamlessly integrate bullet chess practice into daily workflow. Features instant board initialization, tactical puzzle modes, and performance analytics."
status: "in-development"
featured: false
category: "Chrome Extensions"
role: "Frontend Developer"
technologies:
  - "TypeScript"
  - "HTML5"
  - "CSS3"
  - "Chess.js"
  - "Lichess DB"
  - "Chrome Extension API"
githubUrl: "https://github.com/oswwwaldo/new-tab-chess"
liveUrl: null
thumbnail: "/assets/projects/new-tab-chess/thumbnail.webp"
gallery:
  - "/assets/projects/new-tab-chess/preview-1.webp"
  - "/assets/projects/new-tab-chess/preview-2.webp"
  - "/assets/projects/new-tab-chess/preview-3.webp"
  - "/assets/projects/new-tab-chess/preview-4.webp"
contributors: null
year: "2026"
semester: "Fall 2026"
startDate: "September 2026"
endDate: "November 2026"
keyFeatures:
  - "Instant bullet chess game board loading on new browser tab creation"
  - "Local and API-synced rating baseline tracking"
  - "New tab functionality, daily puzzles and accountability tracker"
  - "Minimalist dark UI optimized for rapid board vision"
---

## New Tab Chess

A lightweight, distraction-free browser extension designed to replace the default Chrome new tab page with an interactive bullet chess board, daily puzzle challenges, and rapid rating baseline tracking.

New Tab Chess bridges micro-tasking with skill progression. By bringing fast-paced bullet chess matches and tactical drills directly into the browser tab lifecycle, it turns open context-switching moments into focused, high-speed practice sessions.

## Problem

Context-switching during study or work sessions often leads to aimless web browsing. When opening a new browser tab to take a short brain break, developers and students frequently default to social media feeds or distracting video platforms. Standard chess platforms require navigating to a website, signing in, and initiating a match manually, creating friction for quick, time-boxed tactical practice.

## Approach

To eliminate friction and channel micro-breaks into deliberate cognitive practice, **New Tab Chess** replaces the native browser override page with a zero-latency chess interface.

The extension initializes directly within the browser thread upon opening a new tab. By integrating light board state management with local storage persistence, users can immediately drop into a fast 1-minute or 3-minute engine match, complete a daily tactical puzzle, or review their recent performance baseline without leaving their active workflow.

## Impact

* **Zero-Friction Tactical Practice:** Cuts the steps required to launch a quick chess match down to a single keyboard shortcut (`Cmd+T` / `Ctrl+T`).
* **Cognitive Focus Retention:** Replaces mindless scroll loops with active tactical visualization and rapid pattern recognition.
* **Minimalist Ergonomics:** A high-contrast, dark UI engineered specifically to reduce eye strain and promote rapid board vision.

## Technical Breakdown

### Core Architecture & State Management

The core engine relies on `Chess.js` for move validation, check/checkmate detection, and FEN string serialization. State updates are managed natively via strongly typed TypeScript interfaces to ensure frame-accurate board renders.

### Browser Extension Lifecycle

Using the Manifest V3 specification, the application leverages background service workers for state sync while offloading resource-heavy board calculations to the main UI thread. Daily puzzle payloads are cached locally using `chrome.storage.local` to allow offline play without blocking main-thread UI rendering.
