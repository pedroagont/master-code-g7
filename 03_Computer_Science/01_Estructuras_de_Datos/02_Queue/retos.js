console.log('Hola desde retos! 👋');

// 1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
// Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
// Cola 1: [ amarillo, rojo, azul, morado]
// Cola 2: [rosa, verde, negro, blanco]

// PESUDOCÓDIGO
//// INICIO PROCESO COLACOLORES
////       RECIBIR PARÁMETROS colaColores Queue
////
////       SI TAMAÑO DE LA COLA ES PAR cola.tamaño % 2 == 0 YY LA COLA NO ESTÁ VACÍA cola.tamaño != 0, entonces:
////           DESENCOLO EL PRIMER ELEMENTO Y LO METO EN UNA NUEVA COLA COLAPARES
////           colaPares.enqueue(colaColores.dequeue());
////       SI TAMAÑO DE LA COLA ES PAR cola.tamaño % 2 == 1, entonces:
////           DESENCOLO EL PRIMER ELEMENTO Y LO METO EN UNA NUEVA COLA COLANONES
////           colaNones.enqueue(colaColores.dequeue());
////       SI NO, entonces
////           RETORNAMOS COLA PARES Y COLA NONES
////
//// FIN PROCESO COLACOLORES

// IMPLEMENTACIÓN DE FUNCIÓN CON ARREGLOS COMO COLAS
const encolarParesNonesArreglo = (colaOriginal) => {
  // 1. Verificamos que sea par condicionando que su residuo entre 2 sea 0 YY agregamos la lógica para condicionar que el arreglo tenga elementos (que su tamaño sea diferente != de 0)
  if(colaOriginal.length % 2 === 0 && colaOriginal.length !== 0) {
    colaParesArreglo.push(colaOriginal.shift()); // -> Desencolamos el primer elemento del arreglo colaOriginal con shift() y ese elemento a su vez lo agregamos al arreglo colaPares
    return encolarParesNonesArreglo(colaOriginal) // -> Retornamos y volvemos a ejecutar la función (recursión)
  } else if(colaOriginal.length % 2 === 1) { // 2. Verificamos que sea non condicionando que el residuo entre 2 sea 1 (no es necesaria agregar la lógica YY para verificar que la cola no esté vacía porque si el residuo es 1 por lo menos hay 1 elemento)
    colaNonesArreglo.push(colaOriginal.shift()); // -> Desencolamos el primer elemento del arreglo colaOriginal con shift() y ese elemento a su vez lo agregamos al arreglo colaNones
    return encolarParesNonesArreglo(colaOriginal) // -> Retornamos y volvemos a ejecutar la función (recursión)
  } else { // 3. Cuando colaOriginal está vacía entonces -> retornamos los arreglos colaPares y colaNones
    return {colaParesArreglo, colaNonesArreglo}
  }
}

const colaColoresArreglo = ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco'];
const colaParesArreglo = [];
const colaNonesArreglo = [];
console.log('Cola Colores Arreglo', colaColoresArreglo);
console.log('Función encolar con Arreglo', encolarParesNonesArreglo(colaColoresArreglo));

// IMPLEMENTACIÓN DE FUNCIÓN CON OBJETOS CLASE COLA
const encolarParesNonesClaseQueue = (colaOriginal) => {
  // 1. Verificamos que sea par condicionando que su residuo entre 2 sea 0 YY agregamos la lógica para verificar que la cola no esté vacía, condicionando que la cola tenga elementos, es decir, que su tamaño sea diferente != de 0
  if(colaOriginal.length() % 2 === 0 && colaOriginal.length() !== 0) {
    colaParesClaseQueue.enqueue(colaOriginal.dequeue()); // -> Desencolamos el primer elemento la cola colaOriginal con dequeue() y ese elemento a su vez lo agregamos a la cola colaPares con enqueue()
    return encolarParesNonesClaseQueue(colaOriginal) // -> Retornamos y volvemos a ejecutar la función (recursión)
  } else if(colaOriginal.length() % 2 === 1) { // 2. Verificamos que sea non condicionando que el residuo entre 2 sea 1 (no es necesaria agregar la lógica YY para verificar que la cola no esté vacía porque si el residuo es 1 por lo menos hay 1 elemento)
    colaNonesClaseQueue.enqueue(colaOriginal.dequeue()); // -> Desencolamos el primer elemento la cola colaOriginal con dequeue() y ese elemento a su vez lo agregamos a la cola colaNones con enqueue()
    return encolarParesNonesClaseQueue(colaOriginal) // -> Retornamos y volvemos a ejecutar la función (recursión)
  } else { // 3. Cuando colaOriginal está vacía entonces -> retornamos las colas colaPares y colaNones
    return {colaParesClaseQueue, colaNonesClaseQueue}
  }
}

// Creamos la colaColores a partir de la clase Queue
const colaColoresClaseQueue = new Queue();

// Encolamos los colores
// colaColoresClaseQueue.enqueue('amarillo');
// colaColoresClaseQueue.enqueue('rosa');
// colaColoresClaseQueue.enqueue('rojo');
// ...

// Podemos encolar los colores uno a uno a partir de un arreglo y con un ciclo for que haga el enqueue() de cada elemento por nosotros
const colaColores = ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco'];
for (let i = 0; i < colaColores.length; i++) {
  colaColoresClaseQueue.enqueue(colaColores[i]);
}
// Declaramos colaPares y colaNones a partir de la clase Queue
const colaParesClaseQueue = new Queue();
const colaNonesClaseQueue = new Queue();
console.log('Cola Colores Clase Queue', colaColoresClaseQueue);
console.log('Función encolar con Cola Clase Queue', encolarParesNonesClaseQueue(colaColoresClaseQueue));

// 2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención.
// Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket.
// Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
//
// Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
//
// Cola: [
// { user:‘User1’, ticket:true },
// { user:‘User2’, ticket:true },
// { user:‘User3’, ticket:false },
// { user:‘User4’, ticket:true },
// { user:‘User5’, ticket:false },
// { user:‘User6’, ticket:false },
// { user:‘User7’, ticket:true },
// { user:‘User8’, ticket:true },
// { user:‘User9’, ticket:true },
// { user:‘User10’, ticket:false },
// { user:‘User11’, ticket:true },
// ];
