// EJERCICIO
// Con el API: https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/
// Ejecutar el siguiente ciclo de vida de un autor:
// Crear un autor LISTO
// Modificar ese autor LISTO
// Obtener autor LISTO
// Borrar autor

const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

// Create - POST
const createAuthor = (name, last_name, nacionality, biography, gender, age) => {
  if(!name || !last_name || !nacionality || !biography || !gender || !age) throw new Error('Debes ingresar todos los parámetros');

  const jsonSend = {
    'name': name,
    'last_name': last_name,
    'nacionalidad': nacionality,
    'biography': biography,
    'gender': gender,
    'age': age,
  }

  request.post(URL_BASE, { form: jsonSend }, (err, res, body) => {
    console.log('Creando autor...');
    if(res.statusCode === 201){
      console.log(JSON.parse(body));
      updateAuthor(JSON.parse(body).id, 'Pedrini', 'Gonzalezco', 'USA', 'Chavito cool', 'M', 27);
    } else console.log(res.statusCode, err, JSON.parse(body));
  });
}

// Read - GET
const readOneAuthor = (id) => {
  if(!id) throw new Error('Debes ingresar un id')
  request.get(`${URL_BASE}${id}`, (err, res, body) => {
    console.log('Leyendo autor...');
    if(res.statusCode === 200){
      console.log(JSON.parse(body));
      deleteAuthor(JSON.parse(body).id);
    } else console.log(res.statusCode, err, JSON.parse(body));
  })
}

// Update - PUT
const updateAuthor = (id, name, last_name, nacionality, biography, gender, age) => {
  if(!id || !name || !last_name || !nacionality || !biography || !gender || !age) throw new Error('Debes ingresar todos los argumentos');

  const jsonSend = {
    'name': name,
    'last_name': last_name,
    'nacionalidad': nacionality,
    'biography': biography,
    'gender': gender,
    'age': age,
  }

  request.put(`${URL_BASE}${id}/`, { form: jsonSend }, (err, res, body) => {
    console.log('Actualizando autor...');
    if(res.statusCode === 200){
      console.log(JSON.parse(body));
      readOneAuthor(JSON.parse(body).id);
    } else console.log(res.statusCode, err, JSON.parse(body));
  });
}

// Delete - DELETE
const deleteAuthor = (id) => {
  if(!id) throw new Error('Debes ingresar un id')
  request.delete(`${URL_BASE}${id}/`, (err, res, body) => {
    console.log('Borrando autor...');
    if(res.statusCode === 204) {
      console.log(`El id ${id} fue eliminado correctamente`);
    } else console.log(res.statusCode, err, JSON.parse(body));
  });
}

createAuthor('Pedro', 'González', 'MX', 'Chavito bien', 'M', 27);
