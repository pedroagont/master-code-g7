console.log('Hola desde script! 👋');

/*
  Prerequisitos:
    1) Debes contar con una lista previamente ordenada

  Entradas:
    1) Una lista ordenada
    2) El elemento a encontrar en la lista

  Salidas:
    Si el elemento existe
      si sí, retornamos el índice donde se encontró
      si no, retornamos un -1
*/

/*
  Pseudocodigo:

  itemToFind = elemento a buscar en la lista
  min = el inicio de la lista (usualmente posición 0)
  max = el largo de la lista - 1

  mientras min <= max
    middle = truncarHaciaAbajo((min + max) / 2)
    guess = lista[middle]

    if (itemToFind === guess) {
      return middle
    }
          17           5
    if (itemToFind > guess) {
      min = middle + 1
    }
            17         21
    if (itemToFind < guess) {
      max = middle - 1
    }

  return -1
*/

const binarySearch = (orderedList, itemToFind) => {
  let min = 0,
      max = orderedList.length - 1,
      middle = null,
      guess = null;

  while(min <= max) {
    middle = Math.floor((min + max) / 2);
    guess = orderedList[middle];

    if (itemToFind === guess) {
      return middle;
    }

    if (itemToFind > guess) {
      min = middle + 1;
    }

    if (itemToFind < guess) {
      max = middle - 1;
    }
  }

  return -1;
}

const myList = [4, 7 , 10, 11, 55, 71, 89, 100, 2020];

const result = binarySearch(myList, 10);

if (result >= 0) console.log(`¡Sí existe! se encuentra en la posición ${result}`);
if (result === -1) console.log('No existe...');

/*
Existen diferentes usos para cada comilla y acento...
" O'Reily  "
' Él dijo "tomala!" '
`  `
´´
*/


/* Ejercicio:
 crear una función de búsqueda que reciba un número y un arreglo de números ordenado,
 el valor que debe devolver es el índice dónde se encuentra este número
 o en caso de no estar dentro del arreglo devolverá -1
 Ejemplo:
    let respuesta = buscarNumero(14, sortedArray)
    respuesta === 4
 */
//[0,1,2,3] //4
function buscarNumero(num, arreglo) {
  let inicio = 0; //0
  let fin = arreglo.length - 1; //19
  let veces = 0;
  while (inicio <= fin) {
    veces++;
    let mitad = Math.floor((inicio + fin) / 2);
    if (arreglo[mitad] === num) {
      console.log("El número está en el indice: ", mitad);
      console.log("Se hicieron", veces, "operaciones");
      return mitad;
    } else if (num > arreglo[mitad]) {
      inicio = mitad + 1;
    } else {
      fin = mitad - 1;
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
const lista2 = [1, 2, 3];

//buscarNumero(19, sortedArray);
buscarNumero(3, lista2);
