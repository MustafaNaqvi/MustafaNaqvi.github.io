import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '16px 0',
      background: scrolled ? 'rgba(15, 15, 15, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a href="#" style={{
          fontSize: '18px',
          fontWeight: 700,
          color: 'var(--text)',
        }}>
          Mustafa<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#work" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            Work
          </a>
          <a href="#about" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            About
          </a>
          <a href="#experience" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            Experience
          </a>
          <a 
            href="https://drive.google.com/file/d/126JK5nhnlid-hDIT9NL61c0U4jNtD1fm/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary hide-mobile"
            style={{ padding: '10px 18px' }}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
