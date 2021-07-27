console.log('Hola desde retos! 👋');

// ------- RETO 1
// Almacenar un password en una variable
// Preguntar al usuario su contraseña
// Si la contraseña es correcta, mostrar en consola: 'Bienvenido'
// Si la contraseña no es correcta, mostrar en consola: 'Password incorrecto, intente de nuevo'
const password = 'passw0rd123!';
const promptPassword = prompt('Ingresa tu contraseña para para ingresar al sistema');

if (promptPassword === password) {
  alert('Bienvenido');
  console.log('El usuario ingresó correctamente su password');
} else {
  alert('Password incorrecto, intente de nuevo');
  console.log('El usuario ingresó un password incorrecto');
}

// ------- RETO 2
// Le van a preguntar al usuario que les dé un número.
// Van a decir si este numero es par o es impar.
// Utilizar símbolo de modulo/residuo -> % <-

const numeroUsuario = parseInt(prompt('Ingresa un valor número y te diré si es PAR o IMPAR!'));
const residuo = numeroUsuario % 2;

if (residuo === 0) {
  alert('Tu número ' + numeroUsuario + ' es un número PAR.');
  console.log('El usuario ingresó el número ' + numeroUsuario + ' y es un número PAR.');
} else if (residuo === 1) {
  alert('Tu número ' + numeroUsuario + ' es un número IMPAR.');
  console.log('El usuario ingresó el número ' + numeroUsuario + ' y es un número IMPAR.');
} else {
  alert('Datos incorrectos, favor de ingresar números enteros');
  console.log('El usuario ingresó valores incorrectos');
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

let numero1 = parseInt(prompt('Ingresa un número 1/3'));
let numero2 = parseInt(prompt('Ingresa otro número 2/3'));
let numero3 = parseInt(prompt('Ingresa un último número 3/3'));

if (numero1 > numero2 && numero1 > numero3) {
  alert('El número: ' + numero1 + ' es el mayor de los tres');
} else if (numero2 > numero1 && numero2 > numero3) {
  alert('El número: ' + numero2 + ' es el mayor de los tres');
} else if (numero3 > numero1 && numero3 > numero2) {
  alert('El número: ' + numero3 + ' es el mayor de los tres');
} else if (numero1 === numero2 && numero2 === numero3) {
  alert('Los tres números son iguales');
} else {
  alert('Debes ingresar valores numéricos');
}

// ------- RETO 5
// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, la suma de los tres números.
// ¿Cómo verifico mediante condicionales que un valor existe?

let num1 = parseInt(prompt('Ingresa un número 1/3'));
let num2 = parseInt(prompt('Ingresa otro número 2/3'));
let num3 = parseInt(prompt('Ingresa un último número 1/3'));

// En este caso, el condicional funciona para validar las respuestas de los usuarios
// Cuando una variable no existe su validación se considera "falsy", es decir, que arroja un false
// Usando el caracter ! antes de la variable, verificamos que la variable sea diferente de true
// Es decir si !num significa que num es false o que no existe

if (!num1 || !num2 || !num3) {
  alert('Debes ingresar valores numéricos');
} else {
  alert('La suma de los tres números es: ' + (num1 + num2 + num3));
}
