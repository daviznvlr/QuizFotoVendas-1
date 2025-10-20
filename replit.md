# Quiz de Vendas Panetone Gourmet

## Overview

This is a conversion-focused quiz funnel application designed to help potential gourmet panetone sellers discover their sales profile and receive personalized insights. The application guides users through a series of questions about their age, motivation, revenue goals, experience, and concerns, then calculates their sales potential and presents them with a targeted offer.

The application is built as a single-page web application with a mobile-first design approach, emphasizing emotional engagement and clear user experience. It features a multi-step quiz flow with progress tracking, profile calculation, and conversion-optimized offer screens.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- React Query (@tanstack/react-query) for server state management and API communication

**UI Component Strategy**
- shadcn/ui component library (New York style variant) providing pre-built, customizable React components
- Radix UI primitives as the foundation for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Component path aliases configured for clean imports (@/components, @/lib, @/hooks)

**State Management Pattern**
- Local component state (useState) for quiz progression and form data
- Session-based storage approach where each user gets a unique session ID on initialization
- React Query for caching and synchronizing quiz responses with the backend
- Progressive data persistence: quiz answers are saved incrementally as users progress

**Design System**
- Mobile-first responsive design with max-width containers (max-w-md for quiz content)
- Custom color palette focused on warm gold/yellow primary colors and clean white backgrounds
- Typography uses Google Fonts: Poppins (headings, bold elements) and Inter (body text)
- Consistent spacing system using Tailwind's spacing primitives
- Elevation system using hover/active states for interactive elements

### Backend Architecture

**Server Framework**
- Express.js running on Node.js with TypeScript
- ESM (ES Modules) instead of CommonJS
- RESTful API design pattern for quiz-related endpoints
- Development mode uses Vite middleware for hot module replacement

**API Endpoints**
- POST `/api/quiz-session`: Creates a new quiz session and returns a unique session ID
- POST `/api/quiz-responses`: Creates or updates quiz responses (upsert pattern)
- GET `/api/quiz-responses/:sessionId`: Retrieves quiz data for a given session
- GET `/api/profile/:sessionId`: Calculates and returns the user's sales profile based on their responses

**Business Logic**
- Profile calculation algorithm (profile-calculator.ts) scores users based on multiple factors:
  - Age demographics (different scoring for age ranges)
  - Emotional motivation (feeling indicators)
  - Revenue ambition levels
  - Experience with sales or cooking
  - Identified obstacles and concerns
- Scoring system outputs: potential level (Baixo/Médio/Alto), numerical score, and personalized insights array

### Data Storage Solutions

**Current Implementation**
- In-memory storage (MemStorage class) for development and demonstration
- Interface-based storage abstraction (IStorage) allows for easy swapping of storage backends
- Data structure supports all quiz question responses with nullable fields for partial completion

**Schema Design**
- Drizzle ORM configured for PostgreSQL (schema defined but not actively used with current in-memory storage)
- Quiz responses table includes: session ID, demographic data, motivational factors, goals, and concerns
- Schema uses Zod for runtime validation via drizzle-zod integration
- UUID-based primary keys for quiz responses

**Planned Database Integration**
- PostgreSQL database via Neon serverless driver (@neondatabase/serverless)
- Migration support through Drizzle Kit
- Environment-based database URL configuration
- Database schema can be pushed using `npm run db:push`

### External Dependencies

**Third-Party UI Libraries**
- Radix UI: Comprehensive set of accessible component primitives (accordion, dialog, dropdown, select, toast, etc.)
- Lucide React: Icon library for consistent iconography throughout the application
- class-variance-authority (CVA): Utility for creating variant-based component APIs
- tailwind-merge + clsx: For intelligent class name merging in component styling

**Development Tools**
- TypeScript for static type checking across frontend and backend
- Vite plugins for Replit integration (error overlay, cartographer, dev banner)
- ESBuild for production server bundling
- PostCSS with Tailwind CSS and Autoprefixer

**Form & Validation**
- React Hook Form (@hookform/resolvers) for form state management
- Zod for schema validation and type inference
- Drizzle-Zod for database schema to Zod schema conversion

**Date & Utilities**
- date-fns for date manipulation and formatting
- nanoid for generating unique identifiers
- Embla Carousel for any carousel/slideshow functionality

**Session Management**
- connect-pg-simple: PostgreSQL session store for Express (configured for future use)
- Random UUID generation for session identification
- Session data persisted through quiz completion flow