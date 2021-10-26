const { UsersModel } = require('../models');

const createUser = async (req, res) => {
  try {
    const user = await UsersModel.createUser(req.body);
    return res
      .status(200)
      .send({ message: 'Hola desde el server con POST!', user });
  } catch (e) {
    return res
      .status(400)
      .send({ message: 'Error al crear usuario', error: e.stack });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UsersModel.getAllUsers();
    return res
      .status(200)
      .send({ message: 'Hola desde el server con GET!', users });
  } catch (e) {
    return res
      .status(400)
      .send({ message: 'Error al traer usuarios', error: e.stack });
  }
};

module.exports = { createUser, getAllUsers };
