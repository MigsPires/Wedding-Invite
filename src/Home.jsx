import { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';

export default function Home() {
  const weddingDate = new Date('2026-05-22T12:30:00');
  const [timeLeft, setTimeLeft] = useState('');

  const whatsappNumber = '351913925814';

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = differenceInSeconds(weddingDate, new Date());
      const days = Math.floor(diff / (60 * 60 * 24));
      const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((diff % (60 * 60)) / 60);
      const seconds = diff % 60;
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-4" style={{ backgroundImage: "url('public/fundo1.png')" }}>
      <div className="bg-white bg-opacity-80 rounded-2xl shadow-xl p-8 text-center max-w-md animate-fade-in">
        <h1 className="text-4xl font-['Dancing Script'] text-[#6B3E26] mb-4 animate-fade-in">Beatriz & Rui</h1>
        <p className="text-lg mb-2 animate-fade-in">📅 22 Maio 2026</p>
        <p className="text-md mb-4 animate-fade-in-delay">{timeLeft}</p>

        <button className="bg-[#6B3E26] text-white px-4 py-2 rounded-xl mb-4 transition transform hover:scale-105 animate-fade-in-delay">Adicionar ao Calendário</button>

        <div className="text-sm text-[#6B3E26] mb-2 animate-fade-in-delay">
          <p>📍 <strong>Igreja:</strong> <a href="https://maps.app.goo.gl/qdz9XYx79PH3uSGL6" target="_blank" className="underline transition transform hover:scale-110">Igreja de Torgueda, Vila Real</a></p>
          <p>📍 <strong>Festa:</strong> <a href="https://maps.app.goo.gl/ZjGTyL7DZgzwnNe46" target="_blank" className="underline transition transform hover:scale-110">Quinta dos Jasmins, Paços de Ferreira</a></p>
        </div>

        <p className="mt-4 mb-2 animate-fade-in-delay">Confirmas presença?</p>
        <div className="flex justify-center gap-4 animate-fade-in-delay">
          <button onClick={() => handleWhatsApp('Olá! Confirmo que vou ao vosso casamento 💍🥂')} className="bg-[#A0522D] text-white px-4 py-2 rounded-xl transition transform hover:scale-110">📱 Vou</button>
          <button onClick={() => handleWhatsApp('Olá! Infelizmente não vou poder ir ao vosso casamento 😔')} className="bg-[#5C4033] text-white px-4 py-2 rounded-xl transition transform hover:scale-110">📱 Não Vou</button>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in { animation: fadeIn 1.2s ease-in forwards; opacity: 0; }
        .animate-fade-in-delay { animation: fadeIn 1.2s ease-in forwards; opacity: 0; animation-delay: 0.3s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
