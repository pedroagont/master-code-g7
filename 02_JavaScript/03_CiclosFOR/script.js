console.log('Hola desde script.js! 👋');

// CICLOS FOR
// Los ciclos nos sirven para repetir bloques de código con determinadas tareas, en donde cada repetición se considera un "ciclo" o una "iteración"

// Estructura básica
// for (inicio; final; paso/secuencia) {
//   tarea a repetir
// }

// Para repetir una tarea (hardcoded)
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Con un ciclo FOR
for (let i = 1; i <= 5; i = i + 1) {
  console.log(i);
}

// i = i + 1 se puede abreviar utilizando i++
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Para avanzar el ciclo de 2 en 2
for (let i = 0; i <= 100; i = i + 2) {
  console.log(i);
}

// i = i + N se puede apreviar como i += N
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

// Para avanzar de 3 en 3
for (let i = 100; i <= 300; i += 3) {
  console.log(i);
}

// Para avanzar de 5 en 5
for (let i = 100; i <= 300; i += 5) {
  console.log(i);
}

// Para retroceder de 1 en 1
for (let i = 100; i >= -300; i--) {
  console.log(i);
}

// Para retroceder de 3 en 3
for (let i = 100; i >= -300; i -= 3) {
  console.log(i);
}

// Para retroceder de 5 en 5
for (let i = 100; i >= -300; i -= 5) {
  console.log(i);
}

// Empezar en -50, llegar hasta 500, avanzar de 5 en 5
for (let i = -50; i <= 500; i += 5) {
  console.log(i);
}

// Empezar en 1000, llegar hasta 2000, avanzar de 10 en 10
for (let i = 1000; i <= 2000; i += 10) {
  console.log(i);
}

// ¿Cómo se ligan los ciclos con los arreglos?
// Uso más común para ciclar arreglos:

let alumnas = [
  'Gabriela',
  'July',
  'Laura',
  'Alejandrina',
  'Diana'
]

console.log(alumnas);
console.log(alumnas[0]); // Gabriela
console.log(alumnas[1]); // July
console.log(alumnas.length); // 5 // La propiedad arreglo.length nos permite saber el tamaño del arreglo

// Para imprimir cada uno de los elementos del arreglo una vez que sabemos su tamaño
for (let i = 0; i <= 5; i++) {
  console.log(alumnas[i]);
  // Aquí imprime un undefined al final porque el arreglo contiene 5 elementos, pero como empieza desde 0, la última posición es la 4, es decir, la posición 5 NO ESTÁ DEFINIDA
}

// Para evitar el undefined
for (let i = 0; i < 5; i++) {
  console.log(alumnas[i]);
  // Quitando el menor igual que, dejando solamente el menor que, evitamos que llegue a la posición 5, la cual, como mencionamos previamente, marcaría undefined
}

// Podemos hacer uso de la propiedad arreglo.length al final del ciclo, así aseguramos que se llega adecuadamente a la última posición aunque no sepamos de qué tamaño es
// Forma 1 con menor igual que arreglo.length-1 (menos común pero eventualmente se presenta)
for (let i = 0; i <= alumnas.length-1; i++) {
  console.log(alumnas[i]);
}

// Forma 2 con menor que arreglo.length (más común y mejor práctica)
for (let i = 0; i < alumnas.length; i++) {
  console.log(alumnas[i]);
}

// Ejemplo imprimiendo en consola el nombre de las alumnas que se encuentren en una posición PAR e IMPAR
for (var i = 0; i < alumnas.length; i++) {
  if (i % 2 === 0) {
    console.log(i + ' ' + alumnas[i] + ' es PAR');
  } else {
    console.log(i + ' ' + alumnas[i] + ' es IMPAR');
  }
}
