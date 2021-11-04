// MODULES
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const PORT = 8080;

// MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());

// Sirviendo archivos estáticos desde express
// Más información: http://expressjs.com/en/starter/static-files.html
app.use('/docs', express.static('public'));

// Manejando templates de javascript embedido
// Más información: https://ejs.co/
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  return res.render('index');
});

// ENDPOINTS
app.get('/saludar', (req, res) => {
  const { nombre } = req.query;
  return res.render('saludar', { nombre });
});

app.get('/libros', (req, res) => {
  const { usuario, rol } = req.query;
  const libros = [
    { titulo: 'El origen de las especies', autor: 'Charles Darwin' },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Marquéz' },
    { titulo: 'Why information grows?', autor: 'César Hidalgo' },
    { titulo: 'The Creators Code', autor: 'Amy Wilkinson' }
  ];
  const templateVars = { usuario, rol, libros };

  return res.render('libros', templateVars);
});

app.get('/admin', (req, res) => {
  const { rol } = req.query;
  const templateVars = { rol };
  return res.render('admin', templateVars);
});

// LISTENER
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
