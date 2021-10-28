const express = require('express');
const router = express.Router();
const { UsersController } = require('../controllers');

router.post('/', UsersController.createUser);
router.get('/', UsersController.getAllUsers);
router.get('/:id', UsersController.getUserById);
router.put('/:id', UsersController.updateUser);
router.delete('/:id', UsersController.deleteUser);
router.delete('/:id/destroy', UsersController.destroyUser);

module.exports = router;
