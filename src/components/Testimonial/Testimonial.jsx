import React from 'react';
import './Testimonial.css';

const Testimonial = ({ region }) => {
  return (
    <section className="testimonial-section" id="testimoni">
      <div className="container">
        <div className="testimonial-header">
          <span className="testimonial-subtitle">Apa Kata Mereka?</span>
          <h2 className="testimonial-title">Ribuan Jamaah Telah Membuktikan</h2>
        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <div className="testimonial-user">
              <div className="user-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="user-icon-svg">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="user-info">
                <h4 className="user-name">Ibu Siti</h4>
                <span className="user-location">Jamaah {region}</span>
              </div>
            </div>
            <div className="testimonial-quote">
              <span className="quote-icon">"</span>
              <p>Mangkat sekang {region} dadi ora kesel neng dalan. Pelayanane top, hotelnya juga deket banget sama masjid!</p>
            </div>
          </div>


          <div className="testimonial-card">
            <div className="testimonial-user">
              <div className="user-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="user-icon-svg">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="user-info">
                <h4 className="user-name">Bapak Budi</h4>
                <span className="user-location">Jamaah {region}</span>
              </div>
            </div>
            <div className="testimonial-quote">
              <span className="quote-icon">"</span>
              <p>Alhamdulillah, berangkat langsung sekang {region} sangat memudahkan. Muthawwifnya juga sabar membimbing.</p>
            </div>
          </div>


          <div className="testimonial-card">
            <div className="testimonial-user">
              <div className="user-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="user-icon-svg">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="user-info">
                <h4 className="user-name">Ibu Wahyu</h4>
                <span className="user-location">Jamaah {region}</span>
              </div>
            </div>
            <div className="testimonial-quote">
              <span className="quote-icon">"</span>
              <p>Pelayanan BIG Travel memang terbaik. Naik kereta cepat gratis bikin ibadah makin khusyuk karena tidak kecapean di jalan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
