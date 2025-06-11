import React, { useState } from "react";

// Dados dos carros
const carrosIniciais = [
  { id: 1, modelo: "Gol", ano: 2000, cor: "vermelho" },
  { id: 2, modelo: "Uno", ano: 2005, cor: "azul" },
  { id: 3, modelo: "Palio", ano: 2010, cor: "vermelho" },
  { id: 4, modelo: "Civic", ano: 2015, cor: "preto" },
];

// Contador bidirecional simples
function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="contador">
      <h2>Contador Bidirecional</h2>
      <p>Valor: {contador}</p>
      <button
        style={{ backgroundColor: contador > 10 ? "lightgreen" : "" }}
        onClick={() => setContador(contador + 1)}
      >
        Incrementar
      </button>
      <button
        style={{ backgroundColor: contador < 0 ? "lightcoral" : "" }}
        onClick={() => setContador(contador - 1)}
      >
        Decrementar
      </button>
    </div>
  );
}

// Lista todos os carros (modelo e ano)
function ListaCarros({ carros }) {
  return (
    <div className="lista-carros">
      <h2>Todos os carros (modelo e ano)</h2>
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

// Lista só os carros vermelhos (modelo e ano)
function ListaCarrosVermelhos({ carros }) {
  // Atenção: no array, as cores estão em minúsculo ("vermelho"),
  // por isso comparar com "vermelho", não "Vermelho"
  const vermelhos = carros.filter((carro) => carro.cor === "vermelho");

  return (
    <div className="lista-carros-vermelhos">
      <h2>Carros Vermelhos</h2>
      <ul>
        {vermelhos.length === 0 ? (
          <li>Nenhum carro vermelho disponível.</li>
        ) : (
          vermelhos.map((carro) => (
            <li key={carro.id}>
              {carro.modelo} - {carro.ano}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

// Componente principal que junta tudo
export default function App() {
  const [carros, setCarros] = useState(carrosIniciais);

  return (
    <div>
      <Contador />
      <hr />
      <ListaCarros carros={carros} />
      <hr />
      <ListaCarrosVermelhos carros={carros} />
    </div>
  );
}
