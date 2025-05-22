import { useState } from 'react';
import Galeria from './components/Galeria';
import Detalhes from './components/Detalhes';
import TemaButton from './components/TemaButton';

import './index.css';

import personagem1 from './assets/personagem1.webp';
import personagem2 from './assets/personagem2.webp';
import personagem3 from './assets/personagem3.webp';
import personagem4 from './assets/personagem4.jpg';
import personagem5 from './assets/personagem5.webp';
import personagem6 from './assets/personagem6.webp';


const personagens = [
  {
    nome: 'Personagem 1',
    descricao: 'barbiee',
    imagem: personagem1,
  },
  {
    nome: 'Personagem 2',
    descricao: 'linda',
    imagem: personagem2,
  },
  {
    nome: 'Personagem 3',
    descricao: 'rica',
    imagem: personagem3,
  },
  {
    nome: 'Personagem 4',
    descricao: 'pobre',
    imagem: personagem4,
  },
  {
    nome: 'Personagem 5',
    descricao: 'inteligente.',
    imagem: personagem5,
  },
  {
    nome: 'Personagem 6',
    descricao: 'divertida',
    imagem: personagem6,
  },
];

function App() {
  const [tema, setTema] = useState('light');
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  const alternarTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${tema}`}>
      <h1>Galeria de Personagens</h1>
      <TemaButton temaAtual={tema} alternarTema={alternarTema} />
      <Galeria personagens={personagens} aoSelecionar={setPersonagemSelecionado} />
      <Detalhes personagem={personagemSelecionado} />
    </div>
  );
}

export default App

