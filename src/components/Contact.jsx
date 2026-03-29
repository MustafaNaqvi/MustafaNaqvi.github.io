import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:mustafa-naqvi@outlook.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
  }

  const contactLinks = [
    { icon: '📧', label: 'Email', value: 'mustafa-naqvi@outlook.com', href: 'mailto:mustafa-naqvi@outlook.com' },
    { icon: '📱', label: 'Phone', value: '+92 312 589 4810', href: 'tel:+923125894810' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/mustafa-naqvi', href: 'https://linkedin.com/in/mustafa-naqvi' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/mustafanaqvi', href: 'https://github.com/mustafanaqvi' },
  ]

  return (
    <section id="contact" className="section" style={{ background: 'var(--p)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="code-comment">// get_in_touch</span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 600,
            color: '#fff',
            marginTop: '12px',
          }}>
            Let's <span style={{ color: 'var(--gold)' }}>Build Something</span>
          </h2>
          <p style={{ color: 'var(--td)', marginTop: '12px', fontSize: '15px', maxWidth: '500px', margin: '12px auto 0' }}>
            Open to remote roles, relocation, and backend-heavy game development opportunities
          </p>
        </div>

        {/* Contact Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {/* Contact Form */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '20px' }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--mono)',
                  fontSize: '12px',
                  color: 'var(--tm)',
                  marginBottom: '6px',
                }}>
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="input"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--mono)',
                  fontSize: '12px',
                  color: 'var(--tm)',
                  marginBottom: '6px',
                }}>
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="input"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--mono)',
                  fontSize: '12px',
                  color: 'var(--tm)',
                  marginBottom: '6px',
                }}>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="input"
                  style={{ resize: 'vertical', minHeight: '120px' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '20px' }}>
              Contact Info
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card"
                  style={{
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ fontSize: '24px' }}>{link.icon}</span>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--tm)', marginBottom: '2px' }}>{link.label}</div>
                    <div style={{ fontSize: '14px', color: 'var(--blue)' }}>{link.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Location & Availability */}
            <div className="card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '24px' }}>📍</span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: '#fff' }}>Islamabad, Pakistan</div>
                  <div style={{ fontSize: '12px', color: 'var(--tm)' }}>PKT (UTC+5)</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
              }}>
                <span className="tag" style={{ background: 'rgba(106,153,85,0.15)', color: 'var(--green)', borderColor: 'var(--green)' }}>
                  ✓ Remote Work
                </span>
                <span className="tag" style={{ background: 'rgba(106,153,85,0.15)', color: 'var(--green)', borderColor: 'var(--green)' }}>
                  ✓ Relocation
                </span>
                <span className="tag" style={{ background: 'rgba(106,153,85,0.15)', color: 'var(--green)', borderColor: 'var(--green)' }}>
                  ✓ Full-time
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
