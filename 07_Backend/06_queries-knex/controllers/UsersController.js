const createUser = (req, res) => {
  const newUserID = Math.floor(Math.random() * 1000);
  return res
    .status(200)
    .send({ message: 'Hola desde el server con POST!', newUserID });
};

const getAllUsers = (req, res) => {
  const users = [
    { email: 'margarito@email.com', password: 'margarito123' },
    { email: 'fulanito@email.com', password: 'fulanito123' }
  ];
  return res
    .status(200)
    .send({ message: 'Hola desde el server con GET!', users });
};

module.exports = { createUser, getAllUsers };
