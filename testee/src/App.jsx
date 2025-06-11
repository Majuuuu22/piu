import { useState } from 'react';
import Card from '../../aula05/src/componentes/Card.jsx';
import Detalhes from '../../aula05/src/componentes/Detalhes.jsx';
import Tema from '../../aula05/src/componentes/Tema.jsx';
import Galeria from '../../aula05/src/componentes/Galeria.jsx';
import './App.css';




const characters = [
  {
    id: 1,
    name: 'cachorro',
    description: 'auau.',
    image: cachorro1
  },
  {
    id: 2,
    name: 'auau',
    description: 'bb.',
    image: cachorro2
  },
   {
    id: 3,
    name: 'cachorrin',
    description: 'lindinho.',
    image: cachorro3
  },
  {
    id: 4,
    name: 'fofin',
    description: 'carissimo.',
    image: cachorro4
  },
   {
    id: 5,
    name: 'ararinha',
    description: 'amostrada.',
    image: arara1
  },
  {
    id: 6,
    name: 'arara',
    description: 'linda.',
    image: arara2
  }

];

export default function App() {


  return (
    <Tema>

      <h1>Galeria de Personagens</h1>
      
      <Galeria characters={characters}/>
    </Tema>
  );
}