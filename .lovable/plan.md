

# Plan: Logo Integration, Content Synthesis & Unified Timeline

## Overview
Replace the loading screen monogram with the DAM logo, expand the Service Logs timeline with all missing roles from the HTML file (including freelance in correct chronological position), and enhance Hero, Architect, Footer, and metadata.

## 1. Loading Screen — Logo Swap
**File: `src/components/LoadingScreen.tsx`**
- Copy `DAM_Logo_Definitivo.png` to `src/assets/dam-logo.png`
- Replace the `<h1>D.A.M.</h1>` text with an `<img>` tag using the logo
- Style: `max-w-[min(320px,80vw)]`, scale-in animation via a `logoIn` keyframe
- Keep existing progress bar, phase text, corner accents

## 2. Unified Chronological Timeline (The Forge)
**File: `src/components/ForgeSection.tsx`**

Merge all roles into a **single chronological timeline** (newest first). Each entry has a `type` field (`"corporate"`, `"freelance"`, or `"legacy"`) for visual differentiation. Freelance nodes keep their expandable "Technical Deep Dive" UI with a gold icon marker. Legacy entries show as compact summaries.

**Full unified order (newest → oldest):**

1. **Bilingual Operations Specialist** — Hired Experts / DS Solutions - Cordoba Legal Group (Jun 2025 – Feb 2026) `corporate`
2. **Bilingual Banking Support Specialist** — Sutherland - Capital One (Nov 2024 – Mar 2025) `corporate` [Security Clearance]
3. **Customer Success Associate** — Concentrix/Webhelp - CIGNA Healthcare (Aug 2023 – Nov 2024) `corporate` [Security Clearance]
4. **Customer Service Representative** — Foundever / FedEx (May 2023 – Jul 2023) `corporate` — Bilingual inbound support for FedEx logistics, shipment tracking, claims processing
5. **Call Center Representative** — Nexa BPO / Porvenir (Feb 2023 – May 2023) `corporate` — Pension fund support, eligibility verification, regulatory compliance
6. **Administrative Operations Assistant** — MEDIAPRO (Aug 2021 – May 2022) `corporate` — Administrative operations, document management, internal logistics
7. **Financial Analyst / Administrative Assistant** — Fundación Colombia Identitaria (Aug 2020 – May 2021) `corporate` — Financial analysis, budgeting, administrative coordination
8. **Process Lead / Records Management Technician** — Iron Mountain / Banco de la República (2018 – 2019) `corporate` — Full bullets: orchestrated 20,000+ item transition using ISAD(G) archival standards
9. **English Tutor (Educational Systems Design)** — JAC Luis López de Mesa (Oct 2017 – Nov 2018) `freelance` [expandable]
10. **Administrative Technician** — Alcaldía Local de Rafael Uribe Uribe (2015 – 2016) `legacy`
11. **Electronics Tutor (Basic & Power Electronics)** — JAC Luis López de Mesa (Jun 2014 – Oct 2015) `freelance` [expandable]
12. **Chainman II** — C&J Proyectos Topográficos (2013 – 2014) `legacy`
13. **Auxiliary II — Digitization Specialist** — COLTEMPORA / Seguro Social (Jun 2013 – Sep 2013) `legacy`
14. **Operations Assistant — Records Management** — Seguro Social / SYC (Mar 2012 – Dec 2012) `legacy`
15. **Administrative Assistant & Courier** — Carlos Forero Olaya (Sep 2011 – Feb 2012) `legacy`

- Remove the separate "Independent Deployments" and "Legacy Logs" sections
- Instead, render inline: corporate roles get full bullet cards, freelance roles get the expandable `FreelanceNode` with gold timeline dot, legacy roles get compact summary cards
- Add colored tag badges (blue for KPI/SLA, gold for CRM, red for Compliance) below company names on each entry

## 3. Hero Section Enhancements
**File: `src/components/HeroSection.tsx`**
- Add a **horizontal stats bar** below CTAs: `10+ Years | 6 Sectors | C1 Bilingual | 3 AI Tools`
- Add two concentric **spinning rings** around the portrait (slow rotation, gold diamond markers) via CSS
- Replace the long subtitle with ticker-style bordered chips for key roles

## 4. Architect Section Enhancement
**File: `src/components/ArchitectSection.tsx`**
- Add an **INTJ-A badge** with icon
- Add a 2x2 **trait grid** (Strategic Vision, Pattern Recognition, Autonomous Execution, Continuous Optimization)
- Add **MBTI dimension bars** (I 85% / E 15%, N 90% / S 10%, T 80% / F 20%, J 75% / P 25%)

## 5. Footer & Metadata
- **Footer.tsx**: Update copyright to "Diakos Logic & DevMind" tagline
- **index.html**: Update `<title>` to "D.A.M. — Diego Armando Méndez", update meta description and OG tags

## 6. Floating Runes Background
**File: `src/pages/Index.tsx`**
- Add a global layer of slowly rising Greek/runic symbols (Ψ, Ω, Δ, Λ, Σ, Θ) with low opacity

## 7. CSS Additions
**File: `src/index.css`**
- `@keyframes logoIn` — scale-in for loading screen logo
- `@keyframes spin-ring` — slow rotation for portrait rings
- `@keyframes float-rune` — rising rune animation
- Shimmer gradient utility for stat bar

## Technical Details
- **Files modified**: `LoadingScreen.tsx`, `ForgeSection.tsx`, `HeroSection.tsx`, `ArchitectSection.tsx`, `Footer.tsx`, `Index.tsx`, `index.html`, `index.css`
- **Assets**: Copy uploaded `DAM_Logo_Definitivo.png` → `src/assets/dam-logo.png`
- No new dependencies required

