console.log('Hola desde stack.js! 👋');

// STACK O PILA
// Una pila (stack en inglés) es una lista ordenada o estructura de datos que permite almacenar y recuperar datos, siendo el modo de acceso a sus elementos de tipo LIFO (del inglés Last In, First Out, «último en entrar, primero en salir»)

// IMPLEMENTACIÓN BÁSICA DE UNA PILA USANDO ARRAY
const pila = [];
console.log(pila);

// Apilar/Agregar elementos (PUSH)
console.log(pila.push('El Principito')); // 1 es el nuevo tamaño del arreglo pila = ['El Principito']
console.log(pila.push('Rayuela')); // 2 = ['El Principito', 'Rayuela']
console.log(pila.push('Historias de Cronopios y Famas')); // 3 = ['El Principito', 'Rayuela', 'Historias de Cronopios y Famas']
// console.log(pila);

// Desapilar/Remover elementos (POP)
console.log(pila.pop()); // Nos regresa el elemento que sale = 'Historias de Cronopios y Famas'
console.log(pila.pop()); // 'Rayuela'
console.log(pila.pop()); // 'El Principito'

// IMPLEMENTACIÓN DE UNA PILA USANDO CLASES
class Stack {
  constructor(){
    this.collection = [];
    this.counter = 0;
  }

  push(nuevoElemento){
    this.collection.push(nuevoElemento);
    this.counter++
    return this.counter;
  }

  pop(){
    const elementoDesapilado = this.collection.pop();
    this.counter--;
    return elementoDesapilado;
  }

  length(){
    return this.counter;
  }

  peek(){
    if(this.length() === 0) return null
    return this.collection[this.counter-1]
  }

  isEmpty(){
    if(this.length() === 0) return true
    return false
  }

}

// Creando un objeto clase Stack(pila)
const pilaAlumnos = new Stack();
console.log(pilaAlumnos);

// Apilando elementos a mi stack pilaAlumnos con PUSH()
console.log(pilaAlumnos.push('Bruno Arellano'));
console.log(pilaAlumnos.push('Gabriela Rodríguez'));
console.log(pilaAlumnos.push('Alejandra Torres'));
console.log(pilaAlumnos.push('Ana Reyes'));
console.log(pilaAlumnos);

// Desapilando elementos a mi stack pilaAlumnos con POP()
console.log(pilaAlumnos.pop()); // 'Ana Reyes'
console.log(pilaAlumnos.pop()); // 'Alejandra Torres'
console.log(pilaAlumnos);

// Viendo el tamaño de nuestra pila con LENGTH()
console.log(pilaAlumnos.length());
console.log(pilaAlumnos.pop());
console.log(pilaAlumnos.length());
console.log(pilaAlumnos);

// Viendo el último elemento de nuestra pila con PEEK()
console.log(pilaAlumnos.peek());
console.log(pilaAlumnos.push('Dan Orduña'));
console.log(pilaAlumnos.peek());

// Verificando si nuestra pila está vacía con ISEMPTY()
console.log(pilaAlumnos.isEmpty()); // false porque hasta este punto aún hay 2 elementos en la pila
console.log(pilaAlumnos.pop());
console.log(pilaAlumnos.pop());
console.log(pilaAlumnos.isEmpty()); // true porque en las dos líneas anteriores quitamos los 2 elementos que había en nuestra pila, por lo que ahora está vacía
