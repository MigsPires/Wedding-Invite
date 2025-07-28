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
      
      <div className="invite-section">
        <MiniCalendar />
      </div>

      <div className="invite-section">
        <h2>📍 Onde 📍whatsapp </h2>
        <p><strong>Igzzzzzzzzzzzzzzzzzreja:</strong> <a href="https://maps.app.goo.gl/qdz9XYx79PH3uSGL6" target="_blank" rel="noreferrer">Igreja São Salvador de Torgueda, Vila Real</a></p>
        <p><strong>Festa:</strong> <a href="https://maps.app.goo.gl/ZjGTyL7DZgzwnNe46" target="_blank" rel="noreferrer">Quinta dos Jasmins, Paços de Ferreira</a></p>
      </div>

      <div className="invite-section">
        <h2>Confirmas presença?</h2>
        <div className="rsvp-buttons">
          <button onClick={() => handleRSVP("yes")}>Sim</button>
          <button onClick={() => handleRSVP("no")}>Não</button>
        </div>
      </div>
    </div>
  );
};

export default InvitePage;
