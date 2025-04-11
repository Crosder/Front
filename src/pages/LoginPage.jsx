import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="bg-[#0f0f0f] border border-[#1f1f1f] shadow-[0_0_30px_#00ffff22] rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#00f0ff] drop-shadow-[0_0_5px_#00ffff]">Teacher Mafer - Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Senha</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between text-sm text-[#00ffff] underline">
            <a href="#">Esqueci a senha</a>
            <a href="#">Cadastrar aluno</a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#00ffff] text-black font-bold rounded-xl hover:bg-[#00d2d2] transition-all"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}