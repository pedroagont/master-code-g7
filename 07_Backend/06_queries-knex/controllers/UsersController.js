const { UsersModel } = require('../models');

const createUser = async (req, res) => {
  try {
    const user = await UsersModel.createUser(req.body);
    return res
      .status(200)
      .send({ message: 'Hola desde el server con POST!', user });
  } catch (error) {
    return res.status(400).send({ message: 'Error al crear usuario', error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UsersModel.getAllUsers();
    return res
      .status(200)
      .send({ message: 'Hola desde el server con GET!', users });
  } catch (error) {
    return res.status(400).send({ message: 'Error al traer usuarios', error });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UsersModel.getUserById(id);
    return res
      .status(200)
      .send({ message: 'Hola desde el server con GET!', user });
  } catch (error) {
    return res
      .status(404)
      .send({ message: 'Error al traer usuario', error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UsersModel.updateUser(id, req.body);
    return res
      .status(200)
      .send({ message: 'Hola desde el server con POST!', user });
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error al actualizar usuario', error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await UsersModel.deleteUser(id);
    return res.status(204).send();
  } catch (error) {
    return res
      .status(404)
      .send({ message: 'Error al eliminar usuario', error: error.message });
  }
};

const destroyUser = async (req, res) => {
  try {
    const { id } = req.params;
    await UsersModel.destroyUser(id);
    return res.status(204).send();
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error al destruir usuario', error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  destroyUser
};
