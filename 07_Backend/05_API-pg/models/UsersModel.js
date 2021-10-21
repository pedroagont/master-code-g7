const { Pool } = require('pg');

const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'qwe123',
  port: 5432
});

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
    .query('SELECT * FROM users')
    .then(result => result.rows)
    .catch(err => console.error(err.stack));
};

const getUserById = id => {
  return db
    .query('SELECT * FROM users WHERE user_id = $1', [id])
    .then(result => result.rows[0])
    .catch(err => console.error(err.stack));
};

const updateUser = (email, password, id) => {
  return db
    .query(
      'UPDATE users SET email = $1, password = $2 WHERE user_id = $3 RETURNING *',
      [email, password, id]
    )
    .then(result => result.rows[0])
    .catch(err => console.error(err.stack));
};

const updatePartialUser = (property, value, id) => {
  return db
    .query(`UPDATE users SET ${property} = '${value}' WHERE user_id = ${id}`)
    .then(result => result.rows)
    .catch(err => console.error(err.stack));
};

const deleteUser = id => {
  return db
    .query('DELETE FROM users WHERE user_id = $1', [id])
    .then(result => result.rows)
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
