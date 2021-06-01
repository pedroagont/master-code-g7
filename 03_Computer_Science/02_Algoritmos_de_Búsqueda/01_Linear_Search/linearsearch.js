console.log('Hola desde script! 👋');

/*
  El algoritmo de búsqueda lineal recibe como argumentos

       ENTRADAS
  1) Lista con elementos
  2) Elemento o item a buscar

       SALIDAS
  Este algoritmo devuelve
    si encuentra el elemento, la posicion (numero)
    si no encuentra el elemento, devuelve -1
*/

/*
const linearSearch = (list, itemToFind) => {

    Hallamos el tamaño de la lista
    Definir el índice desde dónde vamos a iterar

    index; -> desde donde iteramos
    size; -> hasta donde iteramos

    mientras index < size
      if list[index] === itemToFind
        si sí -> return index
        si no -> index + 1;

    return -1

}
*/

const linearSearch = (list, itemToFind) => {
  const size = list.length;
  let index = 0;

  while(index < size) {
    let itemInPosition = list[index];
    if (itemInPosition === itemToFind) {
      return index;
    }
    index++;
  }

  return -1;
}

const myList = [19, 12, 4, 89, 666, 10, 42, 41, 5, 333, 5, 5, 5, 5];

const result = linearSearch(myList, 5);

if (result >= 0) console.log('¡Sí existe!');
if (result === -1) console.log('No existe...');


/* Ejercicio:
 crear una función de búsqueda que reciba un número y un arreglo de números ordenado,
 el valor que debe devolver es el índice dónde se encuentra este número
 o en caso de no estar dentro del arreglo devolverá -1
 Ejemplo:
    let respuesta = buscarNumero(14, sortedArray)
    respuesta === 4
 */

function buscarNumero(num, arreglo) {
  let index = 0;
  for (index = 0; index < arreglo.length; index++) {
    if (arreglo[index] === num) {
      console.log("El número está en el indice: ", index);
      console.log("Se hicieron", index, "operaciones");
      return index;
    }
  }
  console.log("El número no está");
  console.log("Se hicieron", veces, "operaciones");
  return -1;
}

const sortedArray = [
  5,
  6,
  11,
  12,
  14,
  15,
  18,
  19,
  21,
  22,
  23,
  25,
  27,
  28,
  30,
  32,
  37,
  198,
];

buscarNumero(198, sortedArray);
