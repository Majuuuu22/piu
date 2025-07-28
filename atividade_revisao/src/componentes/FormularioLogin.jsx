import { useState } from 'react';
import './FormularioLogin.css'; // Novo arquivo de estilo opcional

export default function FormularioLogin() {
  const [form, setForm] = useState({ login: '', senha: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', form.login);
    console.log('Senha:', form.senha);
    alert("Login enviado! Verifique o console.");
  };

  return (
    <form className="formulario-login" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>Usuário</label>
      <input
        type="text"
        name="login"
        value={form.login}
        onChange={handleChange}
        placeholder="Digite seu login"
        required
      />
      <label>Senha</label>
      <input
        type="password"
        name="senha"
        value={form.senha}
        onChange={handleChange}
        placeholder="Digite sua senha"
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
