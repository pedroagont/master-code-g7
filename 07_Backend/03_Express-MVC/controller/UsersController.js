const createUser = (req, res) => {
  // Lógica de create
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  const newUser = {
    id: Math.floor(Math.random() * 100),
    ...req.body
  };

  return res.status(201).send({ message: 'Usuario creado!', newUser });
};

const getAllUsers = (req, res) => {
  // Lógica de read all
  const users = [
    { id: 1, email: 'pedrito@correo.com', password: 'abc123' },
    { id: 2, email: 'juanito@correo.com', password: 'qwerty' }
  ];
  return res.status(200).send({ message: 'Estos son tus usuarios!', users });
};

const getUserById = (req, res) => {
  // Lógica de read one
  const { id } = req.params;
  const user = { id };
  return res
    .status(200)
    .send({ message: `Este es tu usuario con el id: ${id}!`, user });
};

const updateUser = (req, res) => {
  // Lógica de update
  const { id } = req.params;
  const updatedUser = { id };
  return res
    .status(200)
    .send({ message: `Actualizado el usuario con el id: ${id}!`, updatedUser });
};

const updatePartialUser = (req, res) => {
  // Lógica de partial update
  const { id } = req.params;
  const updatedUser = { id };
  return res.status(200).send({
    message: `Propiedad actualizada del usuario con el id: ${id}!`,
    updatedUser
  });
};

const deleteUser = (req, res) => {
  // Lógica de delete
  const { id } = req.params;
  delete id;
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
