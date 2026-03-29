export default function Footer() {
  const links = [
    { label: 'GitHub', href: 'https://github.com/mustafanaqvi' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/mustafa-naqvi' },
    { label: 'Email', href: 'mailto:mustafa-naqvi@outlook.com' },
  ]

  return (
    <footer style={{
      padding: '48px 24px',
      borderTop: '1px solid var(--b2)',
      background: 'var(--bg)',
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}>
        {/* Logo/Name */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '18px',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '8px',
          }}>
            Mustafa <span style={{ color: 'var(--gold)' }}>Naqvi</span>
          </div>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '12px',
            color: 'var(--tm)',
          }}>
            Game Developer · Backend Engineer
          </div>
        </div>

        {/* Links */}
        <div style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '13px',
                color: 'var(--td)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--gold)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--td)'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Stats & Copyright */}
        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'var(--tm)',
        }}>
          <span style={{ color: 'var(--gold)' }}>100M+ Downloads</span>
          <span>•</span>
          <span>6+ Years Experience</span>
          <span>•</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        {/* Built with */}
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'var(--tm)',
        }}>
          Built with React + Vite
        </div>
      </div>
    </footer>
  )
}
