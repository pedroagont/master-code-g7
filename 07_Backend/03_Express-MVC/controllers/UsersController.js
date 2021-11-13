const { UsersModel } = require('../models');

const createUser = (req, res) => {
  // Lógica de create
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  const emailExists = UsersModel.getUserByEmail(email);
  if (emailExists) {
    return res
      .status(404)
      .send({ message: 'Ya existe un usuario registrado con ese correo' });
  }

  const body = { email, password };
  const user = UsersModel.createUser(body);

  return res.status(201).send({ message: 'Usuario creado!', user });
};

const getAllUsers = (req, res) => {
  // Lógica de read all
  const users = UsersModel.getAllUsers();
  return res.status(200).send({ message: 'Estos son tus usuarios!', users });
};

const getUserById = (req, res) => {
  // Lógica de read one
  const { id } = req.params;

  const user = UsersModel.getUserById(id);
  if (!user) {
    return res.status(404).send({ message: 'Usuario no existe' });
  }

  return res
    .status(200)
    .send({ message: `Este es tu usuario con el id: ${id}!`, user });
};

const updateUser = (req, res) => {
  // Lógica de update
  const { id } = req.params;

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  const user = UsersModel.getUserById(id);
  if (!user) {
    return res.status(404).send({ message: 'Usuario no existe' });
  }

  const body = { email, password };
  const updatedUser = UsersModel.updateUser(id, body);

  return res.status(200).send({
    message: `Actualizado el usuario con el id: ${id}!`,
    user: updatedUser
  });
};

const updatePartialUser = (req, res) => {
  // Lógica de partial update
  const { id } = req.params;

  const { property, value } = req.body;
  if (!property || !value) {
    return res.status(400).send({ message: 'Ingresar property y value' });
  }

  const user = UsersModel.getUserById(id);
  if (!user) {
    return res.status(404).send({ message: 'Usuario no existe' });
  }

  const body = { property, value };
  const updatedUser = UsersModel.updatePartialUser(id, body);

  return res.status(200).send({
    message: `Propiedad actualizada del usuario con el id: ${id}!`,
    user: updatedUser
  });
};

const deleteUser = (req, res) => {
  // Lógica de delete
  const { id } = req.params;

  const user = UsersModel.getUserById(id);
  if (!user) {
    return res.status(404).send({ message: 'Usuario no existe' });
  }

  UsersModel.deleteUser(id);

  return res.status(204).send();
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  updatePartialUser,
  deleteUser
};
