import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useTimelineAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      const line = document.querySelector('#timeline-line')
      const dots = document.querySelectorAll('.timeline-dot')
      const section = document.querySelector('.timeline-section')

      if (!line || !section) return

      // Set line to zero height initially
      gsap.set(line, { scaleY: 0, transformOrigin: 'top center' })

      // Draw the line as you scroll through the section
      gsap.to(line, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: 1,
        },
      })

      // Light up each dot as the line reaches it
      dots.forEach((dot) => {
        gsap.to(dot, {
          boxShadow: '0 0 12px #c9a84c',
          borderColor: '#c9a84c',
          backgroundColor: '#c9a84c',
          scale: 1.4,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: dot,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      // Timeline items slide in as line reaches them
      const items = document.querySelectorAll('.timeline-item')
      items.forEach((item) => {
        gsap.from(item, {
          x: -50,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        })
      })

    })

    return () => ctx.revert()
  }, [])
}
