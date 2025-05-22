function TemaButton({ temaAtual, alternarTema }) {
  return (
    <button onClick={alternarTema} className="botao-tema">
      {temaAtual === 'light' ? ' Modo Escuro' : ' Modo Claro'}
    </button>
  );
}

export default TemaButton
