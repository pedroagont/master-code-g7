import { useState, useEffect } from 'react';

function Ejemplo() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [nombre, setNombre] = useState('Pedrito');

  const handleResta = () => setCount(count - 1);
  const handleSuma = () => setCount(count + 1);
  const handleCambioDeNombre = () => setNombre('Pedrín');

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.getElementById('titulo').innerHTML = `You clicked ${count} times`;
  });

  return (
    <div>
      <h2 id="titulo">Soy el título</h2>
      <button onClick={ handleResta }>Restar</button>
      <p>Contador: {count}</p>
      <button onClick={ handleSuma }>Sumar</button>

      <p>Nombre: {nombre}</p>
      <button onClick={ handleCambioDeNombre }> Cambiar nombre </button>
    </div>
  );
}
export default Ejemplo;
