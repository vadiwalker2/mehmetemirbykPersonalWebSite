import { useState, type FormEvent, type ChangeEvent } from 'react'

/**
 * Contact Section
 * Simple layout with email, social links, and contact form
 */

// Social links data
const socialLinks = [
  { name: 'Instagram / BlackFrame', url: 'https://www.instagram.com/blackframe.digital/' },
]

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Form submission logic to be implemented
    console.log('Form submitted:', formData)
  }

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-8 mb-16">
          <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-[var(--accent)] opacity-50 section-number">
            05
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl pt-4 section-heading">
            Get In Touch
          </h2>
        </div>

        <div className="section-line" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact info column */}
          <div>
            {/* Email */}
            <div className="mb-12 contact-item">
              <h3 className="font-serif text-xl md:text-2xl mb-4 text-[var(--accent)]">
                Email
              </h3>
              <a 
                href="mailto:mehmetemirbyk@gmail.com" 
                className="text-[var(--foreground)] text-lg md:text-xl hover:text-[var(--accent)] transition-colors"
              >
                mehmetemirbyk@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="contact-item">
              <h3 className="font-serif text-xl md:text-2xl mb-4 text-[var(--accent)]">
                Social
              </h3>
              <ul className="space-y-3">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url}
                      className="text-[var(--muted-foreground)] text-base md:text-lg hover:text-[var(--accent)] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact form column */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 contact-item">
              {/* Name field */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block font-sans text-sm text-[var(--muted-foreground)] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-[var(--border)] py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block font-sans text-sm text-[var(--muted-foreground)] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-[var(--border)] py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message field */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block font-sans text-sm text-[var(--muted-foreground)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-[var(--border)] py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="font-sans text-base md:text-lg px-8 py-4 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--background)] transition-colors mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer / Copyright */}
        <div className="mt-24 pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--muted-foreground)] text-sm text-center">
            &copy; {new Date().getFullYear()} Mehmet Emir Bıyık. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
