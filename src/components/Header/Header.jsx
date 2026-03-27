import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo-big-travel.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const regions = [
    { name: 'Purwokerto', path: '/purwokerto' },
    { name: 'Purbalingga', path: '/purbalingga' },
    { name: 'Banjarnegara', path: '/banjarnegara' },
    { name: 'Cilacap', path: '/cilacap' },
    { name: 'Kebumen', path: '/kebumen' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="container header-container">

        <div className="logo-container">
          <Link to="/">
            <img src={logoImg} alt="Logo BIG Travel" className="logo-img" />
          </Link>
          <div className="logo-text-wrapper">
            <span className="logo-title">BIG Travel</span>
            <div className="logo-subtitle">
              {regions.map((region, index) => {
                const isActive = currentPath === region.path || (currentPath === '/' && region.path === '/purwokerto');
                return (
                  <React.Fragment key={region.name}>
                    <Link 
                      to={region.path} 
                      className={`region-link ${isActive ? 'active-region' : ''}`}
                    >
                      {region.name}
                    </Link>
                    {index < regions.length - 1 && <span className="region-separator"> • </span>}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        <nav className={`nav-container ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li><button className="nav-link" onClick={() => scrollTo('program')}>Benefit</button></li>
            <li><button className="nav-link" onClick={() => scrollTo('hotel')}>Hotel</button></li>
            <li><button className="nav-link" onClick={() => scrollTo('benefit')}>Fasilitas</button></li>
            <li><button className="nav-link" onClick={() => scrollTo('testimoni')}>Testimoni</button></li>
            <li className="mobile-cta-wrapper">
              <button className="btn btn-primary cta-button mobile-cta" onClick={() => scrollTo('daftar')}>
                Daftar Sekarang
              </button>
            </li>
          </ul>
        </nav>

        <button className="btn btn-primary cta-button desktop-cta" onClick={() => scrollTo('daftar')}>
          Daftar Sekarang
        </button>

        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
