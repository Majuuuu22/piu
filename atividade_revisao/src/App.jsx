import AlternarTema from './componentes/AlternarTema';
import InputCorFundo from './componentes/InputCorFundo';
import FormularioLogin from './componentes/FormularioLogin';
import ListaUsuarios from './componentes/ListaUsuarios';

export default function App() {
  return (
    <div>
      <h1>Projeto React - Componentes Práticos</h1>

      <section>
        <AlternarTema />
      </section>

      <section>
        <InputCorFundo />
      </section>

      <section>
        <FormularioLogin />
      </section>

      <section>
        <ListaUsuarios />
      </section>
    </div>
  );
}
