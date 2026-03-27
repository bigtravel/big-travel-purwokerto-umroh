import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {

  const targetDate = new Date('2026-06-23T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-section bg-light-gray">
      <div className="container countdown-container">
        <div className="countdown-text">
          <h3 className="countdown-title">Segera Daftar!</h3>
          <p className="countdown-subtitle">Sisa waktu menuju penutupan pendaftaran Umroh Muharam 1448 H</p>
        </div>
        <div className="countdown-timer">
          <div className="time-box">
            <span className="time-number">{timeLeft.days}</span>
            <span className="time-label">Hari</span>
          </div>
          <span className="time-separator">:</span>
          <div className="time-box">
            <span className="time-number">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="time-label">Jam</span>
          </div>
          <span className="time-separator">:</span>
          <div className="time-box">
            <span className="time-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="time-label">Menit</span>
          </div>
          <span className="time-separator">:</span>
          <div className="time-box">
            <span className="time-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="time-label">Detik</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
