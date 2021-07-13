import ComponenteClase from './components/ComponenteClase';
import Tarjeta from './components/Tarjeta/';

function App() {
  return (
    <>
      <h1>Hola desde App! 👋</h1>
      <ComponenteClase />
      <Tarjeta nombre="Pedro" direccion="Cancún" telefono="9988458554" correo="cancun@devf.mx" />
      <Tarjeta nombre="Sergio" direccion="Querétaro" telefono="444666888" correo="sergio@devf.mx" color="royalblue"/>
      <Tarjeta nombre="Laura" direccion="Colombia" telefono="123123123" correo="laura@cool.com" color="tomato"/>
    </>
  );
}

export default App;
