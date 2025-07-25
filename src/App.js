import React from "react";
import Countdown from "react-countdown";

const weddingDate = new Date("2026-05-22T16:00:00"); // data e hora do casamento
const whatsappNumber = "351913925814";

// Componente de contagem decrescente
const CountdownTimer = () => (
  <Countdown
    date={weddingDate}
    renderer={({ days, hours, minutes, seconds, completed }) => {
      if (completed) return <span>O Grande Dia Chegou! 🎉</span>;
      return <span>{days}d {hours}h {minutes}m {seconds}s</span>;
    }}
  />
);

// Função para criar link ICS
const createCalendarLink = () => {
  const title = "Casamento Beatriz & Rui";
  const location = "Igreja de Torgueda, Vila Real e Quinta dos Jasmins, Paços de Ferreira";
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
        ? "Olá! Confirmo que vou ao casamento de Beatriz e Rui! 🎉"
        : "Olá! Infelizmente não vou poder ir ao casamento de Beatriz e Rui.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#E2725B",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontFamily: "'Dancing Script', cursive" }}>
        Beatriz & Rui
      </h1>
      <h2 style={{ fontWeight: "normal", marginBottom: "1.5rem" }}>
        📅 22 Maio 2026
      </h2>

      <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
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
        style={{
          backgroundColor: "#a35134",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          cursor: "pointer",
          marginBottom: "1.5rem",
          boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
          transition: "transform 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Adicionar ao Calendário
      </button>

      <div style={{ marginBottom: "1.5rem" }}>
        <p>
          📍 <strong>Igreja:</strong>{" "}
          <a
            href="https://www.google.com/maps?q=Igreja+de+Torgueda,+Vila+Real"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff", textDecoration: "underline" }}
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
            style={{ color: "#fff", textDecoration: "underline" }}
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
            marginRight: "1rem",
            backgroundColor: "#a35134",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.5rem 1.2rem",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          📱 Vou
        </button>
        <button
          onClick={() => handleRSVP("no")}
          style={{
            backgroundColor: "#5c3a2e",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.5rem 1.2rem",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
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
  );
};

export default App;
