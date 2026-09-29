---
name: Muhammad Shahzaib Portfolio
description: A project-led portfolio for full-stack and applied AI work.
colors:
  ink: "#111512"
  ink-surface: "#1a201b"
  ink-muted: "#242c25"
  ink-text: "#f1f3ee"
  ink-secondary: "#aab3a8"
  ink-border: "#354036"
  mineral-lime: "#c3df8c"
  paper: "#f3f5ef"
  paper-surface: "#fbfcf8"
  paper-muted: "#e8ede4"
  paper-text: "#182019"
  paper-secondary: "#4b574b"
  paper-border: "#d5ded1"
  forest-accent: "#4d6637"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 5vw, 5.25rem)"
    fontWeight: 570
    lineHeight: 0.91
    letterSpacing: "-0.075em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.68
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
rounded:
  field: "0.7rem"
  image: "1rem"
  panel: "1.4rem"
  pill: "999px"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "2rem"
  section: "clamp(6.5rem, 11vw, 10rem)"
components:
  button-primary:
    backgroundColor: "{colors.mineral-lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 0.8rem 0.7rem 1.2rem"
  button-secondary:
    backgroundColor: "{colors.ink-surface}"
    textColor: "{colors.ink-text}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 0.8rem 0.7rem 1.2rem"
  contact-field:
    backgroundColor: "{colors.ink-surface}"
    textColor: "{colors.ink-text}"
    rounded: "{rounded.field}"
    padding: "0.85rem 1rem"
---

# Design System: Muhammad Shahzaib Portfolio

## Overview

**Creative North Star: "The Working Artifact"**

The portfolio gives real project imagery the first word, then supports it with concise, scannable context. Its visual language pairs ink-green surfaces and mineral-lime accents with spacious typography and carefully framed screenshots. The tone is direct and technically grounded, without invented proof or decorative interface chrome.

The site supports dark and light modes across four selectable colorways: Forest, Ocean, Plum, and Amber. Each colorway assigns semantic roles for backgrounds, raised surfaces, borders, text, and primary actions so the visual system follows the selection across every section.

**Key Characteristics:**
- Project-first compositions with a moderate-size alternating gallery immediately after the hero, followed by a concise work-experience timeline.
- Dedicated, directly addressable detail pages for each project, with clear return and adjacent-project navigation.
- A compact portfolio guide that answers from existing project and profile content; it is a local frontend preview, not a connected AI service.
- One restrained, high-contrast accent per selected colorway, used consistently across the whole page.
- Compact page container, restrained section rhythm, and responsive asymmetric grids.
- Real local previews only; unavailable project imagery uses a plain fallback.

## Colors

The Forest colorway preserves the original green-charcoal and pale mineral accents in dark mode, with pale green surfaces and a deeper forest accent in light mode. Ocean, Plum, and Amber offer parallel dark and light ramps without changing semantic token roles.

### Primary
- **Mineral Lime** (#c3df8c): Dark-theme primary actions and emphasis.
- **Forest Accent** (#4d6637): Light-theme primary actions and emphasis.
- **Ocean** (#91bfe3 dark / #2d607e light): Blue-gray accent.
- **Plum** (#c5a3dc dark / #704b86 light): Muted violet accent.
- **Amber** (#e1bf78 dark / #77551d light): Warm gold accent.

### Neutral
- **Ink** (#111512): Dark-theme page background.
- **Ink Surface** (#1a201b): Dark-theme raised surfaces and cards.
- **Ink Muted** (#242c25): Dark-theme muted fields and surfaces.
- **Ink Text** (#f1f3ee): Dark-theme primary text.
- **Ink Secondary** (#aab3a8): Dark-theme secondary text.
- **Ink Border** (#354036): Dark-theme boundaries and dividers.
- **Paper** (#f3f5ef): Light-theme page background.
- **Paper Surface** (#fbfcf8): Light-theme raised surfaces and fields.
- **Paper Muted** (#e8ede4): Light-theme muted surfaces.
- **Paper Text** (#182019): Light-theme primary text.
- **Paper Secondary** (#4b574b): Light-theme secondary text.
- **Paper Border** (#d5ded1): Light-theme boundaries and dividers.

## Typography

**Display Font:** Geist (with system sans-serif fallback)  
**Body Font:** Geist (with system sans-serif fallback)  
**Label/Mono Font:** JetBrains Mono (with system monospace fallback)

**Character:** Geist keeps large headings contemporary and compact, while JetBrains Mono is reserved for technical role labels and stack details.

### Hierarchy
- **Display** (570, clamp(3rem, 5vw, 5.25rem), 0.91): Hero name, with balanced wrapping.
- **Headline** (580, clamp(1.8rem, 3.5vw, 3rem), 0.99): Section titles.
- **Title** (550-600, 0.95-2.5rem, 1.1-1.35): Project and content titles.
- **Body** (400, 0.84-1.2rem, 1.55-1.7): Descriptions and supporting copy.
- **Label** (400-500, 0.67-0.72rem): Technical labels and project stack details.

## Layout

The main content sits in a centered container capped at 76rem, with gutters that grow from 1.25rem on small screens to 5vw on wide screens. The hero uses an asymmetric text-and-art split with portrait-framed project imagery on the active page theme, then collapses to a single column below 768px. Project stories alternate image and text sides on desktop, then stack image-first on narrow screens. A concise vertical timeline follows the project gallery. Skills use compact icon-led category rows with the video centered below them; writing uses a restrained two-column desktop layout. Services and process use four columns that reduce to two or one on mobile. Section spacing is intentionally compact, with the project gallery and writing sections tighter than the hero and contact areas. Scroll reveals are one-shot and respect reduced-motion preferences.

## Elevation & Depth

Depth is used sparingly to distinguish the real project artwork and key interactive surfaces. Large panels use soft, background-tinted shadows with an inset highlight; borders and tonal changes carry the rest of the hierarchy. The floating navigation is the only persistent blurred surface.

### Shadow Vocabulary
- **Project surface** (`0 22px 70px color-mix(in srgb, var(--color-background) 25%, transparent)`): Separates project stories from the page.
- **Hero artwork** (`0 34px 90px color-mix(in srgb, var(--color-background) 50%, transparent)`): Gives the featured screenshot physical depth.
- **Navigation** (`0 14px 40px color-mix(in srgb, var(--color-background) 32%, transparent)`): Lifts the floating navigation above the page.

## Shapes

Interactive buttons and circular icon controls use pill or circle shapes. Fields use a 0.7rem radius, images use 0.9-1rem corners, and large framed panels use approximately 1.4-1.5rem corners. Dividers remain subtle and structural rather than decorative.

## Components

### Buttons
- **Shape:** Pill-shaped (999px).
- **Primary:** Theme accent with high-contrast foreground; arrow or action icon sits in an inset circular field.
- **Hover / Focus:** Background or border shifts smoothly; keyboard focus uses the accent outline.
- **Secondary:** Surface fill with a border that takes on the accent on hover.

### Cards / Containers
- **Corner Style:** Approximately 1.4rem for project stories and large demo panels.
- **Background:** Theme card surface; artwork shells use muted tonal surfaces.
- **Shadow Strategy:** Soft, background-tinted shadows are limited to project and hero-art surfaces.
- **Border:** One subdued border defines the panel edge.
- **Internal Padding:** Fluid padding from roughly 1.35rem to 2.5rem for project content.

### Inputs / Fields
- **Style:** Theme input surface, subdued border, 0.7rem corners, and explicit labels above fields.
- **Focus:** Accent border and a low-opacity accent ring.
- **Error / Disabled:** Inline form status; submit action is disabled during submission.

### Navigation
- A detached, rounded navigation surface uses a single desktop row with only the primary Work, Experience, Skills, and Contact links, a palette selector, a light/dark control, and a resume download action. The active section is indicated while scrolling. On narrow screens, the links and resume action move into a full-width expandable menu; both theme controls remain visible.

### Project Artwork
- Genuine project screenshots are presented in a rounded frame, with a themed title-and-category fallback when an asset is unavailable. Project walkthrough video belongs to its project detail, not the home-page gallery, to protect first-load performance. The hero portrait is preloaded and served as a compressed JPEG. A subdued OGL particle layer spans the non-hero sections and follows the current theme; the hero's opaque theme surface keeps that layer out of the hero. The supplied OGL MicroSlats effect remains beneath the hero alone with a transparent background and reads the selected accent. Both effects follow colorway changes, respect reduced motion, and pause when offscreen.

### Project Details and Portfolio Guide
- Project gallery links open dedicated `/work/<slug>` detail pages. Each page preserves the project's existing overview, challenge, approach, highlights, and stack, then links back to the work section and neighboring projects.
- Project detail pages use a compact title and action header, centered artwork, and a readable editorial case-study layout without nested card treatments.
- The floating guide is a local, data-backed portfolio helper. Its answers and suggested prompts use the portfolio's existing content; do not present it as a live AI chat service.

## Do's and Don'ts

### Do:
- **Do** keep the selected palette's accent consistent between actions, focus states, and emphasis.
- **Do** lead with genuine project work and preserve each project's own case-study details.
- **Do** keep labels and descriptions readable in dark and light themes.
- **Do** keep the hero motion bounded and disable it for reduced-motion preferences.

### Don't:
- **Don't** fabricate testimonials, client marks, performance metrics, or project screenshots.
- **Don't** add section-number labels, decorative text overlays on imagery, or fake product UI.
- **Don't** introduce a competing accent color or a new visual theme within an individual section.
