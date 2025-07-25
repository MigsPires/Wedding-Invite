import React from 'react';
import MiniCalendar from './MiniCalendar';
import './styles.css';

const InvitePage = () => {
  const handleRSVP = (answer) => {
    const msg = answer === "yes"
      ? "Olá! Confirmo que vou ao casamento de Beatriz e Rui! 🎉"
      : "Olá! Infelizmente não vou poder ir ao casamento de Beatriz e Rui.";
    window.open(`https://wa.me/351913925814?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="invite-page">
      <h1 className="invite-title">Beatriz & Rui</h1>
      <p className="invite-phrase">"Um dia especial para celebrar o amor com aqueles que amamos."</p>
      
      <div className="invite-section">
        <h2>📅 Quando</h2>
        <p>22 Maio 2026 - 12:30</p>
        <MiniCalendar />
      </div>

      <div className="invite-section">
        <h2>📍 Onde</h2>
        <p><strong>Igreja:</strong> <a href="https://maps.app.goo.gl/qdz9XYx79PH3uSGL6" target="_blank" rel="noreferrer">Igreja São Salvador de Torgueda, Vila Real</a></p>
        <p><strong>Festa:</strong> <a href="https://maps.app.goo.gl/ZjGTyL7DZgzwnNe46" target="_blank" rel="noreferrer">Quinta dos Jasmins, Paços de Ferreira</a></p>
      </div>

      <div className="invite-section">
        <h2>RSVP</h2>
        <p>Confirmas presença?</p>
        <div className="rsvp-buttons">
          <button onClick={() => handleRSVP("yes")}>Vou</button>
          <button onClick={() => handleRSVP("no")}>Não Vou</button>
        </div>
      </div>

      <audio autoPlay loop>
        <source src="https://cdn.pixabay.com/download/audio/2021/08/04/audio_7f5b308d48.mp3?filename=happy-upbeat-1-6419.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default InvitePage;
