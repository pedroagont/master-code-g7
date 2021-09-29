// MODULES
const express = require('express');
const app = express();
const port = 4200;

// MIDDLEWARES
app.use(express.json()); // para procesar json

// RETO 1
// Agrega un endpoint '/api' que responda a una petición de tipo GET con un código de estado 200 y el siguiente json:
//             { 'mensaje':'hola mundo' }

// RETO 2
// Agrega un endpoint '/api/suma' que responda a una petición de tipo GET con la suma de dos números que reciba mediante las querys num1 y num2. El servidor debe responder con un código de estado 200 y un json como el siguiente:
//             { 'resultado': 7 }

// RETO 3
// Agrega un endpoint '/api/usuario' que responda a una petición de tipo GET con el nombre que sea recibido a través de params. El servidor debe responder con un código de estado 200 y un json como este:
//             { 'usuario': 'Edwin' }

// RETO 4
// Agrega un endpoint '/api/swapi' que responda a una petición de tipo GET con el personaje solicitado de https://swapi.dev/. El cliente debe mandar el número de personaje mediante params. La respuesta del servidor debe lucir algo así
//             { 'personaje': {
//             	'name': 'Luke Skywalker',
//                         ...,
//             }}

// RETO 5
// Agrega un endpoint '/api/body que responda a una petición de tipo PUT con el body que el cliente envíe al hacer la petición. Ejemplo: cliente envía un body desde postman o insomnia que luce como este:
//             { "nombre": "Maui", "ocupacion": "Sensei" }
//
// Entonces, el servidor debe responder con un objeto idéntico al que envía el cliente, junto con un status de respuesta 200.

// RETO 6
// Vuelve a hacer el ejercicio 2 pero enviando num1 y num2 desde el body, a través de una petición POST que responda con el status 200

// RETO 7
// Crea un endpoint para una petición de tipo DELETE donde envíes un ID (un número cualquiera) a través de params.
//
// Si el param contiene el ID 3, entonces responde con un status 200 y el mensaje “se ha eliminado el objeto con ID 3”, de lo contrario, si envían cualquier otro número como ID, responde con un status 404 y el mensaje “No se encontró el objeto con el ID especificado”.

//LISTENER
app.listen(port, () => console.log(`Listening @ http://localhost:${port}`));
