import React from "react";
import Countdown from "react-countdown";

const weddingDate = new Date("2026-05-22T16:00:00"); // data e hora do casamento
const whatsappNumber = "351913925814";

// Componente para contagem decrescente
const CountdownTimer = () => (
  <Countdown
    date={weddingDate}
    renderer={({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <span>O Grande Dia Chegou! 🎉</span>;
      }
      return (
        <span>
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }}
  />
);

// Função para criar link ICS para calendário
const createCalendarLink = () => {
  const title = "Casamento Beatriz & Rui";
  const location =
    "Igreja de Torgueda, Vila Real e Quinta dos Jasmins, Paços de Ferreira";
  const description = "Vamos celebrar juntos!";

  const startDate = weddingDate.toISOString().replace(/-|:|\.\d+/g, "");
  const endDate = new Date(weddingDate.getTime() + 3 * 60 * 60 * 1000)
    .toISOString()
    .replace(/-|:|\.\d+/g, "");

  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${title}
LOCATION:${location}
DESCRIPTION:${description}
END:VEVENT
END:VCALENDAR
`.trim();

  return "data:text/calendar;charset=utf8," + encodeURIComponent(icsContent);
};

const App = () => {
  const handleRSVP = (answer) => {
    const message =
      answer === "yes"
        ? "Olá! Confirmo que vou ao vosso casamento ! 🎉"
        : "Olá! Infelizmente não vou poder ir ao casamento.";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const pageStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundImage: "url('/fundo.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    textAlign: "center",
    color: "#5C4033", // texto escuro
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(255,255,255,0)",
  };

  const cardStyle = {
    position: "relative",
    zIndex: 1,
    maxWidth: 520,
    width: "100%",
    background: "transparent", // o overlay já dá o efeito
    padding: "2rem",
    borderRadius: "16px",
  };

  const titleStyle = {
    fontSize: "3rem",
    marginBottom: "0.25rem",
    fontFamily: "'Dancing Script', cursive",
    color: "#6B3E26",
  };

  const buttonBase = {
    border: "none",
    borderRadius: "10px",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "transform 0.2s",
    boxShadow: "0 2px 5px rgba(0,0,0,0.13)",
  };

  return (
    <div style={pageStyle}>
      <div style={overlayStyle} />
      <div style={cardStyle}>
        <h1 style={titleStyle}>Beatriz & Rui</h1>
        <h2 style={{ fontWeight: "normal", marginBottom: "1rem" }}>
          📅 22 Maio 2026
        </h2>

        <div style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
          <CountdownTimer />
        </div>

        <button
          onClick={() => {
            const link = createCalendarLink();
            const element = document.createElement("a");
            element.setAttribute("href", link);
            element.setAttribute("download", "casamento-beatriz-rui.ics");
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
          }}
          style={{ ...buttonBase, backgroundColor: "#6B3E26", color: "#fff", marginBottom: "1.5rem" }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Adicionar ao Calendário
        </button>

        <div style={{ marginBottom: "1.5rem", lineHeight: 1.6 }}>
          <p>
          📍 <strong>Igreja:</strong>{" "}
            <a
              href="https://www.google.com/maps?q=Igreja+de+Torgueda,+Vila+Real"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#6B3E26", textDecoration: "underline" }}
            >
              Igreja de Torgueda, Vila Real
            </a>
          </p>
          <p>
          📍 <strong>Festa:</strong>{" "}
            <a
              href="https://www.google.com/maps?q=Quinta+dos+Jasmins,+Pa%C3%A7os+de+Ferreira"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#6B3E26", textDecoration: "underline" }}
            >
              Quinta dos Jasmins, Paços de Ferreira
            </a>
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <p>Confirmas presença?</p>
          <button
            onClick={() => handleRSVP("yes")}
            style={{
              ...buttonBase,
              backgroundColor: "#A0522D",
              color: "#fff",
              marginRight: "0.75rem",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            📱 Vou
          </button>
          <button
            onClick={() => handleRSVP("no")}
            style={{ ...buttonBase, backgroundColor: "#5C4033", color: "#fff" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            📱 Não Vou
          </button>
        </div>

        <audio autoPlay loop>
          <source
            src="https://cdn.pixabay.com/download/audio/2021/08/04/audio_7f5b308d48.mp3?filename=happy-upbeat-1-6419.mp3"
            type="audio/mpeg"
          />
          O seu navegador não suporta o elemento de áudio.
        </audio>
      </div>
    </div>
  );
};

export default App;
