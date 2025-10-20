# Design Guidelines - Quiz de Vendas Panetone Gourmet

## Design Approach
**Reference-Based Approach** - Replicating the exact visual style from the provided screenshots. This is a conversion-focused quiz funnel that prioritizes clarity, emotional engagement, and mobile-first design.

## Color Palette

### Light Mode (Primary)
- **Background**: Pure white (0 0% 100%)
- **Primary Brand**: Warm gold/yellow (45 95% 50%)
- **Text Primary**: Deep charcoal (0 0% 15%)
- **Text Secondary**: Medium gray (0 0% 45%)
- **Accent**: Soft peach/coral for highlights (25 85% 65%)
- **Success/Progress**: Green (120 60% 50%)

### Button States
- **Primary CTA**: Solid gold background with white text
- **Secondary**: White background with gold border (outline style)
- **Option Buttons**: White cards with subtle shadow, gold border on selection

## Typography

**Font Family**: Use Google Fonts - 'Poppins' (primary) and 'Inter' (secondary)

- **Hero/Headings**: Poppins Bold, 28-36px mobile, 42-56px desktop
- **Question Text**: Poppins SemiBold, 24-28px
- **Body/Options**: Inter Regular, 16-18px
- **Button Text**: Poppins SemiBold, 16-18px
- **Logo Text**: Poppins Bold, 20-24px

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16 (p-4, p-6, p-8, m-12, etc.)

- **Container**: max-w-md for quiz content (mobile-first, single column)
- **Vertical Rhythm**: Consistent py-8 to py-16 between sections
- **Card Padding**: p-6 to p-8 for option cards
- **Button Spacing**: my-4 to my-6 between action buttons

## Component Library

### A. Landing/Welcome Screen
- Full-height viewport with centered content
- Logo at top (Panettone Gourmet with chef hat icon)
- Product image (panetone) as hero visual
- Headline + subheadline centered
- Single prominent CTA button
- Clean white background

### B. Quiz Question Screens
- Progress bar at top (percentage + visual indicator)
- Question number indicator ("Pergunta 1 de 7")
- Large, clear question text
- Option cards in vertical stack (not grid)
- Each option: emoji + text label in white rounded cards
- Subtle shadow on cards (shadow-sm)
- Gold border on hover/selection

### C. Progress Indicator
- Thin progress bar (h-2) at top of screen
- Percentage text displayed prominently
- Smooth animated transitions between steps

### D. Result/Slider Screen
- Interactive slider component
- Three states: Baixo / Médio / Alto
- Visual feedback on slider position
- Current selection highlighted in gold
- CTA button below slider

### E. Final Offer Screen
- Product visual at top
- Value proposition text
- Pricing/offer details
- Dual CTA buttons (primary + secondary)
- Trust elements (testimonials, guarantees)

### F. Navigation & Controls
- Back button on quiz screens (top-left)
- Skip option where appropriate
- Smooth page transitions (fade/slide)

## Images

### Hero Product Image
- **Placement**: Landing screen center, above CTA
- **Description**: High-quality photo of artisan panetone in elegant packaging, warm lighting, appetizing presentation
- **Size**: Medium (300-400px width on mobile)

### Question Emojis
- Use native emoji characters in option buttons
- Size: 24-32px, centered above text

### Logo
- Text-based logo: "Panettone Gourmet" with chef hat icon
- Positioned top-center on all screens
- SVG or icon font for chef hat

## Interaction Patterns

### Quiz Flow
1. **Landing** → Single CTA click
2. **Question Screens** → Select option → Auto-advance or Next button
3. **Progress Updates** → Smooth bar animation
4. **Results** → Interactive slider manipulation
5. **Final CTA** → Conversion action

### Button Behavior
- Primary buttons: Gold background, lift on hover (shadow increase)
- Option cards: Border highlight + subtle scale on selection
- No complex animations - keep it smooth and fast

### Transitions
- Screen changes: 300ms fade
- Option selection: Instant visual feedback
- Progress bar: Smooth width animation (500ms)

## Mobile-First Considerations
- All screens optimized for 375px-425px width
- Single column layout throughout
- Large touch targets (min 48px height)
- Thumb-friendly button placement (bottom third)
- Generous padding (px-6 minimum)

## Accessibility & UX
- High contrast text (WCAG AA minimum)
- Clear visual hierarchy on every screen
- Option cards: visible focus states
- Progress indicator always visible
- Clear "back" navigation option

## Key Design Principles
1. **Clarity First**: One question at a time, minimal distractions
2. **Emotional Connection**: Emojis and warm colors create friendly atmosphere
3. **Progress Transparency**: User always knows where they are
4. **Conversion Focus**: Every screen leads naturally to the next action
5. **Mobile Perfection**: Design and test mobile-first, scale up gracefully