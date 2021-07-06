// console.log('Hola desde index! 👋')

// Importar con sintaxis CommonJS:
// const funcionSaludar = require('funcionSaludar');
// const ComponenteSubtitulo = require('ComponenteSubtitulo');
// const ComponenteParrafo = require('ComponenteParrafo');

// Importar con sintaxis EcmaScript2015 (ES6):
import funcionSaludar from './funcionSaludar';
import ComponenteSubtitulo from './ComponenteSubtitulo';
import ComponenteParrafo from './ComponenteParrafo';
import './styles.css';

// Ejecutamos código de valores importados
funcionSaludar('Alumnos G7');
document.body.appendChild(ComponenteSubtitulo());
document.body.appendChild(ComponenteParrafo());
