import { useState } from 'react';
import '../App.css';

function FormTarefas() {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (texto.trim() === '') return;
    setTarefas([...tarefas, texto]);
    setTexto('');
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <div className="formulario">
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul className="lista">
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default FormTarefas;
