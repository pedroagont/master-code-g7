const express = require('express');
const router = express();
const { UsersController } = require('../controllers');

// CRUD USUARIOS
// Create - POST
router.post('/users/signup', UsersController.createUser);

// Read - GET
router.get('/users', UsersController.getAllUsers);
router.get('/users/:id', UsersController.getUserById);

// Update - PUT/PATCH
router.put('/users/:id', UsersController.updateUser);
router.patch('/users/:id', UsersController.updatePartialUser);

// Delete - DELETE
router.delete('/users/:id', UsersController.deleteUser);

// Login - POST
router.post('/users/login', UsersController.loginUser);

module.exports = router;
