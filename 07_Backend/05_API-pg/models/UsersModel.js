const createUser = (email, password, db) => {
  return db
    .query('INSERT INTO users (email, password) VALUES($1, $2) RETURNING *', [
      email,
      password
    ])
    .then(result => result.rows[0])
    .catch(err => console.error(err.stack));
};

module.exports = { createUser };
