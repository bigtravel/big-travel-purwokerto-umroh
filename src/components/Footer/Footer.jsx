import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo-big-travel.png';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const regions = [
    { name: 'Purwokerto', path: '/purwokerto' },
    { name: 'Purbalingga', path: '/purbalingga' },
    { name: 'Banjarnegara', path: '/banjarnegara' },
    { name: 'Cilacap', path: '/cilacap' },
    { name: 'Kebumen', path: '/kebumen' },
  ];

  return (
    <footer className="footer" id="daftar">
      <div className="container footer-container">
        

        <div className="footer-cta-section">
          <h2 className="footer-title">Jangan Biarkan Kerinduan Menunggu. Kuota Terbatas!</h2>
          <div className="footer-cta-wrap">
            <a href="https://wa.me/62816677408" className="btn btn-primary footer-btn" target="_blank" rel="noreferrer">
              <span className="wa-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </span>
              Konsultasi Sekarang
            </a>
            <p className="footer-cta-subtext">Klik untuk konsultasi dengan Admin kami (0816 677 408)</p>
          </div>
        </div>

        <div className="footer-divider"></div>


        <div className="footer-info-section">
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <img src={logoImg} alt="Logo BIG Travel" className="footer-logo-img" />
              <div className="footer-logo-text">
                <span className="footer-logo-title">BIG Travel</span>
                <div className="footer-logo-subtitle">
                  {regions.map((region, index) => {
                    const isActive = currentPath === region.path || (currentPath === '/' && region.path === '/purwokerto');
                    return (
                      <React.Fragment key={region.name}>
                        <Link 
                          to={region.path} 
                          className={`footer-region-link ${isActive ? 'active-region' : ''}`}
                        >
                          {region.name}
                        </Link>
                        {index < regions.length - 1 && <span className="footer-region-separator"> • </span>}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
            <p className="footer-address">
              <strong>Kantor Pusat:</strong><br />
              Jl. Ringin Tirto No. 69, Glempang, Bancarkembar,<br />
              Kec. Purwokerto Utara, Kab. Banyumas, Jawa Tengah.
            </p>
          </div>

          <div className="footer-legal">
            <div className="legal-item">
              <span className="legal-icon">⭐</span>
              <div className="legal-text">
                <span className="legal-title">Akreditasi A</span>
                <span className="legal-desc">Layanan Terbaik & Terpercaya</span>
              </div>
            </div>
            <div className="legal-item">
              <span className="legal-icon">📜</span>
              <div className="legal-text">
                <span className="legal-title">Izin PPIU No. U.435/2021</span>
                <span className="legal-desc">Izin Resmi Kemenag RI</span>
              </div>
            </div>
            <div className="legal-item">
              <span className="legal-icon">📄</span>
              <div className="legal-text">
                <span className="legal-title">Izin PIHK No. 91202076518810009/2024</span>
                <span className="legal-desc">Penyelenggara Ibadah Haji Khusus</span>
              </div>
            </div>
          </div>

          <div className="footer-social">
            <h4 className="social-title">Ikuti Kami</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/bigtravelpurwokerto" className="social-link" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.tiktok.com/@bigtravelpurwokerto" className="social-link" target="_blank" rel="noreferrer">TikTok</a>
              <a href="https://www.youtube.com/@bigtravelpurwokerto" className="social-link" target="_blank" rel="noreferrer">YouTube</a>
              <span className="social-handle">@bigtravelpurwokerto</span>
            </div>
          </div>
        </div>


        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BIG Travel Purwokerto. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
