import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Countdown from '../components/Countdown/Countdown';
import FastFacts from '../components/FastFacts/FastFacts';
import FeatureGrid from '../components/FeatureGrid/FeatureGrid';
import Pricing from '../components/Pricing/Pricing';
import Gift from '../components/Gift/Gift';
import Testimonial from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp/FloatingWhatsApp';

import purwokertoImg from '../assets/menara-pandang-purwokerto.jpg';
import purbalinggaImg from '../assets/tugu-jendral-soedirman-purbalingga.webp';
import banjarnegaraImg from '../assets/alun-alun-banjarnegara.jpg';
import cilacapImg from '../assets/tugu-lilin-cilacap.jpg';
import kebumenImg from '../assets/tugu-lawet-kebumen-2.jpg';


const landmarkData = {
  Purwokerto: { img: purwokertoImg, pos: 'center' },
  Purbalingga: { img: purbalinggaImg, pos: 'center 10%' },
  Banjarnegara: { img: banjarnegaraImg, pos: 'center' },
  Cilacap: { img: cilacapImg, pos: 'center' },
  Kebumen: { img: kebumenImg, pos: 'center 10%' }
};

const colorThemeMap = {
  Purwokerto: '#008D91',
  Purbalingga: '#2FA79A',
  Banjarnegara: '#6FC08F',
  Cilacap: '#C0A709',
  Kebumen: '#C08909'
};

const Landing = ({ region, landmark }) => {
  const activeLandmark = landmark || region;
  const currentData = landmarkData[activeLandmark] || landmarkData['Purwokerto'];

  useEffect(() => {
    const themeColor = colorThemeMap[activeLandmark] || '#008D91';
    document.documentElement.style.setProperty('--color-primary', themeColor);
    window.scrollTo(0, 0);
  }, [activeLandmark]);

  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero region={region} landmarkImg={currentData.img} bgPosition={currentData.pos} />
        <Countdown />
        <FastFacts region={region} />
        <FeatureGrid region={region} />
        <Pricing />
        <Gift />
        <Testimonial region={region} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Landing;
