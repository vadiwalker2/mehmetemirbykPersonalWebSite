/**
 * Timeline Section
 * Vertical timeline with 4 placeholder entries
 * Left-aligned line running through all entries
 */

// Timeline entry data
const timelineEntries = [
  {
    year: '2018',
    title: 'Discovered Programming',
    description: 'Wrote my first lines of code and discovered a deep passion for technology and building things from scratch.',
  },
  {
    year: '2020',
    title: 'Developed My First Video Game',
    description: 'Turned ideas into reality by building and publishing my first game — proof that imagination and code are a powerful combination.',
  },
  {
    year: '2022',
    title: 'Began Building Websites',
    description: 'Discovered web development and started creating interactive digital experiences that live on the internet.',
  },
  {
    year: '2024',
    title: 'Founded BlackFrame',
    description: 'Created a platform dedicated to productivity, discipline, and personal growth — built for people who want to take control of their lives.',
  },
]

function Timeline() {
  return (
    <section 
      id="timeline" 
      className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 bg-[var(--muted)] timeline-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-start gap-8 mb-16 md:mb-24">
          <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-[var(--accent)] opacity-50 section-number">
            02
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl pt-4 section-heading">
            How I Got Here
          </h2>
        </div>

        {/* Timeline entries */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical line */}
          <div 
            id="timeline-line"
            className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]"
            style={{ transformOrigin: 'top center', height: '100%' }}
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-16">
            {timelineEntries.map((entry, index) => (
              <div key={index} className="relative timeline-item">
                {/* Dot on the line */}
                <div
                  className="timeline-dot"
                  style={{
                    position: 'absolute',
                    left: '-52px',
                    top: '6px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#1e2a3a',
                    border: '2px solid #2d6a4f',
                    display: 'block',
                    flexShrink: 0,
                    zIndex: 2,
                  }}
                  aria-hidden="true"
                />

                {/* Entry content */}
                <div>
                  <span className="font-serif text-sm md:text-base text-[var(--accent)] tracking-widest">
                    {entry.year}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl mt-2 mb-3">
                    {entry.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-base leading-relaxed max-w-2xl">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
