# Design Guidelines: Modern Business Website

## Design Approach
**Selected Framework:** Modern Business Design System - Drawing inspiration from professional service websites with clean, conversion-focused layouts and contemporary aesthetics.

**Core Principles:**
- Professional yet approachable design language
- Clear visual hierarchy emphasizing CTAs
- Generous whitespace for premium feel
- Subtle, purposeful animations

## Typography System

**Font Stack:**
- Primary: Inter (Google Fonts) - Headings and UI elements
- Secondary: System UI fallback for body text

**Hierarchy:**
- Hero/Page Titles: text-4xl to text-6xl, font-bold
- Section Headings: text-3xl to text-4xl, font-semibold
- Service Items: text-xl, font-medium
- Body Text: text-base to text-lg
- Form Labels: text-sm, font-medium

## Layout & Spacing

**Spacing Units:** Consistently use Tailwind units of 4, 6, 8, 12, 16, and 24 for margins and padding
- Section Padding: py-16 to py-24 (desktop), py-12 (mobile)
- Component Spacing: gap-6 to gap-8 for grids
- Form Field Spacing: space-y-6

**Container Strategy:**
- Max Width: max-w-6xl for content sections
- Full-Width: Navigation and footer span full viewport
- Centered: All content sections mx-auto

## Component Library

### Navigation Bar
- Fixed top position with subtle shadow
- Logo on left, navigation links on right
- Mobile: Hamburger menu (icon from Heroicons)
- Height: h-16 to h-20
- Padding: px-6 to px-8

### Hero Section (Home Page)
- **Image:** No large hero image - keep it clean and focused
- Logo placeholder: Display prominently (w-32 h-32, rounded-full for photo effect)
- Welcome heading and subtitle centered
- Vertical padding: py-20 to py-32

### Services Section (Home Page)
- Flexbox layout with heading on left, "Lift" button on right (md:flex-row)
- Mobile: Stack vertically (flex-col)
- Background: Subtle contrast from hero section
- Padding: py-16

### Services Page
- Services displayed as cards in vertical list
- Each card: Rounded corners (rounded-lg), padding p-6 to p-8
- Hover effect: Subtle lift and shadow increase
- "Order" button positioned prominently at bottom or top-right

### Order Form
- Card-based design: Centered, max-w-2xl
- Form fields: Full-width inputs with rounded borders (rounded-md)
- Input styling: border, px-4, py-3, focus ring
- Labels above inputs
- Submit button: Full-width or centered

### Footer
- Multi-row layout (optional: social links, copyright)
- Padding: py-8 to py-12
- Border-top for visual separation

### Buttons
**Primary CTA Buttons (Lift, Order, Submit):**
- Substantial size: px-8 py-3 to px-10 py-4
- Rounded: rounded-lg
- Font: font-semibold, text-base to text-lg
- Hover: Slight scale transform (scale-105) + shadow increase
- Transition: All properties 200-300ms

**Navigation Buttons:**
- Standard sizing: px-4 py-2
- Hover: Subtle background opacity change

### Form Inputs
- Height: h-12 to h-14 for comfortable touch targets
- Border width: border or border-2
- Focus state: Ring effect (ring-2)
- Placeholder: Lighter text
- Error state: Red border for validation failures

## Interaction Patterns

**Hover Effects:**
- Cards: translateY(-2px) + shadow-lg
- Buttons: scale-105 + shadow-md
- Links: Underline or opacity change

**Transitions:**
- Duration: 200-300ms for most interactions
- Easing: Default ease or ease-in-out

**Animations:** Minimal - keep focus on content
- Page load: Subtle fade-in for content sections
- Form submission: Button loading state (optional spinner)

## Responsive Breakpoints

**Mobile (default):**
- Single column layouts
- Stacked navigation (hamburger menu)
- Full-width buttons
- Form max-width: 100% with px-4

**Tablet (md: 768px):**
- Two-column services grid consideration
- Horizontal navigation visible
- Services section flex-row layout

**Desktop (lg: 1024px):**
- Maximum layout width enforced (max-w-6xl)
- Generous spacing increases
- Multi-column footer

## Special Requirements

**Logo Placeholder:**
- Image tag with descriptive alt text
- Circular crop (rounded-full) for photo appearance
- Consistent sizing across all pages (w-24 h-24 to w-32 h-32)

**Form Validation Styling:**
- Invalid fields: Red border (border-red-500)
- Error messages: Small red text below field (text-sm text-red-600)
- Success state: Green border or checkmark icon

**Icons:**
- Use Heroicons (outline or solid) via CDN
- Mobile menu icon, form validation icons

## Images
**Logo/Photo Placeholder:**
- Location: Top of home page hero section, navbar
- Treatment: Circular crop, centered
- No additional hero images needed - keep design clean and content-focused

This design creates a professional, conversion-optimized website with clear user journeys and a premium feel through thoughtful spacing, typography, and subtle interactions.