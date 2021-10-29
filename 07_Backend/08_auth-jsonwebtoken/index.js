// MODULES
const express = require('express');
const app = express();
const PORT = 8080;
const jwt = require('jsonwebtoken');

// SIMULAMOS UNA BASE DE DATOS
const db = {
  // Simulamos una colección 'tweets'
  tweets: [],

  // Simulamos una colección 'users'
  users: [
    { userID: 1, email: 'usuario1@correo.com', password: 'p4ssw0rd123' },
    { userID: 2, email: 'usuario2@correo.com', password: 'p4ssw0rd123' }
  ]
};

// MIDDLEWARES
app.use(express.json());

// ENDPOINTS
// Inicio/Home/Raíz -> GET /
app.get('/', (req, res) => {
  // Para crear un token usamos el método sign(payload, secreto)
  const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

  // Para decodificar un token y verificar su validez, usamos el método verify(token, secreto)
  const decoded = jwt.verify(token, 'shhhhh');

  return res.status(200).send({ message: 'Hola mundo! 👋', token, decoded });
});

// Hacer login -> POST /login
app.post('/login', (req, res) => {
  // Desestructuramos email y password del body
  const { email, password } = req.body;

  // Si email o password no existen retornamos con un mensaje de error
  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  // Buscamos el usuario en la base de datos con su email
  const user = db['users'].find(user => user.email === email);

  // Si el usuario no existe retornamos con un mensaje de error
  if (!user) {
    return res.status(404).send({ message: 'El usuario no existe' });
  }

  // Si los passwords no coinciden retornamos con un mensaje de error
  if (user.password !== password) {
    return res.status(400).send({ message: 'Password incorrecto' });
  }

  // En caso que todas las validaciones hayan sido satisfactorias, creamos un payload con el id y el email del usuario
  const payload = {
    userID: user.userID,
    email: user.email
  };

  // Generamos un token con el payload y nuestro secreto
  const token = jwt.sign(payload, 'shhhhhhhecretoooooo123');

  return res.status(200).send({ message: 'Bienvenido!', token });
});

// Traer tweets -> GET /tweets
app.get('/tweets', (req, res) => {
  return res
    .status(200)
    .send({ message: 'Aquí están los tweets!', tweets: db['tweets'] });
});

// Crear un tweet -> POST /tweets
app.post('/tweets', (req, res) => {
  // Si el encabezado de autorización no existe, entonces retornamos con un mensaje de error
  if (!req.headers['authorization']) {
    return res
      .status(400)
      .send({ message: 'Debes iniciar sesión para crear un tweet' });
  }

  // Para extraer el token, se debe acceder al encabezado 'Authorization' (en minúsculas)
  // ----------> req.headers['authorization'] = 'Bearer ELTOKEN'

  // Separamos los elementos del encabezado 'Bearer' y 'ELTOKEN' por medio del espacio ' '
  // ----------> token.split(' ') = ["Bearer", "ELTOKEN"]

  // Tomamos el segundo elemento del arreglo de palabras (posición 1)
  // ----------> token.split(' ')[1] = "ELTOKEN"
  const token = req.headers['authorization'].split(' ')[1];

  if (!token) {
    return res.status(400).send({ message: 'Token de autorización no existe' });
  }

  // Creamos un objeto tokenValido en donde almacenaremos el token decodificado
  let tokenValido = {};
  // Para decodificar y validar un token usamos el método verify(token, secreto)
  jwt.verify(token, 'shhhhhhhecretoooooo123', (err, decoded) => {
    // Si existe algún error durante la verificación del token, retornamos con un mensaje de error
    if (err) {
      return res
        .status(400)
        .send({ message: 'Token de autorización no es válido' });
    }
    // En caso que la decodificación del token sea válida, asignamos ese valor al objeto tokenValido
    tokenValido = decoded;
  });

  // Una vez que ya verificamos la validez del token del usuario, desestructuramos el content del body de la petición
  const { content } = req.body;

  // Si content no existe, retornamos con un mensaje de error
  if (!content) {
    return res.status(400).send({ message: 'Ingresar content' });
  }

  // En caso que todas las validaciones hayan sido satisfactorias, creamos un objeto tweet
  const tweet = {
    tweetID: Math.floor(Math.random() * 1000), // id del tweet
    content: content, // nombre del tweet
    userID: tokenValido.userID, // el id del usuario que creó el tweet
    createdAt: new Date() // la fecha de creación del tweet
  };

  // Ingresamos el nuevo tweet en la base de datos
  db['tweets'].push(tweet);

  return res
    .status(200)
    .send({ message: 'Tweet creado satisfactoriamente!', tweet });
});

// LISTEN
app.listen(PORT, () => console.log('Servidor corriendo 😎'));
