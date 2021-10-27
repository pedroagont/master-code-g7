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
    .where({ is_active: true });
};

const getUserById = async id => {
  const user = await db
    .select('*')
    .from('users')
    .where({ user_id: id, is_active: true })
    .then(result => result[0]);

  if (!user) {
    throw new Error('El usuario que quieres traer no existe');
  }
  return user;
};

const updateUser = async (id, body) => {
  const user = await db
    .select('*')
    .from('users')
    .where({ user_id: id, is_active: true })
    .then(result => result[0]);

  if (!user) {
    throw new Error('El usuario que quieres actualizar no existe');
  }

  return db('users')
    .update(body)
    .where({ user_id: id })
    .returning('*')
    .then(result => result[0]);
};

const deleteUser = async id => {
  const user = await db
    .select('*')
    .from('users')
    .where({ user_id: id, is_active: true })
    .then(result => result[0]);

  if (!user) {
    throw new Error('El usuario que quieres eliminar no existe');
  }

  return db('users')
    .update({ is_active: false })
    .where({ user_id: id })
    .returning('*')
    .then(result => result[0]);
};

const destroyUser = async id => {
  const user = await db
    .select('*')
    .from('users')
    .where({ user_id: id, is_active: false })
    .then(result => result[0]);

  if (!user) {
    throw new Error(
      'El usuario que quieres destruir aún se encuentra activo o no existe'
    );
  }
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
