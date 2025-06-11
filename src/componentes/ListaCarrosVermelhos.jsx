import React from 'react';
import carrosIniciais from './dados_carro';

export default function ListaCarrosVermelhos() {
  const carrosVermelhos = carrosIniciais.filter(carro => carro.cor === 'Vermelho');

  return (
    <div>
      <h2>Carros Vermelhos</h2>
      <ul>
        {carrosVermelhos.length === 0 ? (
          <li>Nenhum carro vermelho disponível.</li>
        ) : (
          carrosVermelhos.map(carro => (
            <li key={carro.id}>
              {carro.modelo} - {carro.ano}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
