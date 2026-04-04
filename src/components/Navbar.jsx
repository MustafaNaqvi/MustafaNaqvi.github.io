import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking a link
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '16px 0',
      background: scrolled || menuOpen ? 'rgba(15, 15, 15, 0.95)' : 'transparent',
      backdropFilter: scrolled || menuOpen ? 'blur(10px)' : 'none',
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
          zIndex: 101,
        }}>
          Mustafa<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#work" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            Work
          </a>
          <a href="#about" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            About
          </a>
          <a href="#experience" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            Experience
          </a>
          <a href="#contact" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            Contact
          </a>
          <a 
            href="https://drive.google.com/file/d/126JK5nhnlid-hDIT9NL61c0U4jNtD1fm/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ padding: '10px 18px' }}
          >
            Resume
          </a>
        </div>

        {/* Hamburger button */}
        <button 
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            zIndex: 101,
          }}
          aria-label="Toggle menu"
        >
          <div style={{
            width: '24px',
            height: '2px',
            background: 'var(--text)',
            transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <div style={{
            width: '24px',
            height: '2px',
            background: 'var(--text)',
            margin: '6px 0',
            transition: 'all 0.3s',
            opacity: menuOpen ? 0 : 1,
          }} />
          <div style={{
            width: '24px',
            height: '2px',
            background: 'var(--text)',
            transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>

        {/* Mobile menu */}
        <div 
          className="nav-mobile"
          style={{
            display: 'none',
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            background: 'rgba(15, 15, 15, 0.98)',
            backdropFilter: 'blur(10px)',
            padding: '24px',
            flexDirection: 'column',
            gap: '0',
            borderBottom: '1px solid var(--border)',
            transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? 'auto' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <a href="#work" onClick={handleLinkClick} style={{ 
            fontSize: '16px', 
            color: 'var(--text-secondary)',
            padding: '16px 0',
            borderBottom: '1px solid var(--border)',
          }}>
            Work
          </a>
          <a href="#about" onClick={handleLinkClick} style={{ 
            fontSize: '16px', 
            color: 'var(--text-secondary)',
            padding: '16px 0',
            borderBottom: '1px solid var(--border)',
          }}>
            About
          </a>
          <a href="#experience" onClick={handleLinkClick} style={{ 
            fontSize: '16px', 
            color: 'var(--text-secondary)',
            padding: '16px 0',
            borderBottom: '1px solid var(--border)',
          }}>
            Experience
          </a>
          <a href="#contact" onClick={handleLinkClick} style={{ 
            fontSize: '16px', 
            color: 'var(--text-secondary)',
            padding: '16px 0',
            borderBottom: '1px solid var(--border)',
          }}>
            Contact
          </a>
          <a 
            href="https://drive.google.com/file/d/126JK5nhnlid-hDIT9NL61c0U4jNtD1fm/view"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            style={{ 
              fontSize: '16px', 
              color: 'var(--accent)',
              padding: '16px 0',
              fontWeight: 500,
            }}
          >
            Resume →
          </a>
        </div>
      </div>
    </nav>
  )
}
