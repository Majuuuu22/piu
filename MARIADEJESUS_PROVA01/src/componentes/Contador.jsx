import React, { useState } from 'react';
import './Contador.css';
{/*funcao para quando apertar no botao, ele aumentar ou diminuir */}
const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
{/*retornando a funcaoo */}
  return (
    <div className="contador-container">
      <h2>Contador: {contador}</h2>
      <div className="botoes">
        <button
          className={`botao ${contador > 10 ? 'incremento' : ''}`}
          onClick={incrementar}
        >{/*incrementa o numero de click */}
          Incrementar
        </button>
        <button
          className={`botao ${contador < 0 ? 'decremento' : ''}`}
          onClick={decrementar}
        >{/*diminui a quantidade de click */}
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default Contador;