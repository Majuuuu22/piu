import React, { useState } from 'react';
import { carros } from '../dados_carros';
import './ListaCarros.css';


const ListaCarros = () => {
  const [lista] = useState(carros);

  const vermelhos = lista.filter((carro) => carro.cor.toLowerCase() === 'vermelho');
{/*a lista que retorna todos os modelos e coress */}
  return (
    <div className="lista-container">
      <h2>Todos os Carros (Modelo e Cores)</h2>
      <ul>
        {lista.map((carro, index) => (
          <li key={index}>
            {carro.modelo} - {carro.cor}
          </li>
        ))}
      </ul>

      <h2>Carros superiores a 2019</h2>
      <ul>
        {vermelhos.map((carro, index) => (
          
          <li key={index}>{carro.ano}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCarros;