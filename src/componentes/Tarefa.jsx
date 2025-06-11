import React from 'react';

const Tarefa = ({ tarefa, aoAlternar, escuro }) => {
  const corFundo = tarefa.feita
    ? escuro ? '#2e5931' : '#d4edda'
    : escuro ? '#5b2b2b' : '#f8d7da';

  const corTexto = escuro ? '#fff' : '#000';

  return (
    <div
      style={{
        backgroundColor: corFundo,
        color: corTexto,
        padding: '16px',
        marginBottom: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background-color 0.3s ease',
      }}
    >
      <span
        style={{
          textDecoration: tarefa.feita ? 'line-through' : 'none',
          fontWeight: '500',
          fontSize: '16px',
        }}
      >
        {tarefa.titulo}
      </span>

      <button
        onClick={() => aoAlternar(tarefa.id)}
        style={{
          padding: '6px 12px',
          backgroundColor: tarefa.feita ? '#28a745' : '#dc3545',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        {tarefa.feita ? 'Desmarcar' : 'Concluir'}
      </button>
    </div>
  );
};

export default Tarefa;
