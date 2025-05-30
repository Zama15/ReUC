// src/components/Header.jsx
import { useState } from 'react';
import Navigation from './Navigation';
import '../styles/header.css';

const Header = ({ currentLayer, setCurrentLayer }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="container">
        <a href="#" className="logo">REUC Backend</a>
        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <Navigation 
          currentLayer={currentLayer} 
          setCurrentLayer={setCurrentLayer}
          isMenuOpen={isMenuOpen}
          closeMenu={closeMenu}
        />
      </nav>
    </header>
  );
};

export default Header;
