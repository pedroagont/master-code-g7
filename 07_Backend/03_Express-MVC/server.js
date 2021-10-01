// MODULES
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// MIDDLEWARES
app.use(express.json()); // para procesar json
app.use(express.urlencoded({ extended: true })); // para procesar documentos, archivos, imagenes, video, etc

// ENDPOINTS
app.get('/', (req, res) => {
  res.status(200).send('Hola mundo!');
});

// CRUD USUARIOS
// Create - POST
app.post('/api/v1/users', (req, res) => {
  // Lógica de create
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  const user = {
    id: Math.floor(Math.random() * 100),
    ...req.body
  };

  res.status(201).send({ message: `Usuario creado con el id: ${user.id}!` });
});

// Read - GET
app.get('/api/v1/users', (req, res) => {
  // Lógica de read all
  res.status(200).send({ message: 'Estos son tus usuarios!' });
});

app.get('/api/v1/users/:id', (req, res) => {
  // Lógica de read one
  const { id } = req.params;
  res.status(200).send({ message: `Este es tu usuario con el id: ${id}!` });
});

// Update - PUT/PATCH
app.put('/api/v1/users/:id', (req, res) => {
  // Lógica de update
  const { id } = req.params;
  res.status(200).send({ message: `Actualizado el usuario con el id: ${id}!` });
});

app.patch('/api/v1/users/:id', (req, res) => {
  // Lógica de partial update
  const { id } = req.params;
  res
    .status(200)
    .send({ message: `Actualizado parcialmente el usuario con el id: ${id}!` });
});

// Delete - DELETE
app.delete('/api/v1/users/:id', (req, res) => {
  // Lógica de delete
  const { id } = req.params;
  res.status(204).send();
});

// LISTENER
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
