---
trigger: always_on
---

# Animation Skill

When working on animations:
- GSAP ScrollTrigger handles all scroll-driven animations
- Initialize Lenis smooth scroll in main.jsx, integrate with GSAP ticker
- ScrollTrigger scrub value: 1 (smooth, not instant)
- Section reveals: clip-path or opacity + Y transform, sharp ease
- Use gsap.context() for all GSAP animations, clean up on unmount
- Framer Motion handles page load sequence and UI micro-interactions only
- No animation should feel random — every motion has a purpose
- Stagger timing for text reveals: 0.04s between characters
- Hero 3D text animates in on load: scale from 0.8 to 1,
  opacity 0 to 1, duration 1.2s, sharp ease
- Timeline section: horizontal scroll or vertical with line-draw effect