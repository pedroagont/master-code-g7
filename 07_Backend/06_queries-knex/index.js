const app = require('./server');
const PORT = 8080;

// LISTENER
app.listen(PORT, () =>
  console.log(`Servidor corriendo: http://localhost:${PORT}`)
);
