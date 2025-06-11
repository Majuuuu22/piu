import React from 'react';
import Contador from './componentes/Contador';
import ListaCarros from './componentes/ListaCarros';
import ListaCarrosVermelhos from './componentes/ListaCarrosVermelhos';

export default function App() {
  return (
    <div>
      <Contador />
      <hr />
      <ListaCarros />
      <hr />
      <ListaCarrosVermelhos />
    </div>
  );
}
