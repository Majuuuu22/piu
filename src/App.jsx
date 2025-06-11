import React, { useState } from 'react';
import tarefasIniciais from './Tarefas';
import Tarefa from './componentes/Tarefa';
import ListaTarefas from './componentes/ListaTarefas';
import BotaoTema from './componentes/BotaoTema';
import './App.css';

const App = () => {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [modoEscuro, setModoEscuro] = useState(false);

  const alternarTarefa = (id) => {
    const atualizadas = tarefas.map((t) =>
      t.id === id ? { ...t, feita: !t.feita } : t
    );
    setTarefas(atualizadas);
  };

  const alternarTema = () => setModoEscuro(!modoEscuro);

  return (
    <div className={modoEscuro ? 'app escuro' : 'app claro'}>
      <h1>Minha Lista de Tarefas</h1>
      <BotaoTema aoClicar={alternarTema} escuro={modoEscuro} />
      <ListaTarefas>
        {tarefas.map((tarefa) => (
      <Tarefa
        key={tarefa.id}
        tarefa={tarefa}
        aoAlternar={alternarTarefa}
        escuro={modoEscuro}
      />
    ))}

      </ListaTarefas>
    </div>
  );
};

export default App;
