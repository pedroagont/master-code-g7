const db = require('../db');

const createUser = (req, res) => {
  db('users')
    .insert({ email: req.body.email, password: req.body.password })
    .returning('*')
    .then(result => {
      const user = result[0];
      return res
        .status(200)
        .send({ message: 'Hola desde el server con POST!', user });
    })
    .catch(err => console.error(err.stack));
};

const getAllUsers = (req, res) => {
  const users = [
    { email: 'margarito@email.com', password: 'margarito123' },
    { email: 'fulanito@email.com', password: 'fulanito123' }
  ];
  return res
    .status(200)
    .send({ message: 'Hola desde el server con GET!', users });
};

module.exports = { createUser, getAllUsers };
