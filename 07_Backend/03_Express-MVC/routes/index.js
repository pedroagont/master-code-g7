// EXPRESSJS ROUTER: http://expressjs.com/es/guide/routing.html
const express = require('express');
const router = express.Router();
const usersRoutes = require('./UsersRoutes');

router.use(usersRoutes);

module.exports = router;
