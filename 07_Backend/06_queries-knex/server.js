// MODULES
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const routes = require('./routes');
const { errors } = require('celebrate');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

// ENDPOINTS
app.use('/api/v1', routes);
app.use(errors());

module.exports = app;
