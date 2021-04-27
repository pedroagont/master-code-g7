console.log('Hola desde script.js! 👋');

// JSON
// JavaScript Object Notation
// JSON es un formato de texto que se usa por excelencia para almacenar y/o compartir data entre cliente y servidor, entre programas en general
// La extensión del archivo JSON es ".json"
// El tipo de MIME (Multipurpose Internet Mail Extension) del formato JSON como "application/json"

// SINTÁXIS BÁSICA JSON
// { "propiedad": "valor" }

// Objeto de JavaScript
let objetoPersona = {
  nombre: 'Pedro',
  edad: 27
}
console.log(objetoPersona);

// El mismo objeto en formato JSON
let objetoPersonaJSON = {
  "nombre": "Pedro",
  "edad": 27
}
console.log(objetoPersonaJSON); // JavaScript YA lo interpreta como un objeto

// MÉTODOS JSON
// JSON.parse(json) -> Convierte el formato JSON a un objeto literal de JS
// JSON.stringify(objeto) -> Convierte un objeto literal de JS a formato JSON

// Objeto literal de JS
let mascota = {
  nombre: 'Snoopy',
  raza: 'Beagle',
  estaVivo: true
}
console.log(mascota);

// CONVERTIR OBJETO -> JSON
let mascotaJSON = JSON.stringify(mascota);
console.log(mascotaJSON);

// CONVERTIR JSON -> OBJETO
let mascotaJS = JSON.parse(mascotaJSON);
console.log(mascotaJS);

// TIPOS DE DATOS VÁLIDOS EN JSON
// string
// number
// object (contener valores de json válido)
// arreglos
// booleanos
// null

// TIPOS DE DATOS NO VÁLIDOS EN JSON
// funciones
// fechas (en formatos específicos sí, pero no cómo lo harías con JS tradicional eg: new Date().getFullYear() esto marcaría error)
// undefined

// FETCH
// El método fetch() nos permite hacer peticiones directamente desde el navegador
// Este método nos regresa una PROMESA, es decir, una propiedad que tiene 3 estados: pendiente, resuelta, rechazada

// SINTAXIS BÁSICA
// fetch(url, opciones) // la url es a donde se hará la petición, las opciones es en caso de que queramos cambiar de método o agregar credenciales de acceso
// .then(respuesta => {
//   // manejamos la respuesta
// })
// .then(data => {
//   // manejamos la data
// })
// .catch(error => {
//   // manejamos el error
// })

// EJEMPLO TRAYENDO UN JSON LOCAL
const JSON_LOCAL = 'usuarios.json';

fetch(JSON_LOCAL)
  .then(response => {
    console.log(response);
    console.log(response.status);
    return response.json();
  })
  .then(usuarios => {
    console.log(usuarios);
    // console.log(usuarios[0]);
    // console.log(usuarios[1]);

    // Imprimiendo con un ciclo for
    for (var i = 0; i < usuarios.length; i++) {
      console.log(usuarios[i]);
    }

    // Imprimiendo con un forEach
    usuarios.forEach(usuario => console.log(usuario));
  })
  .catch(error => {
    console.log(error);
  })

// TRAYENDO UN JSON REMOTO CON FETCH
const URL_POKEAPI = 'https://pokeapi.co/api/v2/pokemon';
fetch(URL_POKEAPI)
  .then(response => response.json())
  .then(pokemones => pokemones.results.forEach(pokemon => console.log(`Hola soy ${pokemon.name}`)))
  .catch(error => console.log(error))

// También podemos traer y procesar texto con respuesta.text()
const txtLocal = 'texto.txt';
fetch(txtLocal)
  .then(response => response.text())
  .then(texto => console.log(texto))
  .catch(error => console.log(error))

// También podemos traer y procesar imágenes con respuesta.blob()
const imgLocal = 'imagen.jpg';
fetch(imgLocal)
  .then(response => response.blob())
  .then(imagen => console.log(imagen))
  .catch(error => console.log(error))
