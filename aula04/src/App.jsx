import './App.css';
import ListasMap from './componentes/Listas.Map';
import ListasFilter from './componentes/Listas.Filter';
import ListasObj from './componentes/Listas.Obj';
import Dropdowns from './componentes/Dropdowns'; 

function App() {
  return (
    <>
      <Dropdowns /> 
      <br/>
      <ListasMap />
      <br />
      <ListasFilter />
      <br />
      <ListasObj />
    </>
  );
}

export default App
