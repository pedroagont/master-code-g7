const express = require('express');
const router = express.Router();
const UsersRouter = require('./UsersRouter');

router.use(UsersRouter);

module.exports = router;
