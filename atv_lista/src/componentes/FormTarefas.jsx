import { useState } from "react";
import "../App.css";

function FormTarefas() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (texto.trim() === "") return;
    setTarefas([
      ...tarefas,
      { texto: texto, status: "pendente" }
    ]);
    setTexto("");
  };

  const mudarStatus = (index, novoStatus) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].status = novoStatus;
    setTarefas(novasTarefas);
  };

  const moverTarefa = (index, direcao) => {
    const novasTarefas = [...tarefas];
    const novoIndex = index + direcao;
    if (novoIndex < 0 || novoIndex >= tarefas.length) return;
    [novasTarefas[index], novasTarefas[novoIndex]] = [novasTarefas[novoIndex], novasTarefas[index]];
    setTarefas(novasTarefas);
  };

  return (
    <div className="card">
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
          <li key={index}>
            <span
              className={
                tarefa.status === "realizada"
                  ? "realizada"
                  : tarefa.status === "nao-realizada"
                  ? "nao-realizada"
                  : ""
              }
            >
              {tarefa.texto} ({tarefa.status})
            </span>
            <div className="botoes">
              <button onClick={() => mudarStatus(index, "realizada")}>Realizada</button>
              <button onClick={() => mudarStatus(index, "nao-realizada")}>Não realizada</button>
              <button onClick={() => mudarStatus(index, "pendente")}>Pendente</button>
              <button onClick={() => moverTarefa(index, -1)}>▲</button>
              <button onClick={() => moverTarefa(index, +1)}>▼</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormTarefas;
