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
    .where({ isActive: true });
};

const getUserById = id => {
  return db
    .select('*')
    .from('users')
    .where({ userID: id, isActive: true })
    .then(result => result[0]);
};

const getInactiveUserById = id => {
  return db
    .select('*')
    .from('users')
    .where({ userID: id, isActive: false })
    .then(result => result[0]);
};

const getUserByEmail = email => {
  return db
    .select('*')
    .from('users')
    .where({ email: email, isActive: true })
    .then(result => result[0]);
};

const updateUser = (id, body) => {
  return db('users')
    .update({ email: body.email, password: body.password })
    .where({ userID: id, isActive: true })
    .returning('*')
    .then(result => result[0]);
};

const deleteUser = id => {
  return db('users')
    .update({ isActive: false })
    .where({ userID: id })
    .returning('*')
    .then(result => result[0]);
};

const destroyUser = id => {
  return db('users')
    .where({ userID: id, isActive: false })
    .delete();
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getInactiveUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
  destroyUser
};
