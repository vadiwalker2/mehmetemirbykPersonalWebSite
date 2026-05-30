import { useLenis } from './hooks/useLenis'
import { useScrollAnimations } from './hooks/useScrollAnimations'
import { useSplitTextAnimations } from './hooks/useSplitTextAnimations'
import { useTimelineAnimation } from './hooks/useTimelineAnimation'
import { useSectionLines } from './hooks/useSectionLines'
import BackgroundScene from './components/3d/BackgroundScene'
import Hero from './components/ui/Hero'
import About from './components/ui/About'
import Timeline from './components/ui/Timeline'
import Resume from './components/ui/Resume'
import Vision from './components/ui/Vision'
import Contact from './components/ui/Contact'

/**
 * Main App Component
 * Renders all portfolio sections in order
 */
function App() {
  useLenis()
  useScrollAnimations()
  useSplitTextAnimations()
  useTimelineAnimation()
  useSectionLines()
  return (
    <main>
      <BackgroundScene />
      <Hero />
      <About />
      <Timeline />
      <Resume />
      <Vision />
      <Contact />
    </main>
  )
}

export default App
