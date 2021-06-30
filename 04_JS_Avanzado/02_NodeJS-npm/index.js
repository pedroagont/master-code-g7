console.log('Hola desde index! 👋');

// --------------------> NODEJS
// Node.js es un entorno para ejecutar JavaScript fuera del navegador.
// Está construido con el motor de JavaScript V8 de Chrome.
// Tiene con una arquitectura orientada a eventos asíncronos

// LINK DE INSTALACIÓN: https://nodejs.org
// Para verificar versión existente de node en nuestra computadora ejecutamos el comando 'node -v' o 'node --version'
// Esto nos debe regresar un número el cual indica la versión de nuestro NodeJS instalado

// PRIMEROS PASOS CON NODEJS
// Nota: no se requiere un index.html debido a que vamos a ejecutar Javascript FUERA del navegador
// 1. Para correr este archivo index.js abrimos nuestra terminal (Windows: git bash, MAC/Linux: Terminal)
//    Nos dirigimos a la ubicación de la carpeta de nuestro proyecto, algo similar a lo sig:
//            "cd /Users/pedroagont/Desktop/master-code-g7/04_JS_Avanzado/02_NodeJS-npm"
// 2. Ya que nos ubicamos en la ruta donde se encuentra este archivo index.js, podemos correrlo con NODE:
//            "node index.js"
//    Debemos ver en nuestra terminal "Hola desde index! 👋".
//    Hemos aprendido a correr JS FUERA del navegador! 🥳

// ------------------------> NPM (Node Package Manager)
// NPM es el programa que nos ayuda a manejar los paquetes de Node que nos sirven para agregar funcionalidades a nuestro software
// Nosotros podemos crear nuestros propios paquetes de software de Node o usar paquetes creados por otras personas

// LINK DE PAQUETES DE NPM: https://www.npmjs.com
// Para verificar versión existente de NPM en nuestra computadora ejecutamos el comando 'npm -v' o 'npm --version'
// Esto nos debe regresar un número el cual indica la versión de nuestro NPM instalado

// PRIMEROS PASOS CON NPM:
// Para iniciar un paquete de NPM
// 1. Una vez dentro del directorio de trabajo desde la terminal e iniciamos un paquete de node siguiendo los pasos con el comando:
//            "npm init"
// 2. Validar la inicialización adecuada del paquete de node una vez que se crea el archivo:
//            "package.json"
// {
//   "name": "02_nodejs-npm",
//   "version": "1.0.0",
//   "description": "Introducción a NodeJS y NPM",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [
//     "introduccion",
//     "nodejs",
//     "npm"
//   ],
//   "author": "Pedro A. González",
//   "license": "ISC"
// }

// NPM SCRIPTS:
// Los scripts nos permiten correr diferentes comandos mandando a llamar palabras clave
// Por ejemplo: si queremos empezar nuestro programa
//              en vez de nosotros escribir "node index.js"
//              podríamos decir "npm start" y correría el comando "node index.js" por nosotros
// Para esto tendríamos que agregar el script "start" en nuestro "package.json" y nos quedaría así:
// {
//   ...
//   "scripts": {
//     "start": "node index.js",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//  ...
// }
// Ya que agregamos este script podemos correrlo directamente en la terminal escribiendo:
//            "npm start"
// Debemos ver en nuestra terminal "Hola desde index! 👋".
// Hemos aprendido a crear y a empezar nuestro programa de Node con un script! 🥳
