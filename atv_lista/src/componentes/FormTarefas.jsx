import { useState } from "react";
import "../App.css";

function FormTarefas() {
  const [texto, setTexto] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("todas");

  // Função que compara se dataEntrega é menor que hoje
  const estaAtrasada = (data) => {
    if (!data) return false;
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const entrega = new Date(data);
    entrega.setHours(0, 0, 0, 0);
    return entrega < hoje;
  };

  const adicionarTarefa = () => {
    if (texto.trim() === "") return;
    setTarefas([
      ...tarefas,
      { texto: texto, status: "", dataEntrega: dataEntrega }
    ]);
    setTexto("");
    setDataEntrega("");
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

  const resetarTarefas = () => {
    if (window.confirm("Tem certeza que deseja apagar todas as tarefas?")) {
      setTarefas([]);
    }
  };

  // Filtra considerando o status real (mas o display de pendente pode ser forçado pela data)
  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === "todas") return true;
    return tarefa.status === filtro;
  });

  return (
    <div className="card">
      <h1>Lista de Tarefas</h1>

      <div className="filtro">
        <label>Filtrar: </label>
        <select value={filtro} onChange={e => setFiltro(e.target.value)}>
          <option value="todas">Todas</option>
          <option value="pendente">Pendentes</option>
          <option value="realizada">Realizadas</option>
          <option value="nao-realizada">Não realizadas</option>
        </select>
      </div>

      <div className="formulario">
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <input
          type="date"
          value={dataEntrega}
          onChange={(e) => setDataEntrega(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul className="lista">
        {tarefasFiltradas.map((tarefa, index) => {
          // Define se mostra "pendente" visual mesmo que status não seja pendente
          const mostrarPendentePorData = estaAtrasada(tarefa.dataEntrega);

          // Decide texto do status: 
          // Se atrasada: "pendente"
          // Se status definido e não vazio: status original
          // Senão vazio (não mostrar)
          const statusExibir = mostrarPendentePorData
            ? "pendente"
            : tarefa.status;

          return (
            <li key={index}>
              <span
                className={
                  statusExibir === "realizada"
                    ? "realizada"
                    : statusExibir === "nao-realizada"
                    ? "nao-realizada"
                    : statusExibir === "pendente"
                    ? "pendente"
                    : ""
                }
              >
                {tarefa.texto}{" "}
                {statusExibir !== "" && `(${statusExibir})`}{" "}
                {tarefa.dataEntrega && (
                  <span className="data"> - Entrega: {tarefa.dataEntrega}</span>
                )}
              </span>
              <div className="botoes">
                <button onClick={() => mudarStatus(index, "realizada")}>Realizada</button>
                <button onClick={() => mudarStatus(index, "nao-realizada")}>Não realizada</button>
                <button onClick={() => mudarStatus(index, "pendente")}>Pendente</button>
                <button onClick={() => moverTarefa(index, -1)}>▲</button>
                <button onClick={() => moverTarefa(index, +1)}>▼</button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="resetar-container">
        <button className="resetar" onClick={resetarTarefas}>Resetar Tarefas</button>
      </div>
    </div>
  );
}

export default FormTarefas;
