const bcrypt = require('bcryptjs');

const UsersModel = require('../models/UsersModel');

const createUser = async (req, res) => {
  // TRABAJO DEL CONTROLADOR
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  // HASHEO: https://www.npmjs.com/package/bcryptjs#usage---sync
  const hashedPassword = bcrypt.hashSync(password, 10);

  // INTERACCIÓN CON MODELO
  const user = await UsersModel.createUser(email, hashedPassword);

  // RESPUESTA A LA VISTA
  return res.status(201).send({ message: 'Usuario creado!', user });
};

const getAllUsers = async (req, res) => {
  const users = await UsersModel.getAllUsers();
  return res.status(200).send({ message: 'Estos son tus usuarios!', users });
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await UsersModel.getUserById(id);

  return res.status(200).send({
    message: `Este es tu usuario con el id: ${id}!`,
    user
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  // HASHEO
  const hashedPassword = bcrypt.hashSync(password, 10);

  // INTERACCIÓN CON MODELO
  const user = await UsersModel.updateUser(email, hashedPassword, id);

  return res.status(200).send({
    message: `Actualizado el usuario con el id: ${id}!`,
    user
  });
};

const updatePartialUser = async (req, res) => {
  const { id } = req.params;
  const { property, value } = req.body;

  if (!property || !value) {
    return res.status(400).send({ message: 'Ingresar property y value' });
  }

  if (property === 'password') {
    // HASHEO
    const hashedPassword = bcrypt.hashSync(value, 10);

    // INTERACCIÓN CON MODELO
    const user = await UsersModel.updatePartialUser(
      property,
      hashedPassword,
      id
    );

    return res.status(200).send({
      message: `Parcialmente actualizado el usuario con el id: ${id}!`,
      user
    });
  }

  const user = await UsersModel.updatePartialUser(property, value, id);

  return res.status(200).send({
    message: `Parcialmente actualizado el usuario con el id: ${id}!`,
    user
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  await UsersModel.deleteUser(id);

  return res.status(204).send();
};

const destroyUser = async (req, res) => {
  const { id } = req.params;

  await UsersModel.destroyUser(id);

  return res.status(204).send();
};

const loginUser = async (req, res) => {
  // TRABAJO DEL CONTROLADOR
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  // INTERACCIÓN CON MODELO
  const user = await UsersModel.getUserByEmail(email);

  if (!user) {
    return res.status(400).send({ message: 'Usuario con ese email no existe' });
  }

  const validPassword = bcrypt.compareSync(password, user.password);

  if (!validPassword) {
    return res.status(400).send({ message: 'Password incorrecto' });
  }

  // RESPUESTA A LA VISTA
  return res.status(201).send({ message: 'Bienvenido!', user });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  updatePartialUser,
  deleteUser,
  destroyUser,
  loginUser
};
