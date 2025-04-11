import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const baseData = [
  { dia: '1', desempenho: 0 },
  { dia: '2', desempenho: 0 },
  { dia: '3', desempenho: 0 },
  { dia: '4', desempenho: 0 },
  { dia: '5', desempenho: 0 }
];

export default function GraficoAnimado() {
  const [data, setData] = useState(baseData);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress > 100) clearInterval(interval);
      const newData = baseData.map((item, i) => ({
        ...item,
        desempenho: Math.min(100, item.desempenho + Math.floor(Math.random() * 10))
      }));
      setData(newData);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-60 bg-white/10 rounded-xl p-4 mt-6 shadow-lg border border-pink-400">
      <h2 className="text-white text-center font-semibold mb-2">Gráfico de Crescimento</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ff69b4" />
          <XAxis dataKey="dia" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line type="monotone" dataKey="desempenho" stroke="#ff69b4" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}