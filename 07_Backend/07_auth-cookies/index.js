// MODULES
const express = require('express');
const app = express();
const PORT = 8080;
const cookieSession = require('cookie-session');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar middleware de cookie-session
// Más información: http://expressjs.com/en/resources/middleware/cookie-session.html
app.use(
  cookieSession({
    name: 'session',
    keys: ['Hola', 'Master', 'Code', 'G7'],

    // Cookie Options
    maxAge: 10 * 60 * 1000 // Se recomienda entre 10-15 min de duración para evitar vulnerabilidades
  })
);

// Simulando una base de datos
const books = [];

// ENDPOINTS
app.get('/', (req, res) => {
  // Crear/actualizar cookie views
  req.session.views = (req.session.views || 0) + 1;
  res.status(200).send({ message: 'Hola mundo!', cookies: req.session });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  // Simulando que buscamos el ID en la base de datos
  const userID = 'qwe123';
  // Crear cookie
  req.session.userID = userID;
  res.status(200).send({ message: 'Hola desde login!', cookies: req.session });
});

app.post('/logout', (req, res) => {
  // Eliminar cookies
  req.session = null;
  res.status(200).send({ message: 'Hola desde logout!', cookies: req.session });
});

app.get('/books', (req, res) => {
  res.status(200).send({ message: 'Aquí están tus libros', books });
});

app.post('/books', (req, res) => {
  if (!req.session.userID) {
    return res
      .status(400)
      .send({ message: 'Debes haber iniciado sesión para crear un libro' });
  }

  const { name, author } = req.body;

  if (!name || !author) {
    return res.status(400).send({ message: 'Ingresar name y author' });
  }

  const book = {
    id: Math.floor(Math.random() * 1000),
    name,
    author
  };

  books.push(book);

  res.status(200).send({ message: 'Libro creado satisfactoriamente!', book });
});

// LISTENER
app.listen(PORT, () => console.log('Servidor corriendo'));
