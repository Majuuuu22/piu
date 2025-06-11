import React, { useState } from 'react';

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button
        onClick={() => setContador(contador + 1)}
        style={{ backgroundColor: contador > 10 ? 'lightgreen' : '' }}
      >
        Incrementar
      </button>
      <button
        onClick={() => setContador(contador - 1)}
        style={{ backgroundColor: contador < 0 ? 'salmon' : '' }}
      >
        Decrementar
      </button>
    </div>
  );
}
