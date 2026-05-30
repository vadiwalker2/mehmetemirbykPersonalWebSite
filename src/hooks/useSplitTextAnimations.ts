import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { splitTextToChars } from '../utils/splitText'

gsap.registerPlugin(ScrollTrigger)

export function useSplitTextAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Split all section headings into characters
      const headings = document.querySelectorAll('.section-heading')
      
      headings.forEach((heading) => {
        const chars = splitTextToChars(heading)
        
        gsap.from(chars, {
          y: 80,
          opacity: 0,
          rotateX: -90,
          transformOrigin: '0% 50% -50',
          duration: 0.6,
          ease: 'power4.out',
          stagger: 0.04,
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Split vision heading — bigger drama
      const visionHeadings = document.querySelectorAll('.vision-text')
      
      visionHeadings.forEach((el, index) => {
        if (index === 0) {
          const chars = splitTextToChars(el)
          
          gsap.from(chars, {
            y: 100,
            opacity: 0,
            rotateX: -90,
            transformOrigin: '0% 50% -50',
            duration: 0.7,
            ease: 'power4.out',
            stagger: 0.03,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          })
        }
      })

    })

    return () => ctx.revert()
  }, [])
}
