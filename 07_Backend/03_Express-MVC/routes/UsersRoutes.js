const express = require('express');
const router = express();
const { UsersController } = require('../controller');

// CRUD USUARIOS
// Create - POST
router.post('/users', UsersController.createUser);

// Read - GET
router.get('/users', UsersController.getAllUsers);
router.get('/users/:id', UsersController.getUserById);

// Update - PUT/PATCH
router.put('/users/:id', UsersController.updateUser);
router.patch('/users/:id', UsersController.updatePartialUser);

// Delete - DELETE
router.delete('/users/:id', UsersController.deleteUser);

module.exports = router;
