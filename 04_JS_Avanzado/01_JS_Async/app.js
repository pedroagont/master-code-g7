console.log('Hola desde app! 👋');

// CÓDIGO SÍNCRONO/SECUENCIAL
// Un proceso que espera al anterior para poder ser ejecutado
console.log(1);
console.log(2);
console.log(3);

// CÓDIGO ASÍNCRONO
// Permite correr procesos de manera simultánea sin que interrumpa los otros, y la respuesta se procesa hasta haber sido recibida, evitando la detención innecesaria de nuestro programa
console.log(1);
setTimeout(() => console.log(2), 3000);
console.log(3);

// NOTA:
// JavaScript le da preferencia a los procesos síncronos, y los procesos asíncronos los manda a la pila de ejecución "CALL STACK", la cual nos permite que se ejecuten las tareas de manera adecuada y sin interrupciones

// CALL STACK

// const terceraFuncion = () => {
//   console.log('Saludos desde terceraFunción 3️⃣!');
// }
//
// const segundaFuncion = () => {
//   terceraFuncion();
//   console.log('Saludos desde segundaFunción 2️⃣!');
// }
//
// const primeraFuncion = () => {
//   segundaFuncion();
//   console.log('Saludos desde primeraFunción 1️⃣!');
// }
//
// primeraFuncion();

// 3
// 2
// 1

// EVENT LOOP / BUCLE DE EVENTOS

const terceraFuncion = () => {
  setTimeout(() => console.log('Saludos desde terceraFunción 3️⃣!'), 3000);
}

const segundaFuncion = () => {
  terceraFuncion();
  console.log('Saludos desde segundaFunción 2️⃣!');
}

const primeraFuncion = () => {
  segundaFuncion();
  console.log('Saludos desde primeraFunción 1️⃣!');
}

primeraFuncion();

// 2
// 1
// Espera 3 seg...
// 3

// CALLBACK -> UNA FUNCIÓN QUE SE PASA COMO ARGUMENTO DE OTRA FUNCIÓN

// Función inicial / Función de orden superior
const mostrarDosMensajes = (funcion1, funcion2) => {
  funcion1();
  funcion2();
}

// Funciones callback
const yoSoyElCallback1 = () => {
  console.log('Hola desde el callback 1! 👋1️⃣');
}

const yoSoyElCallback2 = () => {
  console.log('Hola desde el callback 2! 👋2️⃣');
}

mostrarDosMensajes(yoSoyElCallback1, yoSoyElCallback2)
console.log('Hola después de mostrar mensaje!');

// Ejemplo callback saludar

const saludarUsuario = (nombreUsuario, callback) => {
  callback(nombreUsuario)
}

const callbackBienvenida = (nombreUsuario) => {
  console.log('Bienvenidx, ' + nombreUsuario);
}

const callbackDespedida = (nombreUsuario) => {
  console.log('Adiós, ' + nombreUsuario);
}

saludarUsuario('Eyra', callbackBienvenida);
saludarUsuario('Eyra', callbackDespedida);

saludarUsuario('Bruno', callbackBienvenida);
saludarUsuario('Bruno', callbackDespedida);

saludarUsuario('July', callbackBienvenida);
saludarUsuario('July', callbackDespedida);
