import React from 'react';
import carros from './dados_carro';

export default function ListaTodosCarros() {
  return (
    <div>
      <h2>Todos os Carros</h2>
      <ul>
        {carros.map((carro) => (
          <li key={carro.id}>
            {carro.modelo} - {carro.ano}
          </li>
        ))}
      </ul>
    </div>
  );
}
