console.log('Hola desde index! 👋');

// CRUD
// "In computer programming, Create, Read, Update, and Delete (CRUD) are the four basic functions of persistent storage."
// Son las 4 operaciones básicas en la web: Crear, Leer, Actualizar y Borrar

// EJEMPLO CRUD CON API GOODREADS
// Link de documentación: https://goodreads-devf-aaron.herokuapp.com/docs
// Link de JSONEditorOnline: http://jsoneditoronline.org

// HERRAMIENTAS PARA TRABAJO Y DESARROLLO DE APIS
// Se recomienda descargar alguna herramienta para manejo de APIs, cualquiera (una) de las siguientes es suficiente
// Link de Postman: https://www.postman.com
// Link de Insomnia: https://insomnia.rest

const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

// Create - POST
const createAuthor = (name, last_name, nacionalidad, biography, gender, age) => {
  if(!name || !last_name || !nacionalidad || !biography || !gender || !age) throw new Error('Debes ingresar todos los parámetros');

  const jsonSend = { name, last_name, nacionalidad, biography, gender, age }

  request.post(URL_BASE, { form: jsonSend }, (err, res, body) => {
    console.log('Creando autor...');
    if(res.statusCode === 201){
      console.log(JSON.parse(body));
    } else console.log(res.statusCode, err, JSON.parse(body));
  });
}

// createAuthor('Pedro', 'González', 'MX', 'Chavito bien', 'M', 27);


// Read - GET

// Para leer todos:
const readAllAuthors = () => {
  request.get(URL_BASE, (err, res, body) => {
    if(res.statusCode === 200){
      console.log(JSON.parse(body));
    } else console.log(res.statusCode, err, JSON.parse(body));
  })
}

// readAllAuthors();

// Para leer un solo autor:
const readOneAuthor = (id) => {
  if(!id) throw new Error('Debes ingresar un id')
  request.get(`${URL_BASE}${id}`, (err, res, body) => {
    console.log('Leyendo autor...');
    if(res.statusCode === 200){
      console.log(JSON.parse(body));
    } else console.log(res.statusCode, err, JSON.parse(body));
  })
}

// readOneAuthor(13751);


// Update - PUT/PATCH

// PUT - Para actualizar todo el objeto:
const updateAuthor = (id, name, last_name, nacionalidad, biography, gender, age) => {
  if(!id || !name || !last_name || !nacionalidad || !biography || !gender || !age) throw new Error('Debes ingresar todos los argumentos');

  const jsonSend = { name, last_name, nacionalidad, biography, gender, age }

  request.put(`${URL_BASE}${id}/`, { form: jsonSend }, (err, res, body) => {
    console.log('Actualizando autor...');
    if(res.statusCode === 200){
      console.log(JSON.parse(body));
    } else console.log(res.statusCode, err, JSON.parse(body));
  });
}

// updateAuthor(13751, 'Pedritito', 'González', 'USA', 'Chavito cool', 'M', 10);

// PATCH - Para actualizar una sola propiedad del objeto:
const updateAuthorKey = (id, property, newValue) => {
  if(!id || !property || !newValue) throw new Error('Debes ingresar todos los argumentos');

  // Para usar una variable como nombre de una propiedad usamos la sintaxis con corchetes []:
  // ComputedPropertyName: http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer
  const jsonSend = {
    [property]: newValue
  }

  request.patch(`${URL_BASE}${id}/`, { form: jsonSend }, (err, res, body) => {
    console.log('Actualizando propiedad del autor...');
    if(res.statusCode === 200){
      console.log(JSON.parse(body));
    } else console.log(res.statusCode, err, JSON.parse(body));
  });
}

// updateAuthorKey(13751, 'age', 30);


// Delete - DELETE

const deleteAuthor = (id) => {
  if(!id) throw new Error('Debes ingresar un id')
  request.delete(`${URL_BASE}${id}/`, (err, res, body) => {
    console.log('Borrando autor...');
    if(res.statusCode === 204) {
      console.log(`El id ${id} fue eliminado correctamente`);
    } else console.log(res.statusCode, err, body);
  });
}

// deleteAuthor(13751);
