import React, { useEffect, useState } from 'react';

const weddingDate = new Date('2026-05-22T12:30:00');


const CountdownPage = ({ onEnter }) => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;
      if (diff <= 0) return setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-page" style={{ backgroundImage: "url('/fundo.jpeg')" }}>
      <div className ="b " >
        <div className="overlay">
          <img src="/logo.png" className="logo" alt="Logo Beatriz & Rui" />
        </div>
        <div className="overlay">
          <div className="countdown-container">
            <div className="time-box"><span>{time.days}</span><small>Dias</small></div>
            <div className="time-box"><span>{time.hours}</span><small>Horas</small></div>
            <div className="time-box"><span>{time.minutes}</span><small>Min</small></div>
            <div className="time-box"><span>{time.seconds}</span><small>Seg</small></div>
          </div>
          <button className="enter-btn" onClick={onEnter}>💌 Ver Convite</button>
        </div>
      </div>
    </div>
  );
};


export default CountdownPage;
