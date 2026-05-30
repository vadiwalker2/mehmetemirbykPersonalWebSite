import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useSectionLines() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.utils.toArray('.section-line').forEach((el) => {
        gsap.to(el as Element, {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })

    })

    return () => ctx.revert()
  }, [])
}
