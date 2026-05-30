import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // SECTION NUMBERS — slide in from left
      gsap.utils.toArray('.section-number').forEach((el) => {
        gsap.from(el as Element, {
          x: -80,
          opacity: 0,
          duration: 1.0,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })

      // SECTION HEADINGS — clip reveal from bottom
      gsap.utils.toArray('.section-heading').forEach((el) => {
        gsap.from(el as Element, {
          y: 60,
          opacity: 0,
          duration: 1.0,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })

      // BODY TEXT — fade up staggered
      gsap.utils.toArray('.section-body').forEach((el) => {
        gsap.from(el as Element, {
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })


      // RESUME EXPERIENCE ITEMS — stagger fade up
      gsap.utils.toArray('.resume-item').forEach((el, i) => {
        gsap.from(el as Element, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      // SKILLS LIST — stagger fade in
      gsap.utils.toArray('.skill-item').forEach((el, i) => {
        gsap.from(el as Element, {
          x: 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: i * 0.08,
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        })
      })

      // VISION SECTION — large text dramatic reveal
      gsap.utils.toArray('.vision-text').forEach((el) => {
        gsap.from(el as Element, {
          y: 80,
          opacity: 0,
          duration: 1.4,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      })

      // CONTACT SECTION — fade up
      gsap.utils.toArray('.contact-item').forEach((el, i) => {
        gsap.from(el as Element, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.12,
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

    })

    return () => ctx.revert()
  }, [])
}
