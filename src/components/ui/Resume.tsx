/**
 * Resume / Skills Section
 * Two columns: experience entries (left) and skills list (right)
 * No progress bars or percentage indicators
 */

// Experience data
const experiences = [
  {
    role: 'High School Student',
    company: 'Türkiye Technology Foundation Graduate',
    years: '',
  },
  {
    role: 'Founder & Web Designer',
    company: 'BlackFrame',
    years: '',
  },
  {
    role: 'Independent Web Developer',
    company: 'Freelance',
    years: '',
  },
]

// Skills data - plain text list
const skills = [
  'JavaScript',
  'React',
  'HTML',
  'CSS',
  'UI Design',
  'Responsive Design',
  'Figma',
  'Git',
  'GitHub',
  'Vercel',
  'VS Code',
  'Three.js',
  'Supabase',
  'Framer Motion',
  'Video Editing',
  'Prompt Engineering',
]

function Resume() {
  return (
    <section 
      id="resume" 
      className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-8 mb-16">
          <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-[var(--accent)] opacity-50 section-number">
            03
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl pt-4 section-heading">
            Experience & Skills
          </h2>
        </div>

        <div className="section-line" />

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Experience column */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl mb-8 text-[var(--accent)]">
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-b border-[var(--border)] pb-6 resume-item">
                  <h4 className="font-sans text-lg md:text-xl mb-1">
                    {exp.role}
                  </h4>
                  <p className="text-[var(--muted-foreground)] text-base mb-1">
                    {exp.company}
                  </p>
                  <p className="text-[var(--muted-foreground)] text-sm opacity-75">
                    {exp.years}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills column */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl mb-8 text-[var(--accent)]">
              Skills
            </h3>
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <li 
                  key={index} 
                  className="text-[var(--muted-foreground)] text-base md:text-lg border-b border-[var(--border)] pb-4 skill-item"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
