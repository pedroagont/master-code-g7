const express = require('express');
const router = express();
const { UsersController } = require('../controllers');
const { UsersValidator } = require('../validators');

// CRUD USUARIOS
// Create - POST
router.post(
  '/users/signup',
  UsersValidator.createUser,
  UsersController.createUser
);

// Read - GET
router.get('/users', UsersController.getAllUsers);
router.get('/users/:id', UsersController.getUserById);

// Update - PUT/PATCH
router.put('/users/:id', UsersController.updateUser);
router.patch('/users/:id', UsersController.updatePartialUser);

// Delete (borrado lógico) - DELETE
router.delete('/users/:id', UsersController.deleteUser);

// Destroy (borrado físico) - DELETE
router.delete('/users/:id/destroy', UsersController.destroyUser);

// Login - POST
router.post('/users/login', UsersController.loginUser);

module.exports = router;
