const createUser = (req, res) => {
  // Lógica de create
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  const user = {
    id: Math.floor(Math.random() * 100),
    ...req.body
  };

  res.status(201).send({ message: `Usuario creado con el id: ${user.id}!` });
};

const getAllUsers = (req, res) => {
  // Lógica de read all
  res.status(200).send({ message: 'Estos son tus usuarios!' });
};

const getUserById = (req, res) => {
  // Lógica de read one
  const { id } = req.params;
  res.status(200).send({ message: `Este es tu usuario con el id: ${id}!` });
};

const updateUser = (req, res) => {
  // Lógica de update
  const { id } = req.params;
  res.status(200).send({ message: `Actualizado el usuario con el id: ${id}!` });
};

const updatePartialUser = (req, res) => {
  // Lógica de partial update
  const { id } = req.params;
  res
    .status(200)
    .send({ message: `Actualizado parcialmente el usuario con el id: ${id}!` });
};

const deleteUser = (req, res) => {
  // Lógica de delete
  const { id } = req.params;
  res.status(204).send();
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  updatePartialUser,
  deleteUser
};
