console.log('Hola desde index! 👋');

// CALLBACK HELL
// Se produce cuando encadenamos múltiples callbacks anidados que
// provocan que el código se vuelva difícil de leer y ‘debuggear’ y mantener
// Suele identificarse ya que por lo regular se forma una piramide vacía a la izquierda

// Ejemplo papá de Malcolm, no termina una tarea por estar haciendo otra:
// https://www.youtube.com/watch?v=AbSehcT19u0

// primeraFuncion(args, function() {
//   segundaFuncion(args, function() {
//     terceraFuncion(args, function() {
//       cuartaFuncion(args, function() {
//         // Y así y así
//       });
//     });
//   });
// });

// PROMESAS
// Una promesa es un objeto que representa un valor que puede que esté disponible «ahora»,
// en un «futuro» o que «nunca» lo esté. Como no se sabe cuándo va a estar disponible,
// todas las operaciones dependientes de ese valor, tendrán que posponerse en el tiempo.

// Para crear una Promesa, creamos un objeto tipo Promise, el cual recibe dos argumentos, resolve y reject.
// Estos argumentos son callbacks que podemos ejecutar dentro de la promesa para darla por terminada.

// Ejemplo Promesa
const promesaRandom = new Promise((resolve, reject) => {
  const numero = Math.ceil(Math.random() * 10);
  setTimeout(() => numero >= 5
    ? resolve(numero)
    : reject(new Error(`El número ${numero} es menor que 5`))
  , 1000)
});

// Para ejecutar una promesa, accedemos a .then() para recibir la resolución y .catch() para recibir el rechazo
// promesaRandom
//   .then(numero => console.log(numero))
//   .catch(error => console.log(error));

// Otra forma para acceder a la promesa es mediante el uso de funciones con async/await
const respuestaPromesaRandom = async () => {
  try {
    const respuesta = await promesaRandom;
    console.log(respuesta);
  } catch (e) {
    console.log(e);
  }
}
respuestaPromesaRandom()

// ¿Cómo funciona Math.random y Math.floor/Math.ceil?
// const numRandom = Math.random()
// console.log(numRandom); //Imprime un número aleatorio del 0 al 1
// console.log(numRandom * 10); //Imprime un número entero aleatorio del 1 al 10,
// console.log(Math.floor(numRandom * 10)); //floor para redondear hacia abajo
// console.log(Math.ceil(numRandom * 10)); //ceil para redondear hacia arriba

// OPERADOR TERNARIO
// condicion ? si es true pasa esto : si es false pasa esto;
