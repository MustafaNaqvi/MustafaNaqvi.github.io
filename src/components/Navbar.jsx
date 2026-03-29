import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(30, 30, 30, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--b2)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, var(--gold) 0%, var(--orange) 100%)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--mono)',
            fontWeight: 700,
            fontSize: '16px',
            color: 'var(--bg)',
          }}>
            MN
          </div>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--tx)', display: 'none' }} className="logo-text">
            Mustafa Naqvi<span style={{ color: 'var(--gold)' }}>.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                padding: '8px 16px',
                background: 'transparent',
                border: 'none',
                borderRadius: '6px',
                fontFamily: 'var(--mono)',
                fontSize: '13px',
                color: 'var(--td)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--p)'
                e.target.style.color = 'var(--tx)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.color = 'var(--td)'
              }}
            >
              {link.label}
            </button>
          ))}
          
          {/* Availability Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginLeft: '16px',
            padding: '8px 16px',
            background: 'rgba(106, 153, 85, 0.1)',
            border: '1px solid rgba(106, 153, 85, 0.3)',
            borderRadius: '20px',
          }}>
            <div className="animate-pulse-dot" style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--green-bright)',
            }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--green-bright)' }}>
              Available
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            padding: '8px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <div style={{ width: '24px', height: '18px', position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: 0,
              width: '100%',
              height: '2px',
              background: 'var(--tx)',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              top: mobileOpen ? '8px' : 0,
              transform: mobileOpen ? 'rotate(45deg)' : 'none',
            }} />
            <span style={{
              position: 'absolute',
              left: 0,
              top: '8px',
              width: '100%',
              height: '2px',
              background: 'var(--tx)',
              borderRadius: '2px',
              opacity: mobileOpen ? 0 : 1,
              transition: 'all 0.3s ease',
            }} />
            <span style={{
              position: 'absolute',
              left: 0,
              width: '100%',
              height: '2px',
              background: 'var(--tx)',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              top: mobileOpen ? '8px' : '16px',
              transform: mobileOpen ? 'rotate(-45deg)' : 'none',
            }} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu" style={{
        display: mobileOpen ? 'flex' : 'none',
        flexDirection: 'column',
        padding: '16px 24px 24px',
        background: 'var(--bg-light)',
        borderTop: '1px solid var(--b2)',
      }}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            style={{
              padding: '12px 0',
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid var(--b2)',
              fontFamily: 'var(--mono)',
              fontSize: '14px',
              color: 'var(--td)',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            {link.label}
          </button>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .logo-text { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
        @media (min-width: 640px) {
          .logo-text { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
