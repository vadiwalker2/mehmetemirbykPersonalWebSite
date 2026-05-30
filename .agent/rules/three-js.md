---
trigger: always_on
---

# Three.js / R3F Skill

When working on 3D components:
- Always use R3F (React Three Fiber) + Drei, never vanilla Three.js
- Keep each 3D object in its own component file in /src/components/3d/
- Shaders go in /src/shaders/ as .vert and .frag files, imported via vite-plugin-glsl
- Always pass uTime uniform for animated shaders, updated in useFrame
- Use Drei's Environment for lighting unless custom lighting is specified
- Use Drei's PerspectiveCamera with manual positioning
- Canvas must have style: position absolute, top 0, left 0,
  width 100%, height 100%, pointerEvents none
- Always clean up event listeners and animations on unmount
- Hero 3D text: use Drei's Text3D with a refined serif or display font
- Hero scene: deep navy background, subtle emerald rim light,
  off-white text material with slight metallic sheen