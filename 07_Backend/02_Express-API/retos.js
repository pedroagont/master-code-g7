// MODULES
const express = require('express');
const app = express();
const port = 4200;

// MIDDLEWARES
app.use(express.json()); // para procesar json

// -----------------------------> RETO 1
// Agrega un endpoint '/api' que responda a una petición de tipo GET con un código de estado 200 y el siguiente json:
//             { 'mensaje':'hola mundo' }
//

app.get('/api', (req, res) => {
  res.status(200).send({ mensaje: 'Hola Mundo' });
});

// GET http://localhost:4200/api
// {
//   "mensaje": "Hola Mundo"
// }

// -----------------------------> RETO 2
// Agrega un endpoint '/api/suma' que responda a una petición de tipo GET con la suma de dos números que reciba mediante las querys num1 y num2. El servidor debe responder con un código de estado 200 y un json como el siguiente:
//             { 'resultado': 7 }

app.get('/api/suma', (req, res) => {
  // console.log(req.query);
  // const num1 = req.query.num1;
  // const num2 = req.query.num2;
  const { num1, num2 } = req.query;
  res.status(200).send({ resultado: Number(num1) + Number(num2) });
});

// GET http://localhost:4200/api/suma?num1=10&num2=20
// {
//   "resultado": 30
// }

// -----------------------------> RETO 3
// Agrega un endpoint '/api/usuario' que responda a una petición de tipo GET con el nombre que sea recibido a través de params. El servidor debe responder con un código de estado 200 y un json como este:
//             { 'usuario': 'Edwin' }

app.get('/api/usuario/:nombre', (req, res) => {
  // console.log(req.params);
  return res.status(200).send({ usuario: req.params.nombre });
});

// GET http://localhost:4200/api/usuario/Jorge
// {
//   "usuario": "Jorge"
// }

// -----------------------------> RETO 4
// Agrega un endpoint '/api/swapi' que responda a una petición de tipo GET con el personaje solicitado de https://swapi.dev/. El cliente debe mandar el número de personaje mediante params. La respuesta del servidor debe lucir algo así
//             { 'personaje': {
//             	'name': 'Luke Skywalker',
//                         ...,
//             }}

const axios = require('axios');

// Con then/catch
// app.get('/api/swapi/:id', (req, res) => {
//   const URL_SWAPI = `https://swapi.dev/api/people/${req.params.id}`;
//   axios
//     .get(URL_SWAPI)
//     .then(response => {
//       if (response.status === 200) {
//         res.status(200).send({ personaje: response.data });
//       }
//     })
//     .catch(error => console.log(error));
// });

// Con async/await
app.get('/api/swapi/:id', async (req, res) => {
  const URL_SWAPI = `https://swapi.dev/api/people/${req.params.id}`;
  try {
    const response = await axios.get(URL_SWAPI);
    if (response.status === 200) {
      res.status(200).send({ personaje: response.data });
    }
  } catch (e) {
    console.log(e);
  }
});

// GET http://localhost:4200/api/swapi/1
// {
//   "personaje": {
//     "name": "Luke Skywalker",
//     ...
//   }
// }

// -----------------------------> RETO 5
// Agrega un endpoint '/api/body' que responda a una petición de tipo PUT con el body que el cliente envíe al hacer la petición. Ejemplo: cliente envía un body desde postman o insomnia que luce como este:
//             { "nombre": "Pedrin", "ocupacion": "Sensei" }
// Entonces, el servidor debe responder con un objeto idéntico al que envía el cliente, junto con un status de respuesta 200.

app.put('/api/body', (req, res) => {
  // console.log(req.body);
  res.status(200).send({ ...req.body });
});

// PUT http://localhost:4200/api/body
// {
//   "nombre": "Pedrin",
//   "ocupacion": "Sensei"
// }
//
// RESPUESTA
// {
//   "nombre": "Pedrin",
//   "ocupacion": "Sensei"
// }

// -----------------------------> RETO 6
// Vuelve a hacer el ejercicio 2 pero enviando num1 y num2 desde el body, a través de una petición POST que responda con el status 200

app.post('/api/suma', (req, res) => {
  // console.log(req.body);
  const { num1, num2 } = req.body;
  res.status(200).send({ resultado: Number(num1) + Number(num2) });
});

// POST http://localhost:4200/api/suma
// {
// 	"num1": 10,
// 	"num2": 15
// }
//
// RESPUESTA
// {
//   "resultado": 25
// }

// -----------------------------> RETO 7
// Crea un endpoint para una petición de tipo DELETE donde envíes un ID (un número cualquiera) a través de params.
// Si el param contiene el ID 3, entonces responde con un status 200 y el mensaje “se ha eliminado el objeto con ID 3”, de lo contrario, si envían cualquier otro número como ID, responde con un status 404 y el mensaje “No se encontró el objeto con el ID especificado”.

app.delete('/:id', (req, res) => {
  // console.log(req.params);
  req.params.id === '3'
  ? res.status(200).send({ message: 'Se ha eliminado el objeto con ID 3' })
  : res.status(404).send({ message: 'No se encontró el objeto con el ID especificado' });
});

//LISTENER
app.listen(port, () => console.log(`Listening @ http://localhost:${port}`));
