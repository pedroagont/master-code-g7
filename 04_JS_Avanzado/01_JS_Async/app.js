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

// EJEMPLO:
// Crear una función de orden superior que reciba como
// argumentos dos números y un callback. Según el callback
// que se pase a la función, se devuelve la suma de los
// dos números, la resta de los dos números, la
// multiplicación de los dos números, o la división de estos.

//1. Creamos la función de orden superior que recibe dos números y un callback:
const resultado = (num1, num2, operacion) => {
  //Validamos que el tercer argumento "operacion" sea una función (recordando que un callback es una función como argumento dentro de otra función):
  if (typeof operacion !== 'function') return console.log('Debes pasar una función como argumento');
  //Regresamos con el resultado de ejecutar el callback "operación" con los num1 y num2 como parámetros
  return operacion(num1, num2);
}

//2. Creamos las funciones que pasaremos como callback (sumar, restar, multiplicar y dividir)
//Como sólo requerimos retornar el resultado de la operación, podemos hacer uso de funciones flecha y de esa forma declararlas en una sóla línea
const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

// 3. Probamos enviando a consola la ejecución de la función resultado con diferentes operaciones (funciones callback):
console.log(resultado(5, 7, sumar)); // 12
console.log(resultado(5, 7, restar)); // -2
console.log(resultado(5, 7, multiplicar)); // 35
console.log(resultado(5, 7, dividir)); // 0.7142
