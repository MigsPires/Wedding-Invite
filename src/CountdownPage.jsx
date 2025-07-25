import React, { useEffect, useState } from 'react';

const weddingDate = new Date('2026-05-22T12:30:00');

const CountdownPage = ({ onEnter }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;
      if (diff <= 0) return setTimeLeft("É hoje! 🎉");
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-page" style={{ backgroundImage: "url('/fundo.jpeg')" }}>
      <div className="overlay">
        <h1>Beatriz & Rui</h1>
        <p className="countdown">{timeLeft}</p>
        <button className="enter-btn" onClick={onEnter}>💌 Ver Convite</button>
      </div>
    </div>
  );
};

export default CountdownPage;