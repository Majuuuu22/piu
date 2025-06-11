import React, { useState } from 'react';
import carrosIniciais from './dados_carro';

export default function ListaCarrosVermelhos() {
  const carrosVermelhosIniciais = carrosIniciais.filter(carro => carro.cor === 'Vermelho');
  const [carros, setCarros] = useState(carrosVermelhosIniciais);

  const [editandoId, setEditandoId] = useState(null);
  const [novoModelo, setNovoModelo] = useState('');
  const [novoAno, setNovoAno] = useState('');

  const iniciarEdicao = (carro) => {
    setEditandoId(carro.id);
    setNovoModelo(carro.modelo);
    setNovoAno(carro.ano);
  };

  const salvarEdicao = (id) => {
    const listaAtualizada = carros.map(carro =>
      carro.id === id ? { ...carro, modelo: novoModelo, ano: parseInt(novoAno) } : carro
    );
    setCarros(listaAtualizada);
    setEditandoId(null);
    setNovoModelo('');
    setNovoAno('');
  };

  const removerCarro = (id) => {
    const listaFiltrada = carros.filter(carro => carro.id !== id);
    setCarros(listaFiltrada);
  };

  return (
    <div>
      <h2>Carros Vermelhos</h2>
      <ul>
        {carros.length === 0 ? (
          <li>Nenhum carro vermelho disponível.</li>
        ) : (
          carros.map(carro => (
            <li key={carro.id}>
              {editandoId === carro.id ? (
                <>
                  <input
                    type="text"
                    value={novoModelo}
                    onChange={(e) => setNovoModelo(e.target.value)}
                  />
                  <input
                    type="number"
                    value={novoAno}
                    onChange={(e) => setNovoAno(e.target.value)}
                  />
                  <button onClick={() => salvarEdicao(carro.id)}>Salvar</button>
                </>
              ) : (
                <>
                  {carro.modelo} - {carro.ano} ({carro.cor}){' '}
                  <button onClick={() => iniciarEdicao(carro)}>Editar</button>{' '}
                  <button onClick={() => removerCarro(carro.id)}>Remover</button>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
