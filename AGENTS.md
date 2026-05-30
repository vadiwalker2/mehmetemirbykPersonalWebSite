# Personal Portfolio — Agent Rules

## Project Identity
This is a personal portfolio site for a Designer/Creative.
Aesthetic: Dark & rich (deep navy, emerald tones), refined luxury,
quiet confidence. Sharp & confident motion. Medium content depth.

## Tech Stack
- React + Vite
- R3F (React Three Fiber) + Drei
- GSAP + ScrollTrigger
- Framer Motion
- Lenis (smooth scroll)
- Tailwind CSS
- Custom GLSL shaders

## File Structure Rules
- One component per file, max 150 lines per file
- All GLSL shaders live in /src/shaders/ only, never inline
- 3D components live in /src/components/3d/
- UI components live in /src/components/ui/
- Hooks live in /src/hooks/
- Never put logic in App.jsx — imports and layout only

## Coding Rules
- Never refactor existing code unless explicitly asked
- Never change files outside the scope of the current task
- Always ask before restructuring a component
- Use CSS variables for all colors — never hardcode hex values
- All animations use GSAP ScrollTrigger unless stated otherwise
- Framer Motion handles UI transitions only (not 3D)
- R3F canvas must never block scroll or UI layers
- Always set z-index and pointer-events correctly on canvas

## Design Rules
- Typography: refined, understated, luxury feel
- Font pairing: one distinctive display font + one clean body font
- Color palette: deep navy, emerald, off-white, subtle gold accent
- No generic purple gradients, no Inter font, no cookie-cutter layouts
- Motion: sharp, snappy, intentional — no lazy ease-in-out everywhere
- Scroll-driven animations only — no autoplay loops unless subtle
- Every section must have visual breathing room — generous spacing

## Canvas Placeholder Rule
Hero section contains a div with id="hero-canvas" — this is
reserved for the R3F scene. Do not add any content inside it.