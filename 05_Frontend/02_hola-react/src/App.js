// APP.JS
// El archivo App.js se considera el componente principal donde se ejecuta el funcionamiento de nuestra app
// Por limpieza y orden, por lo general el componente App es el que importa el resto de componentes y sólo los renderiza

import HolaMundo from './components/HolaMundo.js';
import './App.css'

function App() {
  return (
    // AGREGANDO ESTILOS
    // Podemos agregar estilos metiendo las propiedades en un atributo llamado "style"
    // Sintaxis: style={{ propiedad: "valor" }}
    // <>
    //   <h1 style={{ color: "yellow", textShadow: "2px 2px 2px black" }}>Hola desde App!📲</h1>
    //   <HolaMundo />
    // </>

    // AGREGANDO CLASES
    // Podemos asignar clases metiéndolas en un atributo llamado "className"
    // Sintaxis: className="clase1 clase2"
    <>
      <h1 className="texto-amarillo sombra">Hola desde App!📲</h1>
      <HolaMundo />
    </>
  );
}

export default App;
