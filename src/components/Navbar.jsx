import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the last section whose top has passed 40% of the viewport;
  // at the very bottom of the page, the final section wins.
  useEffect(() => {
    const update = () => {
      const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean);
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = '';
      if (atBottom && sections.length) {
        current = `#${sections[sections.length - 1].id}`;
      } else {
        for (const s of sections) {
          if (s.getBoundingClientRect().top <= window.innerHeight * 0.4) current = `#${s.id}`;
        }
      }
      setActive(current);
    };
    // Four rect reads per scroll event is cheap; React skips re-renders when the value is unchanged.
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // Exponential ease-out
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.1], // Spring-like cubic-bezier
        when: "beforeChildren",
        staggerChildren: 0.05,
      }
    }
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: -15,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 350, damping: 24 }
    }
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-[#09090B]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center relative z-[101]">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-white tracking-tight">
          Mustafa<span className="text-amber-500">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className={`relative py-1 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-amber-500 after:transition-transform after:duration-300 after:ease-out ${
                  isActive ? 'text-white after:scale-x-100' : 'text-zinc-400 hover:text-white after:scale-x-0'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a 
            href="https://drive.google.com/file/d/126JK5nhnlid-hDIT9NL61c0U4jNtD1fm/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-zinc-900 border border-white/10 rounded-lg text-sm font-semibold text-white hover:border-amber-500/50 hover:text-amber-500 transition-all"
          >
            Resume
          </a>
        </div>

        {/* Hamburger button (Mobile only) */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 space-y-1.5 group relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] origin-center ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ease-in-out ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] origin-center ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-0 z-[100] bg-zinc-950/95 backdrop-blur-md border-b border-white/10 pt-24 pb-8 px-6 md:hidden flex flex-col shadow-2xl h-fit max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col w-full gap-2 mt-4">
              {navLinks.map((link) => (
                <motion.a 
                  key={link.name}
                  href={link.href} 
                  onClick={handleLinkClick}
                  variants={linkVariants}
                  aria-current={active === link.href ? 'location' : undefined}
                  className={`w-full text-left text-2xl font-bold py-4 border-b border-white/5 hover:text-amber-500 transition-colors ${
                    active === link.href ? 'text-amber-500' : 'text-zinc-300'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                href="https://drive.google.com/file/d/126JK5nhnlid-hDIT9NL61c0U4jNtD1fm/view"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                variants={linkVariants}
                className="mt-8 w-full flex items-center justify-between px-6 py-4 bg-amber-500 hover:bg-amber-600 text-[#09090B] text-xl font-bold rounded-xl transition-colors"
              >
                <span>View Resume</span>
                <ArrowRight className="h-6 w-6" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
