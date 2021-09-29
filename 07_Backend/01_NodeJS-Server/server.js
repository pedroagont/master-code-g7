// SERVIDOR BÁSICO EN NODEJS: https://nodejs.org/es/about/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hola Mundo');
  console.log(
    `La ruta de la petición es: ${request.url} con el método ${request.method}`
  );
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
