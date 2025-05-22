import Card from './Card';
import './Galeria.css';

function Galeria({ personagens, aoSelecionar }) {
  return (
    <div className="galeria">
      {personagens.map((personagem) => (
        <Card
          key={personagem.nome}
          nome={personagem.nome}
          imagem={personagem.imagem}
          aoClicar={() => aoSelecionar(personagem)}
        />
      ))}
    </div>
  );
}
