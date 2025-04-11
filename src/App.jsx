import { motion } from 'framer-motion';
import DashboardGraph from './components/DashboardGraph';
import Relogio from './components/Relogio';
import GraficoAnimado from './components/GraficoAnimado';

export default function App() {
  const nomeUsuario = "Teacher Linda";
  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-800 via-pink-500 to-white text-white font-sans px-4 py-6 overflow-x-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#ff69b4,_transparent_70%)] blur-3xl opacity-30 -z-10" />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold animate-pulse-neon">Bem-vinda, {nomeUsuario}!</h1>
        <Relogio />
      </div>
      <motion.div
        className="bg-white/10 p-6 rounded-2xl shadow-2xl border border-pink-300"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-center text-lg">Dashboard Neon Moderno com Visual 2025</p>
      </motion.div>
      <GraficoAnimado />
      <DashboardGraph />
    </div>
  );
}
