const db = require('../db');

const createUser = (email, password) => {
  return db
    .query('INSERT INTO users (email, password) VALUES($1, $2) RETURNING *', [
      email,
      password
    ])
    .then(result => result.rows[0])
    .catch(err => console.error(err.stack));
};

const getAllUsers = () => {
  return db
    .query('SELECT * FROM users WHERE is_active = true')
    .then(result => result.rows)
    .catch(err => console.error(err.stack));
};

const getUserById = id => {
  return db
    .query('SELECT * FROM users WHERE id = $1 AND is_active = true', [id])
    .then(result => result.rows[0])
    .catch(err => console.error(err.stack));
};

const updateUser = (email, password, id) => {
  return db
    .query(
      'UPDATE users SET email = $1, password = $2 WHERE id = $3 RETURNING *',
      [email, password, id]
    )
    .then(result => result.rows[0])
    .catch(err => console.error(err.stack));
};

const updatePartialUser = (property, value, id) => {
  return db
    .query(
      `UPDATE users SET ${property} = '${value}' WHERE id = ${id} RETURNING *`
    )
    .then(result => result.rows[0])
    .catch(err => console.error(err.stack));
};

const deleteUser = id => {
  return db
    .query('UPDATE users SET is_active = false WHERE id = $1', [id])
    .then(result => result.rows)
    .catch(err => console.error(err.stack));
};

const destroyUser = id => {
  return db
    .query('DELETE FROM users WHERE id = $1', [id])
    .then(result => result.rows)
    .catch(err => console.error(err.stack));
};

const getUserByEmail = email => {
  return db
    .query('SELECT * FROM users WHERE email = $1 AND is_active = true', [email])
    .then(result => result.rows[0])
    .catch(err => console.error(err.stack));
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  updatePartialUser,
  deleteUser,
  destroyUser,
  getUserByEmail
};
