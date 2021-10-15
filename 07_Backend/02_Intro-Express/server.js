// HOLA MUNDO EN EXPRESSJS: http://expressjs.com/es/starter/hello-world.html

const express = require('express');
const app = express();
const port = 3000;

// Para no tener que terminar el proceso y volver a correrlo en caso de cambios usamos nodemon: https://www.npmjs.com/package/nodemon
// npm install --save-dev nodemon

// MIDDLEWARES
// Funciones y métodos que sirven como intermediarios entre las peticiones y las respuestas
app.use(express.json()); // Para permitir el paso de archivos formato application/json en nuestro servidor
app.use(express.urlencoded({ extended: true })); // Para permitir el paso de archivos formato application/x-www-form-urlencoded (documentos, imagenes, videos, etc)

// ENDPOINTS
// Cada una de las rutas para nuestras peticiones
app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

// Sintáxis básica de un endpoint
// app.metodo('/endpoint', callback(peticion, respuesta) {
//  Aquí hacemos algo con el objeto petición (lo que viene del cliente)
//  Respondemos las peticiones a este endpoint con el objeto respuesta (lo que regresamos del servidor)
// })

app.get('/prueba', (req, res) => {
  res.status(202); // status() para responder con un código de respuesta específico
  res.send({ message: 'Hola desde prueba! 👋' }); // send() para responder desde el servidor
});

// CÓMO TRABAJAR CON QUERIES
// url.com/ruta?query1=algo&query2=otracosa
app.get('/tienda', (req, res) => {
  console.log(req.query);
  res.status(200).send(req.query);
});
// GET http://localhost:3000/tienda?marca=Apple&precioMin=15000&precioMax=25000
// {
//   "marca": "Apple",
//   "precioMin": "15000",
//   "precioMax": "25000"
// }

// CÓMO TRABAJAR CON PARAMS
// url.com/ruta/param1/param2
app.get('/autores/:nombre/:libro', (req, res) => {
  console.log(req.params);
  res.status(200).send(req.params);
});
// GET http://localhost:3000/autores/darwin/3
// {
//   "nombre": "darwin",
//   "libro": "3"
// }

// PETICIONES TIPO POST
// ¿Cómo le pasamos datos desde un body en JSON?
app.post('/perfil', (req, res) => {
  console.log(req.body);

  // const usuario = {
  //   id: Math.floor(Math.random() * 100),
  //   usuario: req.body.usuario,
  //   correo: req.body.correo,
  //   password: req.body.password
  // };

  const usuario = {
    id: Math.floor(Math.random() * 100),
    ...req.body
  };

  res.status(201).send(usuario);
});
// POST http://localhost:3000/perfil
// Body desde el cliente
// {
// 	"usuario": "pedroagont",
// 	"correo": "pgonzalez@post.com",
// 	"password": "qwerty123"
// }
// Respuesta desde el servidor
// {
//   "id": 9,
//   "usuario": "pedroagont",
//   "correo": "pgonzalez@post.com",
//   "password": "qwerty123"
// }

// LISTENER
// Crea la conexión entre el host y el puerto disponible para que nuestro servidor "escuche" o esté pendiente de las peticiones que le lleguen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
