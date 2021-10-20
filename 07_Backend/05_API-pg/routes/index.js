// EXPRESSJS ROUTER: http://expressjs.com/es/guide/routing.html
const express = require('express');
const router = express.Router();
const UsersRoutes = require('./UsersRoutes');

router.use(UsersRoutes);

module.exports = router;
