import React, { useState, useEffect } from 'react';
import './Header.css';

interface NavLink {
  id: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: 'story', label: 'Story' },
  { id: 'policy', label: 'Policy' },
  { id: 'about', label: 'About' },
  { id: 'media', label: 'Media' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <a
          href="#hero"
          className="header__logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/olive-logo.svg`}
            alt="O'lion"
            className="header__logo-img"
          />
        </a>
        <div className="header__nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.id);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;
