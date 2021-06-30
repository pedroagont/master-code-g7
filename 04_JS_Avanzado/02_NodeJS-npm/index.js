console.log('Hola desde index.js! 👋');

// --------------------> NODEJS
// Es un entorno de ejecución de JavaScript orientado a eventos asíncronos
// Permite la ejecución de JavaScript FUERA del navegador
// Link de referencia: https://nodejs.org/es/about/

// PRIMEROS PASOS CON NODEJS
// 1. Verificar versión existente de node en nuestra computadora
//      'node -v' o 'node --version'
//    Esto nos debe regresar un número el cual indica la versión de nuestro NodeJS instalado
// 2. Para correr JavaScript fuera del navegador con NodeJS, hacemos uso del comando node seguido del archivo que queremos ejecutar
//      'node index.js'
//    Si el código se ejecutó bien, esto nos debe regresar:
//      'Hola desde index.js! 👋'
// FELICIDADES, hemos aprendido a correr JavaScript fuera del navegador con NodeJS


// --------------------> NPM
// NPM es el Node Package Manager, es decir, el manejador de paquetes de nodejs
// Link de referencia: https://www.npmjs.com

// PRIMEROS PASOS CON NPM
// 1. Verificar versión existente de NPM en nuestra computadora
//      'npm -v' o 'npm --version'
//    Esto nos debe regresar un número el cual indica la versión de nuestro NPM instalado
// 2. Para crear un paquete de NPM, inicializamos con el comando:
//      'npm init'
//    Validamos la creación correcta de nuestro paquete si el archivo package.json fue creado sin inconvientes

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
