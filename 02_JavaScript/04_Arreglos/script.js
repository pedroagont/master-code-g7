console.log('Hola desde script.js 👋');

// ARREGLOS
// Se declaran utilizando corchetes [] y cada elemento es considerado una posición del arreglo
// let arreglo = [ pos0, pos1, pos2, ..., posN ]
// let arregloVacio = []

// Posición:      0       1      2       3
let colores = [ 'Negro', 'Rojo', 'Rosa', 'Azul' ];

console.log(colores);
console.log(colores.length); // la propiedad arreglo.length se agrega por default a cualquier arreglo y nos permite ver su tamaño

// ¿Cómo accedo a cada valor del arreglo?

console.log(colores[0]); // Negro
console.log(colores[1]); // Rojo
console.log(colores[2]); // Rosa
console.log(colores[3]); // Azul
console.log(colores[4]); // undefined, significa que aún no está definido ningún elemento o valor en esa posición, ojo: no se considera un error

// MÉTODOS
// Nos sirven para manipular, modificar y trabajar en general con arreglos de diferentes maneras

// PUSH
// ¿Cómo agregar más elementos a nuestro arreglo?
// arreglo.push(elementoNuevo)
colores.push('Blanco');
colores.push('Verde');
console.log(colores);
console.log(colores[4]); // Blanco
console.log(colores[5]); // Verde

// POP
// ¿Cómo eliminar el último elemento del arreglo?
// arreglo.pop()
colores.pop();
console.log(colores);
colores.pop();
console.log(colores);

// SPLICE
// ¿Cómo eliminar valores específicos del arreglo?
// arreglo.splice(arg1, arg2, arg3)
// arg1 -> en qué posición quieres empezar
// arg2 -> cuántos valores quieres remover
// arg3 -> elemento que se desea sustituir (opcional, no siempre es necesario)

colores.splice(2, 1); // Esto elmina un elemento apartir de la posición 2 del arreglo, es decir, en este caso, quitamos el color 'Rosa'
console.log(colores);

colores.splice(1, 1, 'Amarillo'); // Si agregos un tercer argumento en el método splice() nos permitirá sustuir por el valor que coloquemos
colores.splice(1, 3, 'Morado', 'Lila', 'Magenta'); // Si agregos un tercer argumento en el método splice() nos permitirá sustuir por el valor que coloquemos
console.log(colores);


// REVERSE
// ¿Cómo reordenar los elementos de la cadena al revés?
// arreglo.reverse()

colores.reverse()
console.log(colores);

// CADENAS
let nombre = 'Pedro Antonio González Martínez';
console.log(nombre);
console.log(nombre[0]); // P
console.log(nombre[1]); // e
console.log(nombre[2]); // d
console.log(nombre[3]); // r
console.log(nombre[4]); // o

// SPLIT
// ¿Cómo separar valores de una cadena?
// arreglo.split(arg)
console.log(nombre.split(''));
console.log(nombre.split(' '));


// MÉTODOS FUNCIONALES
// En términos generales, no sólo reciben argumentos posicionales, sino reciben una función como argumento que nos permite aplicar determinadas tareas a dicho arreglo

let colaboradores = [
  { nombre: 'Abby', apellido: 'Littman', sueldo: 12000 },
  { nombre: 'Fernanda', apellido: 'Escobedo', sueldo: 40000 },
  { nombre: 'Gabriela', apellido: 'Rodríguez', sueldo: 60000 },
  { nombre: 'Jaqueline', apellido: 'Callejas', sueldo: 30000 }
]

console.table(colaboradores);

// Iterar arreglo con un ciclo FOR
for (let i = 0; i < colaboradores.length; i++) {
  console.log(colaboradores[i]);
}

// FOREACH
// arreglo.forEach(elemento => tarea)
// arreglo.forEach((elementoActual, posición, arregloCompleto) => tarea)
colaboradores.forEach(colaborador => console.log(colaborador));

colaboradores.forEach((elementoActual, posicion, arregloCompleto) => {
  console.log(elementoActual);
  console.log(posicion);
  console.log(arregloCompleto);
})

// MAP
// Nos permite crear un nuevo arreglo a partir de otro
// arreglo.map(elemento => tarea)
// arreglo.map((elementoActual, posición, arregloCompleto) => tarea)

let colaboradoresFelices = colaboradores.map(colaborador => {
  return { ...colaborador, sueldo: colaborador.sueldo + 10000, tieneSeguro: true}
})
console.log('Colaboradores 👩🏻‍💼', colaboradores);
console.log('Colaboradores Felices‍ 🤩', colaboradoresFelices);
// Spread syntax ...objeto
// Esto permite extraer/acceder a todas las propiedades del objeto sin tener que escribirlas cada una

colaboradores.map((elementoActual, posicion, arregloCompleto) => {
  console.log(elementoActual);
  console.log(posicion);
  console.log(arregloCompleto);
})

// FILTER
// Nos permite crear un arreglo a partir de elementos de otro arreglo que cumplan determinada condición, es decir, filtra los elementos del arreglo
// arreglo.filter(elemento => tarea)
let directivos = colaboradores.filter(colaborador => {
  return colaborador.sueldo >= 30000
})
console.log('Colaboradores directivos 👩🏻‍💼', directivos);

let operativos = colaboradores.filter(colaborador => {
  return colaborador.sueldo <= 12000
})
console.log('Colaboradores operativos 🛠', operativos);
