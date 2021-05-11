console.log('Hola desde retos! 👋');

// ------- RETO 1
// Almacenar un password en una variable
// Preguntar al usuario su contraseña
// Si la contraseña es correcta, mostrar en consola: 'Bienvenido'
// Si la contraseña no es correcta, mostrar en consola: 'Password incorrecto, intente de nuevo'
const password = 'passw0rd123!';
const promptPassword = prompt('Ingresa tu contraseña para para ingresar al sistema');

if (promptPassword === password) {
  console.log('Bienvenido');
} else {
  console.log('Password incorrecto, intente de nuevo');
}

// ------- RETO 2
// Le van a preguntar al usuario que les dé un número.
// Van a decir si este numero es par o es impar.
// Utilizar símbolo de modulo/residuo -> % <-

const numeroUsuario = parseInt(prompt('Ingresa un valor número y te diré si es PAR o IMPAR!'));
const residuo = numeroUsuario % 2

if (residuo === 0) {
  alert('Tu número ' + numeroUsuario + ' es un número PAR.');
  console.log('El usuario ingresó el número ' + numeroUsuario + ' y es un número PAR.');
} else if (residuo === 1) {
  alert('Tu número ' + numeroUsuario + ' es un número PAR.');
  console.log('El usuario ingresó el número ' + numeroUsuario + ' y es un número IMPAR.');
} else {
  alert('Datos incorrectos, favor de ingresar números enteros');
  console.log('Datos incorrectos, favor de ingresar números enteros');
}

// ------- RETO 3
// Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.
// Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador.

const jugador1 = prompt('JUGADOR1: Escribe "piedra" o "papel" o "tijera"!').toLowerCase();
const jugador2 = prompt('JUGADOR2: Escribe "piedra" o "papel" o "tijera"!').toLowerCase();

// Para convertir una cadena en minúsculas usamos el método toLowerCase() -> cadena.toLowerCase()

if (jugador1 === jugador2 && jugador1 !== '' && jugador2 !== '') {
  alert('EMPATE');
  console.log('EMPATE');
} else if (jugador1 === 'piedra' && jugador2 === 'tijera' || jugador1 === 'papel' && jugador2 === 'piedra' || jugador1 === 'tijera' && jugador2 === 'papel') {
  alert('GANA JUGADOR1 CON ' + jugador1);
  console.log('GANA JUGADOR1 CON ' + jugador1);
} else if (jugador2 === 'piedra' && jugador1 === 'tijera' || jugador2 === 'papel' && jugador1 === 'piedra' || jugador2 === 'tijera' && jugador1 === 'papel') {
  alert('GANA JUGADOR2 CON ' + jugador2);
  console.log('GANA JUGADOR2 CON ' + jugador2);
} else  {
  alert('Datos incorrectos, ingresa la palabra "piedra", o "papel" o "tijera"');
  console.log('Datos incorrectos, ingresa la palabra "piedra", o "papel" o "tijera"');
}



// ------- RETO 4
// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números.

// ------- RETO 5
// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, la suma de los tres números.
// ¿Cómo verifico mediante condicionales que un valor existe?
