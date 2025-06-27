# Friends Live - Stage Adaptation Website

## Overview

This is a full-stack web application for promoting a live stage adaptation of the TV series "Friends" by Yoon's English Acting Club. The application features a modern, responsive design with a warm, Friends-themed color scheme and provides information about the show, cast, and ticket purchasing.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom Friends-themed colors and variables
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas for type-safe data validation

### Development Environment
- **Platform**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Hot Reload**: Vite dev server with HMR
- **Build Process**: Vite for frontend, esbuild for backend bundling

## Key Components

### Database Schema
The application uses three main tables:
- **users**: User authentication (id, username, password)
- **contact_messages**: Contact form submissions (id, name, email, message, created_at)
- **cast_members**: Cast information (id, character_name, actor_name, quote, image_url)

### API Endpoints
- `GET /api/cast` - Retrieve all cast members
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve all contact messages (admin)

### Frontend Pages & Components
- **Single Page Application** with smooth scrolling navigation
- **Hero Section**: Main banner with show details and call-to-action
- **Countdown Timer**: Real-time countdown to show date
- **Cast Section**: Dynamic cast member showcase with photos and quotes
- **Quote Generator**: Interactive quote display from cast members
- **Contact Form**: Form submission with validation and success feedback
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Storage Layer
- **Production**: PostgreSQL database via Neon Database
- **Development**: In-memory storage class for rapid prototyping
- **Interface**: IStorage interface for flexible storage implementations

## Data Flow

1. **Client Request**: User interacts with React components
2. **State Management**: TanStack Query manages API calls and caching
3. **API Layer**: Express.js routes handle HTTP requests
4. **Validation**: Zod schemas validate incoming data
5. **Storage**: Drizzle ORM manages database operations
6. **Response**: JSON responses sent back to client
7. **UI Update**: React components re-render with new data

## External Dependencies

### Core Libraries
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling and validation
- **@hookform/resolvers**: Zod integration for forms

### UI Framework
- **@radix-ui/react-***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **vite**: Frontend build tool and dev server

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Assets**: Frontend assets served by Express in production

### Environment Configuration
- **Development**: `npm run dev` - runs tsx with hot reload
- **Production**: `npm run build && npm run start` - builds and serves optimized bundles
- **Database**: Drizzle migrations with `npm run db:push`

### Hosting Platform
- **Platform**: Replit with autoscale deployment
- **Port Configuration**: Internal port 5000, external port 80
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

## Changelog

```
Changelog:
- June 27, 2025: Converted to pure static website
  - Removed all backend dependencies (Express, database, API routes)
  - Moved cast data to static files in client/src/data/
  - Updated contact form to use Formspree external service
  - All images now stored locally for easy replacement
  - Updated build process for static deployment
- June 17, 2025: Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```