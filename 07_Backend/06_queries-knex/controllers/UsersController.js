const { UsersModel } = require('../models');

const createUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  try {
    const emailExists = await UsersModel.getUserByEmail(email);
    if (emailExists) {
      return res
        .status(404)
        .send({ message: 'Ya existe un usuario registrado con ese correo' });
    }

    const body = { email, password };
    const user = await UsersModel.createUser(body);

    return res.status(200).send({ message: 'Usuario creado!', user });
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error al crear usuario', error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UsersModel.getAllUsers();
    return res.status(200).send({ message: 'Estos son los usuarios!', users });
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error al traer usuarios', error: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UsersModel.getUserById(id);
    if (!user) {
      return res.status(404).send({ message: 'Usuario no existe' });
    }

    return res.status(200).send({ message: 'Este es tu usuario!', user });
  } catch (error) {
    return res
      .status(404)
      .send({ message: 'Error al traer usuario', error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  try {
    const user = await UsersModel.getUserById(id);
    if (!user) {
      return res.status(404).send({ message: 'Usuario no existe' });
    }

    const body = { email, password };
    const updatedUser = await UsersModel.updateUser(id, body);

    return res
      .status(200)
      .send({ message: 'Usuario actualizado!', user: updatedUser });
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error al actualizar usuario', error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UsersModel.getUserById(id);
    if (!user) {
      return res.status(404).send({ message: 'Usuario no existe' });
    }

    await UsersModel.deleteUser(id);

    return res.status(204).send();
  } catch (error) {
    return res
      .status(404)
      .send({ message: 'Error al eliminar usuario', error: error.message });
  }
};

const destroyUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UsersModel.getInactiveUserById(id);
    if (!user) {
      return res
        .status(404)
        .send({ message: 'Usuario no existe o aún se encuentra activo' });
    }

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
