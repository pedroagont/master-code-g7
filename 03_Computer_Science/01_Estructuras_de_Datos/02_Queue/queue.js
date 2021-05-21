console.log('Hola desde queue.js! 👋');

// COLAS
// Una cola (también llamada fila) es una estructura de datos, caracterizada por ser una secuencia de elementos en la que la operación de inserción push se realiza por un extremo y la operación de extracción pull por el otro. También se le llama estructura FIFO (del inglés First In First Out), debido a que el primer elemento en entrar será también el primero en salir.

// IMPLEMENTACIÓN BÁSICA CON UN ARREGLO
const cola = [];
console.log(cola);

// Encolar/formar/agregar elementos a la cola
console.log(cola.push('July Longas')); // 1 porque es el nuevo tamaño del arreglo cola
console.log(cola.push('Jacqueline Callejas')); // 2
console.log(cola.push('Alejandrina Lugo')); // 3
console.log(cola);

// Sacar/salir elementos de la cola
console.log(cola.shift()); // 'July Longas' Nos regresa el primer elemento de la cola, de tal manera que el primero en haber entrado, será el primero en salir
console.log(cola.shift()); // 'Jacqueline Callejas'
console.log(cola.shift()); // 'Alejandrina Lugo'
console.log(cola);


// IMPLEMENTACIÓN DE UNA COLA USANDO CLASES
class Queue {
  constructor(){
    this.collection = [];
    this.counter = 0;
  }

  enqueue(nuevoElemento){
    this.collection.push(nuevoElemento);
    this.counter++
    return this.counter;
  }

  dequeue(){
    const elementoDesencolado = this.collection.shift();
    this.counter--;
    return elementoDesencolado;
  }

  length(){
    return this.counter;
  }

  isEmpty(){
    if(this.length() === 0) return true
    return false
  }

  front(){
    if(this.length() === 0) return null;
    return this.collection[0];
  }

  back(){
    if(this.length() === 0) return null;
    return this.collection[this.counter-1]
  }

}

const colaAlumnos = new Queue();
console.log(colaAlumnos);

console.log(colaAlumnos.enqueue('July Longas'));
console.log(colaAlumnos.enqueue('Jacqueline Callejas'));
console.log(colaAlumnos.enqueue('Alejandrina Lugo'));
console.log(colaAlumnos);

console.log(colaAlumnos.dequeue()); // 'July Longas'
console.log(colaAlumnos.dequeue()); // 'Jacqueline Callejas'
console.log(colaAlumnos.dequeue()); // 'Alejandrina Lugo'
console.log(colaAlumnos);

console.log(colaAlumnos.enqueue('Charly del Castillo'));
console.log(colaAlumnos.enqueue('Gracia Alzaga'));
console.log(colaAlumnos.length());
console.log(colaAlumnos.enqueue('Paulina Saes'));
console.log(colaAlumnos.length());
console.log('Atendiendo a: ', colaAlumnos.front());
console.log('Último en espera: ', colaAlumnos.back());


// EJEMPLO BANCO

// Creamos una nueva filaBanco a partir de la clase Cola o Queue
const filaBanco = new Queue();

// Encolamos los elementos a la fila
filaBanco.enqueue('Alejandra Torres');
filaBanco.enqueue('Abby Litman');
filaBanco.enqueue('Miguel Leal');
filaBanco.enqueue('JC de la Peña');

// Función para atender a los clientes del banco
const atenderClientes = (fila) => {
    if(!fila.isEmpty()){
      console.log('Atendiendo a', fila.dequeue());
      console.log('Quedan por atender:', fila.length());
      console.log('Siguiente en la fila: ', fila.front());
    } else { // Cuando la cola está vacía
      console.log('Fila vacía, pase por su turno');
      clearInterval(funcionIntervalo); // Incluimos clearInterval y le pasamos el intervalo que queremos detener
    }
}

// Ejecutamos una función intervalo para automatizar los mensajes
const funcionIntervalo = setInterval(() => atenderClientes(filaBanco), 3000)
