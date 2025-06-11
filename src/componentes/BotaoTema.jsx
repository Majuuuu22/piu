import React from 'react';

const BotaoTema = ({ aoClicar, escuro }) => {
  return (
    <button onClick={aoClicar}>
      Mudar para modo {escuro ? 'claro' : 'escuro'}
    </button>
  );
};

export default BotaoTema;
