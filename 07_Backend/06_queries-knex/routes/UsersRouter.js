const express = require('express');
const router = express.Router();
const { UsersController } = require('../controllers');
const { UsersValidator } = require('../validators');

router.post('/users/', UsersValidator, UsersController.createUser);
router.get('/users/', UsersController.getAllUsers);
router.get('/users/:id', UsersController.getUserById);
router.put('/users/:id', UsersValidator, UsersController.updateUser);
router.delete('/users/:id', UsersController.deleteUser);
router.delete('/users/:id/destroy', UsersController.destroyUser);

module.exports = router;
