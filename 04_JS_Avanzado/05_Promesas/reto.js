// EJERCICIO
// Con el API: https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/
// Ejecutar el siguiente ciclo de vida de un autor donde cada función devuelva promesas:
// Crear un autor LISTO
// Modificar ese autor LISTO
// Obtener autor LISTO
// Borrar autor

const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

// Create - POST
const createAuthor = (name, last_name, nacionalidad, biography, gender, age) => {
  if(!name || !last_name || !nacionalidad || !biography || !gender || !age) throw new Error('Debes ingresar todos los parámetros');

  const jsonSend = {
    name,
    last_name,
    nacionalidad,
    biography,
    gender,
    age
  }

  return new Promise((resolve, reject) => {
    request.post(URL_BASE, { form: jsonSend }, (err, res, body) => {
      console.log('Creando autor...');
      if(res.statusCode === 201){
        resolve(JSON.parse(body));
      } else reject({message: 'Error creando autor.', statusCode: res.statusCode, body: JSON.parse(body)});
    });
  })
}

// Read - GET
const readOneAuthor = (id) => {
  if(!id) throw new Error('Debes ingresar un id')

  return new Promise((resolve, reject) => {
    request.get(`${URL_BASE}${id}`, (err, res, body) => {
      console.log('Leyendo autor...');
      if(res.statusCode === 200){
        resolve(JSON.parse(body));
      } else reject({message: 'Error leyendo autor.', statusCode: res.statusCode, body: JSON.parse(body)});
    })
  })
}

// Update - PUT
const updateAuthor = (id, name, last_name, nacionalidad, biography, gender, age) => {
  if(!id || !name || !last_name || !nacionalidad || !biography || !gender || !age) throw new Error('Debes ingresar todos los argumentos');

  const jsonSend = {
    name,
    last_name,
    nacionalidad,
    biography,
    gender,
    age
  }

  return new Promise((resolve, reject) => {
    request.put(`${URL_BASE}${id}/`, { form: jsonSend }, (err, res, body) => {
      console.log('Actualizando autor...');
      if(res.statusCode === 200){
        resolve(JSON.parse(body));
      } else reject({message: 'Error actualizando autor.', statusCode: res.statusCode, body: JSON.parse(body)});
    });
  })
}

// Delete - DELETE
const deleteAuthor = (id) => {
  if(!id) throw new Error('Debes ingresar un id')
  return new Promise((resolve, reject) => {
    request.delete(`${URL_BASE}${id}/`, (err, res, body) => {
      console.log('Borrando autor...');
      if(res.statusCode === 204) {
        resolve(`El id ${id} fue eliminado correctamente`);
      } else {
        reject({message: 'Error borrando autor.', statusCode: res.statusCode, body: JSON.parse(body)});
      }
    });
  })
}

// FORMA 1 CON THEN Y CATCH CONTINUOS
// createAuthor('Pedro', 'González', 'MX', 'Chavito bien', 'M', 27)
//   .then(autorCreado => {
//     console.log(autorCreado);
//     updateAuthor(autorCreado.id, 'Pedrini', 'Gonzálezco', 'USA', 'Chavito cool', 'M', 27)
//       .then(autorActualizado => {
//         console.log(autorActualizado);
//         readOneAuthor(autorActualizado.id)
//           .then(autorLeido => {
//             console.log(autorLeido);
//             deleteAuthor(autorLeido.id)
//               .then(autorBorrado => console.log(autorBorrado));
//           })
//       })
//   })
//   .catch(error => console.log(error));

// FORMA 2 RETORNANDO LA RESPUESTA DE CADA THEN
// createAuthor('Pedro', 'González', 'MX', 'Chavito bien', 'M', 27)
//   .then(autorCreado => {
//     console.log(autorCreado);
//     return updateAuthor(autorCreado.id, 'Pedrini', 'Gonzálezco', 'USA', 'Chavito cool', 'M', 27)
//   })
//   .then(autorActualizado => {
//     console.log(autorActualizado);
//     return readOneAuthor(autorActualizado.id)
//   })
//   .then(autorLeido => {
//     console.log(autorLeido);
//     return deleteAuthor(autorLeido.id)
//   })
//   .then(autorBorrado => console.log(autorBorrado))
//   .catch(error => console.log(error))

// FORM 3: CON ASYNC AWAIT

const cicloDeVidaAutor = async (name, last_name, nacionalidad, biography, gender, age) => {
  try {
    const autorCreado = await createAuthor(name, last_name, nacionalidad, biography, gender, age);
    console.log(autorCreado);
    const autorActualizado = await updateAuthor(autorCreado.id, 'Pedrini', 'Gonzálezco', 'USA', 'Chavito cool', 'M', 27)
    console.log(autorActualizado);
    const autorLeido = await readOneAuthor(autorActualizado.id)
    console.log(autorLeido);
    const autorBorrado = await deleteAuthor(autorLeido.id)
    console.log(autorBorrado);
  } catch (error) {
    console.log(error);
  }
}

cicloDeVidaAutor('Pedro', 'González', 'MX', 'Chavito bien', 'M', 27);
