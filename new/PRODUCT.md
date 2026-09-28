# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience is inferred to be recruiters and engineering hiring teams assessing Muhammad Shahzaib's development work. Prospective clients are a secondary audience.

## Product Purpose

An individual portfolio that introduces Muhammad Shahzaib's full-stack and applied AI work, presents project details, and gives visitors a way to make contact.

## Capabilities and Constraints

- The React/Vite site includes a single-page portfolio and individual project-detail paths at `/work/<project-slug>`.
- The portfolio includes a profile, services, skills, projects with case studies, a demo section, writing, work process, education, and contact details.
- The contact form submits the existing Name, Email, and Message fields to Web3Forms.
- The portfolio guide is a frontend-only assistant that answers from published profile, skills, and project content. A live AI service is not connected.
- Keep the project, section, and navigation anchors, section content, form field names and order, theme toggle, existing links, and contact behavior intact during visual updates.
- Preserve a readable responsive experience and both dark and light themes.
- Project paths remain directly addressable and provide links back to the portfolio and between adjacent projects.
- The production host must serve the SPA entry point for `/work/<project-slug>` requests so direct visits and refreshes work.

## Evidence on Hand

- Current profile, services, skills, project descriptions and case studies, writing, work process, education, and contact information live in `src/data.ts`.
- A local marketplace project preview exists at `public/images/pic-6.png`.
- Some project links, image paths, or video configuration may be replaced with real project materials later. Do not invent testimonials, customers, benchmarks, metrics, or screenshots.
