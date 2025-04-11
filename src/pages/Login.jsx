export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-cyan-300">
      <div className="bg-black/70 p-10 rounded-2xl shadow-2xl w-80 animate-fade-in">
        <h2 className="text-center text-2xl font-bold mb-6">Teacher Mafer</h2>
        <input
          type="text"
          placeholder="Email ou usuário"
          className="w-full p-3 mb-4 bg-gray-900 border border-cyan-300 rounded-md text-white placeholder-cyan-500"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 mb-4 bg-gray-900 border border-cyan-300 rounded-md text-white placeholder-cyan-500"
        />
        <button className="w-full p-3 bg-cyan-300 text-black font-bold rounded-md hover:bg-cyan-400 transition">
          Entrar
        </button>
        <div className="text-right mt-2">
          <a href="#" className="text-cyan-400 text-sm hover:underline">
            Esqueci minha senha
          </a>
        </div>
      </div>
    </div>
  );
}
