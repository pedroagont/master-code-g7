console.log('Hola desde script.js! 👋');

// ESTRUCTURA BÁSICA IF-ELSE
// if ( condicion ) {
//   paso 1, lo que procede si la condición se cumple o arroja un true/verdadera
// } else {
//   paso 2, lo que procede si la condición NO se cumple o arroja un false/falso
// }

// OPERADORES RELACIONALES
// Son los símbolos que nos permiten realizar comparaciones
// menor que: <
// mayor que: >
// menor igual que: <=
// mayor igual que: >=
// comparar igualdad: ==
// comparar igualdad y tipo de dato: ===
// diferente de: !=
// diferente de o tipo de dato: !==

// Ejemplo:
let edad = 18;

if (edad >= 18) {
  console.log('Es MAYOR de edad 👴🏻');
} else {
  console.log('Es MENOR de edad 👼🏻');
}


// ESTRUCTURA DE IF ANIDADOS
// if ( condicion1 ) {
//   paso si la condicion1 es true
// } else if ( condicion2 ) {
//   paso si la condicion1 es false
//   paso si la condicion2 es true
// } else {
//   paso si la condicion1 es false
//   paso si la condicion2 es false
// }

let dia = 'nublado';
let hora = '5:00';

if (dia == 'nublado') {
  console.log('No salgas, el día está nublado 🌥');
} else if (hora == '5:00') {
  console.log('Estás a tiempo de salir a correr 🏃‍♂️');
} else {
  console.log('Vas tarde a correr ⏰');
}


// OPERADORES LÓGICOS
// Son los símbolos que nos permiten agregar lógica a nuestras condicionales
// AND: &&
// OR: ||
// NOT: !

// EJEMPLO CON AND (&&)
// Sirve para que se cumplan SÍ o SÍ dos o más condiciones
let precio = 350;

if (precio < 100) {
  console.log('Tu entrada es REGULAR 🎥');
} else if (precio >= 100 && precio <= 200) {
  console.log('Tu entrada es VIP ⭐️');
} else if (precio >= 200 && precio <= 300) {
  console.log('Tu entrada es PLATINO 👑');
} else {
  console.log('Te vieron la cara amigo 😭');
}

// EJEMPLO CON OR (||)
// Sirve para verificar que se cumpla CUALQUIERA de las condiciones
let comida = 'espaguetti';

if (comida == 'manzana' || comida == 'pera' || comida == 'naranja' || comida == 'banana') {
  console.log('Tu comida es una FRUTA 🍎');
} else if (comida == 'sirloin' || comida == 'arrachera' || comida == 'atún'){
  console.log('Tu comida es PROTEÍNA 🥩');
} else {
  console.log('Ni idea de qué sea tu comida amigo 🤷🏻‍♂️');
}

// EJEMPLO CON NOT (!)
// Sirve para validar lo contrario a un valor booleano definido (verdadero si está en falso, o falso si está en verdadero)
let estaVivo = false;

if (!estaVivo) { // Esto es como decir "si estaVivo no es true, entonces..."
  console.log('Está MUERTO 💀');
} else {
  console.log('Está VIVO 🥳');
}


// VALIDACIÓN DE OPERADORES RELACIONES
console.log(5 > 10); // false
console.log('hola' == 'hola'); // true
console.log(5 != 10); // true
console.log(10 != 10); // false

// Comparación básica de valor con ==
console.log(100 == '100'); // true // Esto marca true porque javascript identidica que el número 100 y la cadena "100" tienen "el mismo valor" aunque sepamos que es diferente tipo de dato

// Comparación estricta de valor y tipo de dato con ===
console.log(100 === '100'); // false // Esto marca false porque el número 100 y la cadena "100" son diferentes tipos de dato
console.log(100 === 100); // true


// OPERADORES TERNARIOS
// Es otra forma de escribir condicionales if-else usando la sig sintaxis:
// condición ? true : false;

// Con forma básica if-else
let edadIfElse = 27;

if (edadIfElse >= 18) {
  console.log('Es MAYOR de edad 👴🏻');
} else {
  console.log('Es MENOR de edad 👼🏻');
}

// Con forma operador ternario
let edadTernario = 12;

edadTernario >= 18
? console.log('Es MAYOR de edad 👴🏻')
: console.log('Es MENOR de edad 👼🏻');
