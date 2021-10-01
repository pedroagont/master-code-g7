// MODULES
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./routes');

// MIDDLEWARES
app.use(express.json()); // para procesar json
app.use(express.urlencoded({ extended: true })); // para procesar documentos, archivos, imagenes, video, etc

// ENDPOINTS
app.use('/api/v1', routes);

// LISTENER
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
