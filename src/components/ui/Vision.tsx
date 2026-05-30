/**
 * Vision Section
 * Full-width section with large display heading and paragraph
 * Minimal and spacious layout
 */
function Vision() {
  return (
    <section 
      id="vision" 
      className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 bg-[var(--muted)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-8 mb-16">
          <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-[var(--accent)] opacity-50 section-number">
            04
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl pt-4 vision-text">
            Where I&apos;m Going
          </h2>
        </div>

        <div className="section-line" />

        {/* Vision paragraph */}
        <p className="text-[var(--muted-foreground)] text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl vision-text">
          My goal is to build tools that empower people 
          to take control of their time, develop better 
          habits, and achieve meaningful goals. Currently 
          deepening my skills in professional video editing 
          and prompt engineering — always learning, 
          always building.
        </p>
      </div>
    </section>
  )
}

export default Vision
