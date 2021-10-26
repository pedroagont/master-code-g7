const db = require('../db');

const createUser = (req, res) => {
  db('users')
    .insert({ email: req.body.email, password: req.body.password })
    .returning('*')
    .then(result => {
      return res
        .status(200)
        .send({ message: 'Hola desde el server con POST!', user: result[0] });
    })
    .catch(err => console.error(err.stack));
};

const getAllUsers = (req, res) => {
  // SELECT * FROM users
  db.select('*')
    .from('users')
    .then(result => {
      return res
        .status(200)
        .send({ message: 'Hola desde el server con GET!', users: result });
    })
    .catch(err => console.error(err.stack));
};

module.exports = { createUser, getAllUsers };
