import React from 'react';
import zamzamImg from '../../assets/air-zam-zam-5-liter-2.jpg';
import kurmaImg from '../../assets/kurma-ajwa.jpg';
import bukuKenanganImg from '../../assets/buku-kenangan-haji.jpg';
import './Gift.css';

const Gift = () => {
  return (
    <section className="gift-section" id="benefit">
      <div className="container">
        <div className="gift-header">
          <h2 className="gift-title">Bawa Pulang Kenangan Abadi</h2>
          <p className="gift-subtitle">Fasilitas suvenir eksklusif gratis untuk melengkapi ibadah Anda</p>
        </div>

        <div className="gift-grid">

          <div className="gift-card">
            <div className="gift-img-wrap">
              <img src={bukuKenanganImg} alt="Buku Kenangan Eksklusif" className="gift-img buku-img" />
            </div>
            <div className="gift-card-content">
              <h3>🎁 Buku Kenangan Eksklusif</h3>
              <p>Jurnal perjalanan spiritual Anda untuk dikenang sepanjang masa.</p>
            </div>
          </div>


          <div className="gift-card">
            <div className="gift-img-wrap">
              <img src={zamzamImg} alt="Air Zamzam 5 Liter" className="gift-img" />
            </div>
            <div className="gift-card-content">
              <h3>💧 Air Zamzam 5 Liter</h3>
              <p>Air keberkahan langsung dari Makkah dibawa dengan aman hingga rumah.</p>
            </div>
          </div>


          <div className="gift-card">
            <div className="gift-img-wrap">
              <img src={kurmaImg} alt="Kurma Pilihan" className="gift-img" />
            </div>
            <div className="gift-card-content">
              <h3>🌴 Kurma Ajwa Pilihan</h3>
              <p>Oleh-oleh kurma premium terbaik untuk keluarga tercinta.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gift;
