// MODULES
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const { errors } = require('celebrate');

// MIDDLEWARES
app.use(express.json()); // para procesar json
app.use(express.urlencoded({ extended: true })); // para procesar documentos, archivos, imagenes, video, etc
app.use(morgan('dev')); // para que nos muestre un registro de cada acceso a nuestro servidor
app.use(helmet()); // para aumentar la seguridad de nuestro servidor (revisar headers)

// ENDPOINTS
app.use('/api/v1', require('./routes'));
app.use(errors());

module.exports = app;
