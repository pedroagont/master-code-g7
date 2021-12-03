const express = require('express');
const router = express();
const { UsersController } = require('../controllers');
const { UsersValidator } = require('../validators');

// CRUD USUARIOS
// Create - POST
router.post('/users/register', UsersValidator, UsersController.createUser);

// Login - POST
router.post('/users/login', UsersValidator, UsersController.loginUser);

// Read - GET
router.get('/users', UsersController.getAllUsers);
router.get('/users/:id', UsersController.getUserById);

// Update - PUT/PATCH
router.put('/users/:id', UsersValidator, UsersController.updateUser);

// Delete (borrado lógico) - DELETE
router.delete('/users/:id', UsersController.deleteUser);

// Destroy (borrado físico) - DELETE
router.delete('/users/:id/destroy', UsersController.destroyUser);

module.exports = router;
