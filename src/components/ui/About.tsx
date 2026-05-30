/**
 * About Section
 * Two-column layout: section number on left, content on right
 */
function About() {
  return (
    <section 
      id="about" 
      className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-8 mb-16">
          <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-[var(--accent)] opacity-50 section-number">
            01
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl pt-4 section-heading">
            Who I Am
          </h2>
        </div>

        <div className="section-line" />

        <div className="space-y-6 text-[var(--muted-foreground)] text-base md:text-lg leading-relaxed max-w-3xl">
          <p className="section-body">
            Passionate about building modern websites and 
            digital experiences. Currently focused on web 
            development, UI design, and creating projects 
            that solve real-world problems.
          </p>

          <p className="section-body">
            A high school student and graduate of Türkiye 
            Technology Foundation — driven by curiosity, 
            discipline, and a relentless desire to build 
            things that matter.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
