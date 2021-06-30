console.log('Hola desde index! 👋');

// NPM PAQUETES EXTERNOS
// Para agregar ciertas funcionalidades desde nuestro programa en NODE podemos instalar paquetes adicionales.
// 1. Desde la terminal podemos instalar un paquete haciendo uso del comando "npm install" o "npm i" + el nombre del paquete.
//    Un paquete muy sencillo que podemos usar para realizar peticiones es REQUEST (como lo haríamos con FETCH pero fuera del navegador)
//    Instalamos el paquete request como se muestra en el ejemplo de su documentación: https://www.npmjs.com/package/request
//            "npm i request"
//    (Este paquete se encuentra descontinuado pero lo usaremos por su sencillez para fines prácticos de esta demostración)
// 2. Una vez que se instaló el paquete notaremos que se creó una carpeta nueva llamada "node_modules".
//    Esta carpeta incluye todos los paquetes que node nos permite usar para agregar funcionalidades a nuestro programa.
//    Sin embargo, como esta carpeta sólo se requiere cuando ejecutamos el programa y ocupa espacio en memoria, podemos ocultarla haciendo uso del archivo oculto:
//            ".gitignore"
//    En este archivo agregamos todos los elementos que no queremos que se incluyan en nuestro repositorio git para evitar que consuman espacio de memoria, por lo que agregaremos solamente:
//            "node_modules"

// Importamos el módulo o la librería a utilizar
// Este módulo será buscado en la carpeta node_modules
// Copy paste de ejemplo request: https://www.npmjs.com/package/request#super-simple-to-use
const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('🛑 error:', error); // Print the error if one occurred
//   console.log('🚦 statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('📑 body:', body); // Print the HTML for the Google homepage.
// });

// Estructura básica de una petición
// request(url, callback(error, response, body))

// EJEMPLO SWAPI
// Haciendo peticiones con el API de Star Wars: https://swapi.dev/api/
// Para revisar adecuadamente un body en formato JSON podemos utilizar una herramienta como http://jsoneditoronline.org
// Esta herramienta nos permite "leer" el cuerpo de un json en código, como un árbol de información más "legible" para los humanos

// const URL_SWAPI = 'https://swapi.dev/api/';
// const URL_SWAPI = 'https://swapi.dev/api/people';
// const URL_SWAPI = 'https://swapi.dev/api/people/1'; // Luke Skywalker
// const URL_SWAPI = 'https://swapi.dev/api/people/2'; // C-3P0
const URL_SWAPI = 'https://swapi.dev/api/people/4'; // Darth Vader

request.get(URL_SWAPI, (err, res, body) => {
  if(res.statusCode !== 200) throw new Error('La petición fue rechazada: ' + res.statusCode); // Validamos la respuesta del servidor
  // console.log(body); // El body viene como una JSON el cual se interpreta como una cadena enorme
  const json = JSON.parse(body); // Para acceder a la información del body, tenemos que convertirlo en un objeto utilizable por JavaScript
  // console.log(json); // La variable json es un objeto con los datos que vienen del body, al que ya podemos acceder
  // console.log(json.name);
  // console.log(json.birth_year);
  console.log(`Hola, mi nombre es: ${json.name} y nací el año ${json.birth_year}`);
})


// EJEMPLO POKEAPI
// Haciendo peticiones con el API de Pokemon: https://pokeapi.co/api/v2/pokemon
// Traer un pokemon e imprimir su nombre

const URL_POKEAPI_DITTO = 'https://pokeapi.co/api/v2/pokemon/ditto';
const URL_POKEAPI_BULBASAUR = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const URL_POKEAPI_PIKACHU = 'https://pokeapi.co/api/v2/pokemon/pikachu';

request.get(URL_POKEAPI_PIKACHU, (err, res, body) => {
    console.log(res.statusCode); // Imprimimos el código de status de la respuesta del servidor
    const pokemon = JSON.parse(body); // Procesamos el cuerpo de la respuesta como un objeto JSON
    console.log(pokemon); // Imprimimos el objeto pokemón que nos trae
    console.log(`Mi pokemon es ${pokemon.name}`);
});

const URL_POKEMONES = 'https://pokeapi.co/api/v2/pokemon';
request(URL_POKEMONES, (error, response, body) => {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  const pokemones = JSON.parse(body);
  pokemones.results.forEach(pokemon => console.log(`Hola soy ${pokemon.name}!`))
});
