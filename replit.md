# Professional Portfolio Website

## Overview

This is a professional portfolio website for Pranitha Pothuguntla, a Software Developer and Data Analyst. The application showcases her technical expertise, work experience, and featured projects in an elegant, modern design. Built as a full-stack application with React frontend and Express backend, it demonstrates professional web development capabilities while serving as a personal brand platform.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui components
- **UI Components**: Comprehensive component library using Radix UI primitives for accessibility
- **State Management**: TanStack React Query for server state and React hooks for local state
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for robust server-side development
- **Storage Interface**: Modular storage system with in-memory implementation (MemStorage)
- **API Design**: RESTful API structure with `/api` prefix for clean separation
- **Development**: Hot reload and middleware for request logging and error handling

### Database Schema
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with connection via Neon serverless driver
- **Schema**: User management system with username/password authentication
- **Migrations**: Automated schema management with drizzle-kit

### Design System
- **Color Palette**: Professional dark/light theme with deep charcoal backgrounds and blue accents
- **Typography**: Inter font family for clean, professional appearance
- **Component Library**: Custom implementation based on shadcn/ui design patterns
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Theme Support**: Dynamic light/dark mode with localStorage persistence

### Development Tools
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schemas
- **Code Quality**: ESLint and Prettier for consistent code formatting
- **Build Process**: Separate client and server builds with optimized bundling
- **Asset Management**: Vite-based asset pipeline with proper path resolution

## External Dependencies

### UI and Styling
- **Radix UI**: Complete suite of accessible UI primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Class Variance Authority**: Type-safe variant API for component styling
- **Lucide React**: Icon library for consistent iconography

### State Management and Data Fetching
- **TanStack React Query**: Powerful data synchronization for server state
- **React Hook Form**: Performant forms with validation (@hookform/resolvers)
- **Zod**: Schema validation integrated with Drizzle ORM

### Database and Backend
- **Neon Database**: Serverless PostgreSQL with connection pooling
- **Drizzle ORM**: Type-safe SQL toolkit with schema generation
- **Express Session**: Session management with PostgreSQL store (connect-pg-simple)

### Development and Build Tools
- **Vite**: Fast build tool with React plugin and development server
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for server-side code

### Utility Libraries
- **Date-fns**: Modern date utility library for time formatting
- **CLSX/Tailwind Merge**: Utility for conditional className management
- **Wouter**: Lightweight router for single-page application navigation