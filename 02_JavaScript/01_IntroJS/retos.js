console.log('Hola desde retos! 👋😎');

// ------- RETO 1: VARIABLES
// Guarda en variables el nombre de las siguientes mascotas:
// 1. Pedrito
// 2. Rufo
// 3. Chancla
//
// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// “Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho”

const pedrito = 'Pedrito';
const rufo = 'Rufo';
const chancla = 'Chancla';

// Concatenando
console.log('CONCATENANDO: Mis mascotas son ' + pedrito + ', ' + rufo + ' y ' + chancla + '. Les quiero mucho.');

// String templates
console.log(`PLANTILLASJS: Mis mascotas son ${pedrito}, ${rufo} y ${chancla}. Les quiero mucho`);


// ------- RETO 2: INPUT/OUTPUT
// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:
//
// “Quiero mucho a mis mascotas mascota1 y mascota2”
//
// NOTA: mascota1 y mascota2 corresponden a los nombres introducidos mediante prompts

const mascota1 = prompt('Ingresa el nombre de tu primer mascota (1/2)');
const mascota2 = prompt('Ingresa el nombre de tu segunda mascota (2/2)');

// Concatenando
console.log('CONCATENANDO: Quiero mucho a mis mascotas ' + mascota1 + ' y ' + mascota2);

// String templates
console.log(`PLANTILLASJS: Quiero mucho a mis mascotas ${mascota1} y ${mascota2}`);


// ------- RETO 3: CONVERSIÓN DE DATOS
// 1. Guarda la cadena de texto "100" en una variable
let texto = '100';

// 2. Muestra el contenido de esta variable en consola
console.log(texto);

// 3. Muestra el TIPO DE DATO de esta variable en consola
console.log(typeof texto);

// 4. Transforma la variable de string a number
let numero = parseInt(texto);

// 5. Muestra nuevamente el contenido de esta variable en consola
console.log(numero);
console.log(typeof numero);

// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla?
// El color cambia (en cadena es negro, en numero es azul)
// El tipo de dato cambia pasa de ser string a ser number

// ¿Qué es entonces un tipo de dato?
// Es la información que nos permite diferenciar sobre los tipos de variables que existen para manejarlos adecuadamente
