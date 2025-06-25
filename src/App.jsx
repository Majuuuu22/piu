<<<<<<< HEAD
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
=======

import './App.css'
import FirstForm from './componentes/FirsForm'
import FormState from './componentes/FormState'
import FormSelect from './componentes/FormSelect'

function App() {
 

  return (
  <div className="App">
    <h1>Trabalhando com Formulários</h1>
      <FirstForm/>
      <br />
      <FormState/>
      <br />
      <FormSelect/>

  </div>
  )
}

export default App
>>>>>>> abd1d8c (novo conteudo)
