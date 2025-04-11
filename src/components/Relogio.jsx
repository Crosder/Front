import { useEffect, useState } from 'react';

export default function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-sm text-white font-mono bg-pink-600/30 px-4 py-2 rounded-xl shadow-lg">
      {hora.toLocaleTimeString()} - {hora.toLocaleDateString()}
    </div>
  );
}