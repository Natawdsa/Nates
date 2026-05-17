# UI/UX Skill

## Purpose
Assist with UI/UX design decisions, component implementation, accessibility, and design system usage.

## Capabilities

### Design Review
- Review UI components for consistency with design systems (e.g., Material UI, Tailwind, shadcn/ui)
- Identify accessibility issues (WCAG 2.1 compliance, ARIA attributes, keyboard navigation)
- Suggest improvements for visual hierarchy, spacing, and typography

### Component Implementation
- Build React/Vue/Svelte components from design specs or descriptions
- Apply responsive design patterns (mobile-first, fluid grids, breakpoints)
- Implement animations and transitions using CSS or Framer Motion

### Accessibility
- Audit components for a11y issues using axe-core patterns
- Add ARIA labels, roles, and live regions where needed
- Ensure focus management and keyboard navigation work correctly

### Design Tokens & Theming
- Define and apply design tokens (colors, spacing, typography scales)
- Wire up light/dark mode via CSS custom properties or Tailwind dark: variants
- Maintain consistency across a component library

## Usage

Invoke this skill when you need help with:
- "Review this component for accessibility"
- "Make this layout responsive"
- "Improve the visual design of this page"
- "Add dark mode support"
- "Build a UI component from this description"

## Guidelines
- Prefer semantic HTML elements over generic divs
- Always include focus indicators for interactive elements
- Test color contrast ratios (minimum 4.5:1 for normal text)
- Use relative units (rem, em, %) over fixed pixels where possible
- Keep motion subtle and respect `prefers-reduced-motion`
