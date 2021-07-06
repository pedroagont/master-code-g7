/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/funcionSaludar.js
var funcionSaludar = function funcionSaludar(persona) {
  console.log("Hola ".concat(persona, ", qu\xE9 incre\xEDble d\xEDa! \uD83D\uDC4B\uD83C\uDF1E"));
}; // Exportando con sintaxis CommonJS:
// module.exports = funcionSaludar;
// Exportando con sintaxis EcmaScript2015 (ES6):


/* harmony default export */ const src_funcionSaludar = (funcionSaludar);
;// CONCATENATED MODULE: ./src/ComponenteSubtitulo.js
var ComponenteSubtitulo = function ComponenteSubtitulo() {
  var h3 = document.createElement('h3');
  h3.innerHTML = "Soy el componente subt\xEDtulo! \uD83D\uDE0E";
  return h3;
}; // Exportando con sintaxis CommonJS:
// module.exports = ComponenteSubtitulo;
// Exportando con sintaxis EcmaScript2015 (ES6):


/* harmony default export */ const src_ComponenteSubtitulo = (ComponenteSubtitulo);
;// CONCATENATED MODULE: ./src/ComponenteParrafo.js
var ComponenteParrafo = function ComponenteParrafo() {
  var p = document.createElement('p');
  p.innerHTML = "Soy el componente p\xE1rrafo! \uD83D\uDCD1";
  return p;
}; // Exportando con sintaxis CommonJS:
// module.exports = ComponenteParrafo;
// Exportando con sintaxis EcmaScript2015 (ES6):


/* harmony default export */ const src_ComponenteParrafo = (ComponenteParrafo);
;// CONCATENATED MODULE: ./src/index.js
// console.log('Hola desde index! 👋')
// Importar con sintaxis CommonJS:
// const funcionSaludar = require('funcionSaludar');
// const ComponenteSubtitulo = require('ComponenteSubtitulo');
// const ComponenteParrafo = require('ComponenteParrafo');
// Importar con sintaxis EcmaScript2015 (ES6):



 // Ejecutamos código de valores importados

src_funcionSaludar('Alumnos G7');
document.body.appendChild(src_ComponenteSubtitulo());
document.body.appendChild(src_ComponenteParrafo());
/******/ })()
;