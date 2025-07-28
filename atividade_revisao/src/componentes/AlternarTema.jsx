
import { useState, useEffect } from 'react';

export default function AlternarTema() {
  const [escuro, setEscuro] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = escuro ? '#121212' : '#ffffff';
    document.body.style.color = escuro ? '#ffffff' : '#000000';
  }, [escuro]);

  return (
    <div>
      <h2>Tema: {escuro ? 'Escuro' : 'Claro'}</h2>
      <button onClick={() => setEscuro(prev => !prev)}>
        Alternar Tema
      </button>
    </div>
  );
}
