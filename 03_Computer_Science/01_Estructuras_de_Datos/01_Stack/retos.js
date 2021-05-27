console.log('Hola desde retos! 👋');

// 1.- Hacer una función que reciba como parámetros una pila, y un número.
// La función debe retornar tantos elementos como diga el número (segundo parámetro).
// Entrada : mifuncion(['Manzana’,'Cebolla’,'Apio’,'Naranja’,'Papaya’,'Sandía’,'Melón’],4)
// Salida: ['Manzana’,'Cebolla’,'Apio’,'Naranja’]

//// PSEUDOCÓDIGO
//// PROCESO MiFuncionPilas
////    RECIBIR PARÁMETROS pila (Stack), numero (number)
////
////    SI pila.tamaño es diferente de numero, entonces:
////        SACAMOS EL ÚLTIMO ELEMENTO pila.pop()
////        MiFuncionPilas(pila, numero)
////    SI NO, entonces:
////        ESCRIBIR/RETORNAR pila con tamaño indicado por el numero recibido
////
//// FIN MiFuncionPilas

// FUNCIÓN CON ARREGLO COMO PARÁMETRO
const miFuncionPilasArreglo = (pila, numero) => {
  if(pila.length !== numero){
    pila.pop();
    return miFuncionPilasArreglo(pila, numero);
  }
  return pila;
}
const pilaFrutasArreglo = ['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'];
console.log(pilaFrutasArreglo);
console.log('Iniciando función con arreglo como pila');
console.log(miFuncionPilasArreglo(pilaFrutasArreglo, 4));
console.log('Terminó función');

// FUNCIÓN CON OBJETO CLASE STACK COMO PARÁMETRO
const miFuncionPilasObjetoStack = (pila, numero) => {
  if(pila.length() !== numero){
    pila.pop();
    return miFuncionPilasObjetoStack(pila, numero);
  }
  return pila;
}

const pilaClaseStack = new Stack();
console.log(pilaClaseStack);

// pilaClaseStack.push('Manzana')
// pilaClaseStack.push('Cebolla')
// pilaClaseStack.push('Apio')
// ...

const pilaFrutasArregloStack = ['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'];
for (let i = 0; i < pilaFrutasArregloStack.length; i++) {
  pilaClaseStack.push(pilaFrutasArregloStack[i])
}
console.log(pilaClaseStack);

console.log('Iniciando función con objeto clase pila');
console.log(miFuncionPilasObjetoStack(pilaClaseStack, 4));
console.log('Terminó función');

// 2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]

// PSEUDOCÓDIGO
//// INICIO PROCESO REEMPLAZAR
////     RECIBIR PARÁMETROS pila Stack, nuevo number, viejo number
////
////     SI último elemento de la pila es diferente de != viejo, entonces:
////         Lo sacamos con pila.pop()
////         REEMPLAZAR(pila, nuevo, viejo)
////     SI NO, entonces:
////         Sacamos viejo con pila.pop() y lo reemplazamos por nuevo con pila.push(nuevo)
////
//// FIN PROCESO REEMPLAZAR

// 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
// pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
// camino. Muestre el camino recorrido tanto de ida como de vuelta.
// Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
// Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

// PSEUDOCÓDIGO
//// INICIO PROCESO RECORRIDO
////      RECIBIR pila Stack (pueblos a visitar)
////      SI pila.length() != 0, entonces,
////          RECORRIDO(pila)
////          RETORNAMOS pila.pop()
////      SI NO, entonces:
////          IMPRIMIR/RETORNAMOS LA PILA
//// FIN PROCESO RECORRIDO
