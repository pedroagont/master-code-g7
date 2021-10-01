// MODULES
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./routes');

// MIDDLEWARES
app.use(express.json()); // para procesar json
app.use(express.urlencoded({ extended: true })); // para procesar documentos, archivos, imagenes, video, etc
app.use(morgan('dev')); // para que nos muestre un registro de cada acceso a nuestro servidor

// ENDPOINTS
app.use('/api/v1', routes);

// LISTENER
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
