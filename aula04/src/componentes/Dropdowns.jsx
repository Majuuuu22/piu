import { useState } from 'react';
import { nomes } from './dados.js';

export default function DropdownSelect() {
  const [selecionado, setSelecionado] = useState('');

  function handleChange(event) {
    setSelecionado(event.target.value);
  }

  return (
    <div>
      <h2>Selecione um nome:</h2>
      <select value={selecionado} onChange={handleChange} style={{ fontSize: '18px', padding: '5px' }}>
        <option value="">-- Selecione --</option>
        {nomes.map((nome, index) => (
          <option key={index} value={nome}>
            {nome}
          </option>
        ))}
      </select>

      {selecionado && (
        <p style={{ marginTop: '20px', fontSize: '20px' }}>
          Você selecionou: <strong>{selecionado}</strong>
        </p>
      )}
    </div>
  );
}
