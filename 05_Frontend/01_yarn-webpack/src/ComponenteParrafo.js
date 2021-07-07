const ComponenteParrafo = () => {
  const p = document.createElement('p');
  p.innerHTML = `Soy el componente párrafo! 📑`;
  return p;
}
// Exportando con sintaxis CommonJS:
// module.exports = ComponenteParrafo;

// Exportando con sintaxis EcmaScript2015 (ES6):
export default ComponenteParrafo;
