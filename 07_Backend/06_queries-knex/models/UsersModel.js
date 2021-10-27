const db = require('../db');

const createUser = body => {
  return db('users')
    .insert(body)
    .returning('*')
    .then(result => result[0]);
};

const getAllUsers = () => {
  return db
    .select('*')
    .from('users')
    .where({ is_active: true })
    .then(result => result);
};

const getUserById = id => {
  return db
    .select('*')
    .from('users')
    .where({ user_id: id, is_active: true })
    .then(result => result[0]);
};

const updateUser = (id, body) => {
  return db('users')
    .update(body)
    .where({ user_id: id })
    .returning('*')
    .then(result => result[0]);
};

const deleteUser = id => {
  return db('users')
    .update({ is_active: false })
    .where({ user_id: id })
    .returning('*')
    .then(result => result[0]);
};

const destroyUser = id => {
  return db('users')
    .where({ user_id: id, is_active: false })
    .delete();
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  destroyUser
};
