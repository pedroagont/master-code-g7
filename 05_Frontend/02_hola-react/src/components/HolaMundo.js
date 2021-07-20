// COMPONENTES
// Un componente es una pieza de código que podemos manipular y reutilizar a nuestra conveniencia en ReactJS
// En otros términos, podemos describir un componente como un objeto/función que renderiza/retorna el código que necesitamos incrustar en nuestra app

function HolaMundo() {
  return (
    <h2>Hola desde el componente HolaMundo! 👋🌎</h2>
  );
}

// Para permitir que otros componentes tengan acceso a esta pieza de código, necesitamos pedirle a JS que lo exporte
export default HolaMundo;
