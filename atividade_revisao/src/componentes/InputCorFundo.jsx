import { useState, useEffect } from 'react';

export default function InputCorFundo() {
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const tamanho = texto.length;
    const cor = `rgb(${tamanho * 20 % 255}, ${tamanho * 40 % 255}, ${tamanho * 60 % 255})`;
    document.body.style.backgroundColor = cor;
  }, [texto]);

  return (
    <div>
      <h2>Digite algo para mudar a cor de fundo</h2>
      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Digite aqui..."
      />
    </div>
  );
}
