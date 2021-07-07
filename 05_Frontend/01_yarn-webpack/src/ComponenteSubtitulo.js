const ComponenteSubtitulo = () => {
  const h3 = document.createElement('h3');
  h3.innerHTML = `Soy el componente subtítulo! 😎`;
  return h3;
}
// Exportando con sintaxis CommonJS:
// module.exports = ComponenteSubtitulo;

// Exportando con sintaxis EcmaScript2015 (ES6):
export default ComponenteSubtitulo;
