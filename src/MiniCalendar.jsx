import React from 'react';

const downloadICS = () => {
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20260522T113000Z
DTEND:20260522T153000Z
SUMMARY:Casamento Beatriz & Rui
LOCATION:Igreja de Torgueda, Vila Real / Quinta dos Jasmins, Paços de Ferreira
DESCRIPTION:Vamos celebrar juntos!
END:VEVENT
END:VCALENDAR`;
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "casamento-beatriz-rui.ics";
  a.click();
  window.URL.revokeObjectURL(url);
};

const MiniCalendar = () => {
  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="month">Maio 2026</div>
        <div className="days">
          {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
            <div key={i} className="day-name">{d}</div>
          ))}
          {Array.from({ length: 21 }, (_, i) => <div key={i} className="day empty" />)}
          {Array.from({ length: 31 }, (_, i) => {
            const day = i + 1;
            const isWeddingDay = day === 22;
            return (
              <div
                key={day}
                className={`day ${isWeddingDay ? 'wedding-day' : ''}`}
                onClick={isWeddingDay ? downloadICS : null}
                style={{ cursor: isWeddingDay ? 'pointer' : 'default' }}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default MiniCalendar;
