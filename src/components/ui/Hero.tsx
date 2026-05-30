import HeroScene from '../3d/HeroScene'

/**
 * Hero Section
 * Full viewport height with canvas placeholder for future Three.js integration
 * Contains name, tagline, and one-liner centered on screen
 */
function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex items-center justify-center"
    >
      {/* Canvas placeholder for Three.js - to be added separately */}
      <div 
        id="hero-canvas"
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        aria-hidden="true"
      >
        <HeroScene />
      </div>

      {/* Text overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        pointerEvents: 'none',
      }}>
        <div style={{ opacity: 0 }}>
          Mehmet Emir Bıyık
        </div>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.85rem',
          letterSpacing: '0.3em',
          color: '#c9a84c',
          marginTop: '180px',
          textTransform: 'uppercase',
        }}>
          Founder of Blackframe
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          color: '#8a8a7a',
          marginTop: '12px',
          textTransform: 'uppercase',
        }}>
          Web Designer & Mid-Level Programmer
        </p>
      </div>
    </section>
  )
}

export default Hero
