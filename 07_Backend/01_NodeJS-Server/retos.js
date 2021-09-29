const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  // 0. MUESTRA UN SALUDO EN LA RUTA "/"
  // Ejemplo: GET / -> Hola Mundo!
  if (request.url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hola Mundo!');
    console.log(
      `La ruta de la petición es: ${request.url} con el método ${request.method}`
    );
  }

  // 1. MUESTRA TU NOMBRE EN LA RUTA "/tu-nombre"
  // Ejemplo: GET /pedrito -> Hola soy pedrito!
  else if (request.url === '/pedrito') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hola soy Pedrito!');
    console.log(
      `La ruta de la petición es: ${request.url} con el método ${request.method}`
    );
  }

  // 2. MUESTRA UN OBJETO CON USUARIOS EN LA RUTA "/users"
  // Ejemplo: GET /users -> { usuario1: 'Pedrito', usuario3: 'Abby', usuario3: 'Jacqueline'}
  else if (request.url === '/users') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    const users = [
      { nombre: 'Pedrito', correo: 'pedrito@correo.com' },
      { nombre: 'Abby', correo: 'abby@gmail.com' },
      { nombre: 'Jacqueline', correo: 'jacqueline@hotmail.com' }
    ];
    response.end(JSON.stringify(users));
    console.log(
      `La ruta de la petición es: ${request.url} con el método ${request.method}`
    );
  }

  // 3. MUESTRA UN ERROR 404 SI LA RUTA NO ESTÁ DEFINIDA
  // Ejemplo: GET /qwerty -> 404 No encontrado :(
  else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain');
    response.end('404 No encontrado :(');
    console.log(
      `La ruta de la petición es: ${request.url} con el método ${request.method}`
    );
  }
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
