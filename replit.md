# Himanshu Suthar Portfolio

## Overview

A personal portfolio website for Himanshu Suthar, showcasing skills, projects, and contact information. Built as a full-stack TypeScript application with a React frontend and Express backend, featuring a premium dark theme with crimson red accents.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS with custom dark theme (graphite background, crimson accents)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for hero, scroll reveals, and background effects
- **State Management**: TanStack React Query for server state and data fetching
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod schemas
- **Development**: Vite dev server with HMR, proxied through Express

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Migrations**: Drizzle Kit for schema management (`npm run db:push`)
- **Tables**: skills, projects, contactMessages

### API Structure
All API routes are defined in `shared/routes.ts`:
- `GET /api/skills` - Fetch all skills
- `GET /api/projects` - Fetch all projects  
- `POST /api/contact` - Submit contact form message

### Build System
- **Client Build**: Vite builds React app to `dist/public`
- **Server Build**: esbuild bundles server to `dist/index.cjs`
- **Shared Code**: `shared/` directory contains schemas and route definitions used by both client and server

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/`

## External Dependencies

### Database
- PostgreSQL (required, connection via `DATABASE_URL` environment variable)
- Drizzle ORM for type-safe database queries
- connect-pg-simple for session storage

### UI Libraries
- shadcn/ui components (Radix UI based)
- Framer Motion for animations
- Lucide React for icons
- Tailwind CSS for styling

### Form Handling
- React Hook Form
- Zod for schema validation
- @hookform/resolvers for Zod integration

### Fonts
- Inter (body text)
- Playfair Display (headings)
- Outfit (display font)
- Loaded via Google Fonts

### Static Assets
- Logo: `@assets/Asset_3_1769014249866.png`