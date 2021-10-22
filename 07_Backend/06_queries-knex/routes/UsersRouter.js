const express = require('express');
const router = express.Router();
const { UsersController } = require('../controllers');

router.post('/', UsersController.createUser);
router.get('/', UsersController.getAllUsers);

module.exports = router;
