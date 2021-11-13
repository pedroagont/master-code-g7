const db = require('../db');

const createUser = body => {
  let userID = Math.floor(Math.random() * 100);

  const idExists = db['users'].find(user => user.userID === userID);

  if (idExists) {
    return createUser(body);
  }

  const user = { userID, ...body };

  db['users'].push(user);

  return user;
};

const getAllUsers = () => {
  // Lógica de read all
  const users = db['users'];
  return users;
};

const getUserById = id => {
  // Lógica de read one
  const user = db['users'].find(user => user.userID === Number(id));
  return user;
};

const getUserByEmail = email => {
  // Lógica de read one
  const user = db['users'].find(user => user.email === email);
  return user;
};

const updateUser = (id, body) => {
  // Lógica de update
  const { email, password } = body;
  const user = db['users'].find(user => user.userID === Number(id));
  user.email = email;
  user.password = password;
  return user;
};

const updatePartialUser = (id, body) => {
  // Lógica de partial update
  const { property, value } = body;
  const user = db['users'].find(user => user.userID === Number(id));
  user[property] = value;
  return user;
};

const deleteUser = id => {
  // Lógica de delete
  db['users'] = db['users'].filter(user => user.userID !== Number(id));
  return;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  updatePartialUser,
  deleteUser
};
