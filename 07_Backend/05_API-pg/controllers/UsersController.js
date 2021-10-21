const { Pool } = require('pg');

const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'qwe123',
  port: 5432
});

const createUser = (req, res) => {
  // Lógica de create
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  // A PARTIR DE AQUÍ VA LA CAPA QUE ACCEDE A LA BASE DE DATOS (MODELS)
  db.query('INSERT INTO users (email, password) VALUES($1, $2) RETURNING *', [
    email,
    password
  ])
    .then(result => {
      return res
        .status(201)
        .send({ message: 'Usuario creado!', user: result.rows[0] });
    })
    .catch(err => console.error(err.stack));
};

const getAllUsers = (req, res) => {
  // Lógica de read all

  // A PARTIR DE AQUÍ VA LA CAPA QUE ACCEDE A LA BASE DE DATOS (MODELS)
  db.query('SELECT * FROM users')
    .then(result => {
      return res
        .status(200)
        .send({ message: 'Estos son tus usuarios!', users: result.rows });
    })
    .catch(err => console.error(err.stack));
};

const getUserById = (req, res) => {
  // Lógica de read one
  const { id } = req.params;

  // A PARTIR DE AQUÍ VA LA CAPA QUE ACCEDE A LA BASE DE DATOS (MODELS)
  db.query('SELECT * FROM users WHERE user_id = $1', [id])
    .then(result => {
      return res.status(200).send({
        message: `Este es tu usuario con el id: ${id}!`,
        user: result.rows[0]
      });
    })
    .catch(err => console.error(err.stack));
};

const updateUser = (req, res) => {
  // Lógica de update
  const { id } = req.params;
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  // A PARTIR DE AQUÍ VA LA CAPA QUE ACCEDE A LA BASE DE DATOS (MODELS)
  db.query(
    'UPDATE users SET email = $1, password = $2 WHERE user_id = $3 RETURNING *',
    [email, password, id]
  )
    .then(result => {
      return res.status(200).send({
        message: `Actualizado el usuario con el id: ${id}!`,
        user: result.rows[0]
      });
    })
    .catch(err => console.error(err.stack));
};

const updatePartialUser = (req, res) => {
  // Lógica de partial update
  const { id } = req.params;
  const { property, value } = req.body;

  if (!property || !value) {
    return res.status(400).send({ message: 'Ingresar property y value' });
  }

  // A PARTIR DE AQUÍ VA LA CAPA QUE ACCEDE A LA BASE DE DATOS (MODELS)
  db.query(
    `UPDATE users SET ${property} = '${value}' WHERE user_id = ${id} RETURNING *`
  )
    .then(result => {
      return res.status(200).send({
        message: `Parcialmente actualizado el usuario con el id: ${id}!`,
        user: result.rows[0]
      });
    })
    .catch(err => console.error(err.stack));
};

const deleteUser = (req, res) => {
  // Lógica de delete
  const { id } = req.params;

  // A PARTIR DE AQUÍ VA LA CAPA QUE ACCEDE A LA BASE DE DATOS (MODELS)
  db.query('DELETE FROM users WHERE user_id = $1', [id])
    .then(result => {
      return res.status(204).send();
    })
    .catch(err => console.error(err.stack));
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  updatePartialUser,
  deleteUser
};
