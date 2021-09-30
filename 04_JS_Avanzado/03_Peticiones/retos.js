// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
//                     https://pokeapi.co/

// const request = require('request');
//
// const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/1';
//
// request.get(POKEAPI_URL, (err, res, body) => {
//   if(res.statusCode === 200) {
//     const json = JSON.parse(body);
//     console.log(`${json.name} has the next types:`);
//     // Con ciclo for
//     // for (let i = 0; i < json.types.length; i++) {
//     //   console.log(json.types[i].type.name);
//     // }
//     // Con forEach()
//     json.types.forEach(type => console.log(type.type.name));
//   } else console.log(res.statusCode, err);
// });

// 2.- Hacer una funcion que haga una petición
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot)
//     (Ejemplo: peticionLibro(“i robot”);

// const request = require('request');
//
// const peticionLibro = (titulo) => {
//
//   const URL_OPENLIBRARY = 'http://openlibrary.org/search.json?q=' + titulo;
//
//   request.get(URL_OPENLIBRARY, (err, res, body) => {
//     if(res.statusCode === 200) {
//       if (!JSON.parse(body).docs[0]) return console.log(`Tu búsqueda "${titulo}" no arrojó resultados`);
//       const { title_suggest, author_name } = JSON.parse(body).docs[0];
//       console.log(`Tu búsqueda "${titulo}" arrojó el libro titulado "${title_suggest}", obra de:`);
//       author_name.forEach(author => console.log(author));
//     } else console.log(res.statusCode, err);
//   });
// }
//
// peticionLibro('i robot');
// peticionLibro('rayuela');
// peticionLibro('sdfklahsdfoasdfha');

// 3.- Hacer una petición por autor y devolver la lista de
//     sus libros
//         http://openlibrary.org/search.json?author=asimov

// const request = require('request');
//
// const peticionAutor = (autor) => {
//
//   const URL_OPENLIBRARY_AUTOR = 'http://openlibrary.org/search.json?author=' + autor;
//
//   request.get(URL_OPENLIBRARY_AUTOR, (err, res, body) => {
//     if(res.statusCode === 200) {
//       if(!JSON.parse(body).docs) return console.log(`Tu búsqueda "${autor}" no arrojó ningún resultado:`);
//       const titulos = JSON.parse(body).docs;
//       console.log(`Tu búsqueda "${autor}" arrojó los siguientes resultados:`);
//       titulos.forEach(doc => console.log(`"${doc.title_suggest}"`));
//     } else console.log(res.statusCode, err);
//   })
// }
//
// peticionAutor('asimov');
// peticionAutor('cortazar');
// peticionAutor('asdasdasdasdaqw');


// 4.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse

// const request = require('request');
//
// const peticionGenero = (artista) => {
//
//   const URL_THEAUDIODB = 'http://www.theaudiodb.com/api/v1/json/1/search.php?s=' + artista;
//
//   request.get(URL_THEAUDIODB, (err, res, body) => {
//     if(res.statusCode === 200) {
//       if(!JSON.parse(body).artists) return console.log(`Tu búsqueda "${artista}" no arrojó ningún resultado:`);
//       const respuesta = JSON.parse(body).artists[0];
//       console.log(`El genéro de ${respuesta.strArtist} es: ${respuesta.strGenre}`);
//     } else console.log(res.statusCode, err);
//   })
// }
//
// peticionGenero('muse');
// peticionGenero('metallica');
// peticionGenero('asdasdasdw');

// 5.- Hacer una petición a la swapi a un personaje y obtener
//     sus películas.
//                     https://swapi.co/

// const request = require('request');
//
// const URL_SWAPI = 'https://swapi.dev/api/people/1/'
//
// request.get(URL_SWAPI, (err, res, body) => {
//   if(res.statusCode === 200) {
//     const { name, films } = JSON.parse(body)
//     console.log(`${name} participó en las siguientes películas: `);
//     films.forEach(film => request.get(film, (err, res, body) => console.log(JSON.parse(body).title)));
//   } else console.log(res.statusCode, err);
// })


// 6.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//                     https://api.nasa.gov/
// Reference:
// google foreach/map is not a function javascript object
// https://stackoverflow.com/questions/31096596/why-is-foreach-not-a-function-for-this-object

// const request = require('request');
// const API_KEY = 'OLAcexVmqAmjSUfSYiKtU4ECoBn8Nv9ApfhcIEV3';
//
// const peticionNasa = (fechaInicio, fechaFinal) => {
//   const URL_NASA = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${fechaInicio}&end_date=${fechaFinal}&api_key=${API_KEY}`;
//
//   console.log(URL_NASA);
//   request.get(URL_NASA, (err, res, body) => {
//     if (res.statusCode === 200) {
//       const json = JSON.parse(body);
//       console.log('Los asteroides que son potencialmente peligrosos para la tierra son:');
//       Object.keys(json.near_earth_objects).forEach(object => {
//         const asteroids = json.near_earth_objects[object];
//         asteroids.forEach(hazardous => {
//           if (hazardous.is_potentially_hazardous_asteroid === true) {
//             console.log(`${hazardous.name}`);
//           }
//         })
//       })
//     } else console.log(res.statusCode, err);
//   })
// }
//
// peticionNasa('2020-11-20', '2020-11-26')

// 7.- Traer los primeros 151 pokemon de la primera generacion y
//     devolver un objeto con el nombre, sus moves, tipos, tamaño
//     y peso.
//                       https://pokeapi.co/

const request = require('request');

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemon = (n) => {

  for (let i = 1; i <= n; i++) {

    request.get(`${POKEAPI_URL}${i}`, (err, res, body) => {
      if(res.statusCode === 200) {
        const json = JSON.parse(body);

        let pokemon = {
          nombre: json.name,
          movimientos: json.moves,
          tipos: json.types,
          altura: json.height,
          peso: json.weight
        }

        console.log(pokemon);
      } else console.log(res.statusCode, err);
    })
  }
}

// getPokemon(10)
getPokemon(151)
