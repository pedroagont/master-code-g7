const db = require('../db');

const createUser = body => {
  return db('users')
    .insert({ email: body.email, password: body.password })
    .returning('*')
    .then(result => result[0])
    .catch(err => console.error(err.stack));
};

const getAllUsers = () => {
  return db
    .select('*')
    .from('users')
    .then(result => result)
    .catch(err => console.error(err.stack));
};

module.exports = { createUser, getAllUsers };
