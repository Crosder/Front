export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 flex flex-col items-center justify-center text-white animate-fade-in">
      <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 drop-shadow-md">
        Teacher Mafer Dashboard
      </h1>
      <p className="text-lg opacity-80 mb-10">Acesso exclusivo para alunos e professores</p>
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Senha"
            className="px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 py-3 rounded-md font-semibold hover:opacity-90 transition-all"
          >
            Entrar
          </button>
          <button
            type="button"
            className="text-sm text-purple-400 hover:underline mt-2"
          >
            Esqueci minha senha
          </button>
        </form>
      </div>
    </div>
  );
}
