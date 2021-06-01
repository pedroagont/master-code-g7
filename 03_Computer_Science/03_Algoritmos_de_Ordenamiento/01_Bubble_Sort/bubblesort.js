console.log('Hola desde bubblesort! 👋');

let numeros = [
    2, 1, 3, 22, 7, 5, 0, 9, 4, 25
]

// Función que recibe dos indices e intercambia valores en un arreglo
function swap(indexA, indexB, arreglo){
  const temp = arreglo[indexA]
  arreglo[indexA] = arreglo[indexB]
  arreglo[indexB] = temp
  return arreglo
}


function BubbleSort (arreglo) {
  let operaciones = 0
  let long = arreglo.length // cantidad de numeros a considerar para comparación
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < long; j++) {
      if(arreglo[j] > arreglo[j+1]){
        swap(j, j+1, arreglo)
      }
      operaciones++
    }
    long-- // Nos ayuda a ya no considerar el numero que fue ordenado en el for interno
  }
  console.log('Se hicieron:', operaciones, 'operaciones');
  return arreglo
}

console.log('antes', numeros)
numeros = BubbleSort(numeros)
console.log('después', numeros)
