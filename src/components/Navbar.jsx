import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
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
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for snappy HUD feel
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

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

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
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-zinc-400 hover:text-amber-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
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
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none group relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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
                  className="w-full text-left text-2xl font-bold text-zinc-300 py-4 border-b border-white/5 hover:text-amber-500 transition-colors"
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
                <span>→</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
