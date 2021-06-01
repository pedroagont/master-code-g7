console.log('Hola desde selectionsort! 👋');

// Función que recibe dos indices e intercambia valores en un arreglo
function swap(indexA, indexB, arreglo) {
  const temp = arreglo[indexA];
  arreglo[indexA] = arreglo[indexB];
  arreglo[indexB] = temp;
  return arreglo;
}

function SelectionSort(arreglo) {
  for (indexBarrita = 0; indexBarrita < arreglo.length; indexBarrita++) {
    let indexMin = indexBarrita; // posición del número menor (asumimos que es el primer número)

    for (
      indexCirculito = indexBarrita;
      indexCirculito < arreglo.length;
      indexCirculito++
    ) {
      if (arreglo[indexBarrita] > arreglo[indexCirculito]) {
        indexMin = indexCirculito;
      }
    }

    if (indexMin !== indexBarrita) {
      // Hacemos intercambio de valores (swap)
      swap(indexBarrita, indexMin, arreglo);
    }
  }
  return arreglo;
}

let numeros = [0, 2, 3, 5, 7, 22]; // 0, 1, 2, 3, 4, 5, <- indices
function swap(indexA, indexB, arreglo) {
  const temp = arreglo[indexA];
  arreglo[indexA] = arreglo[indexB];
  arreglo[indexB] = temp;
  return arreglo;
}

function SelectionSort(arreglo) {
  for (indexBarrita = 0; indexBarrita < arreglo.length; indexBarrita++) {
    let indexMin = indexBarrita; // posición del número menor (asumimos que es el primer número)

    for (
      indexCirculito = indexBarrita;
      indexCirculito < arreglo.length;
      indexCirculito++
    ) {
      if (arreglo[indexBarrita] > arreglo[indexCirculito]) {
        indexMin = indexCirculito;
      }
    }

    if (indexMin !== indexBarrita) {
      // Hacemos intercambio de valores (swap)
      swap(indexBarrita, indexMin, arreglo);
    }
  }
  return arreglo;
}

console.log("Arreglo antes:", numeros);
numeros = SelectionSort(numeros);
console.log("Arreglo después:", numeros);

console.log("Arreglo antes:", numeros);
numeros = SelectionSort(numeros);
console.log("Arreglo después:", numeros);
