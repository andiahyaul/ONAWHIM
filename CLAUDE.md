# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

This is a Next.js 14 e-catalog application using the App Router pattern with the following key technologies:

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component system (New York style)
- **TypeScript**: Full TypeScript support
- **Fonts**: Geist Sans and Geist Mono font families

### Code Organization
- `app/` - Next.js App Router pages and layouts
  - `globals.css` - Global styles with CSS custom properties
  - `layout.tsx` - Root layout component
  - `page.tsx` - Homepage component
- `components/` - Reusable React components (via shadcn/ui aliases)
- `lib/` - Utility functions and shared logic
  - `utils.ts` - Contains `cn()` utility for conditional class merging
- `components.json` - shadcn/ui configuration file

### Styling System
- Uses CSS custom properties for theming (light/dark mode support)
- Tailwind CSS with extended color palette based on HSL variables
- Component styling follows shadcn/ui patterns with `cn()` utility
- Dark mode implemented via `class` strategy

### Path Aliases
- `@/components` - Components directory
- `@/lib` - Library/utils directory
- `@/hooks` - React hooks directory

The project follows Next.js App Router conventions and shadcn/ui component patterns for consistent development experience.