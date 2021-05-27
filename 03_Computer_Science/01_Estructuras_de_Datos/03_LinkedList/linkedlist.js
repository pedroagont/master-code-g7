console.log('Hola desde linkedlist.js! 👋');

"use strict";

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // función de apoyo para saber si la lsita está vacía
    isEmpty() {
        return this.length === 0;
    }

    //Agregar un nuevo valor a la cola
    push(value) {
        //nuevo nodo a insertar
        const newNode = new Node(value);

        //Checar que no esté vacía
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        //siempre llevar la cuenta
        this.length++;
    }
    printList() {
        if (this.isEmpty()) {
            return null
        } else if (this.length === 1) {
            return `${this.head.value} -> ${this.head.next}`
        } else {
            let currentNode = this.head;
            let result = ``
            while (currentNode) {

                result += `${currentNode.value} -> ${currentNode.next?"":"null"} `
                currentNode = currentNode.next
            }
            return result
        }

    }
    pushIfUnique(value) {
        //agregar un valor dado que no exista ya dentro de un nodo.

        //a) comparar el valor recibido contra los existentes

        //b) si el valor ya existe retornar null
        //c) si el valor no existe, añadirlo normal(a la cola)
        if (!value) {
            return null
        }

        if (this.isEmpty()) {
            this.push(value)
        } else {
            let currentNode = this.head;
            let valueToAdd = value;
            while (currentNode) {
                if (currentNode.value === value) {
                    valueToAdd = null
                    break;
                }
                currentNode = currentNode.next

            }
            //sintaxis con for alternativa
            // const size = this.length
            // for(let i=0; i<size; i++){
            //     const currentNode = this.get(i)
            //     if (currentNode.value === value){
            //            valueToAdd = null
            //             break;
            //     }
            //  }
            if (valueToAdd) {
                this.push(value);
            }

            return value;
        }





    }
    // quitar la cola actual (tail)
    pop() {
        //si está vacía no hay nada que quitar
        if (this.isEmpty()) {
            return null
            // Si solo hay un valor, es necesario reestablecer la lista a los valores iniciales
        } else if (this.length === 1) {
            const nodeToRemove = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return nodeToRemove;
        } else { // cuando hay múltiples nodos en la LinkedList
            let currentNode = this.head;
            const nodeToRemove = this.tail;
            let secondToLastNode;
            while (currentNode) {
                if (currentNode.next === this.tail) {
                    secondToLastNode = currentNode;
                    break;
                }
                currentNode = currentNode.next;
            }
            secondToLastNode.next = null;
            this.tail = secondToLastNode;
            this.length--;
            return nodeToRemove; //nodo removido
        }

    }

    get(index) {
        // sólo puede haber índices positivos
        // no puede ser más alto que el largo de la lista
        // Si la lista está vacía
        if (index < 0 || index > this.length || this.isEmpty()) {
            return null;
        }
        //queremos el primer nodo
        if (index === 0) {
            return this.head;
        }
        //queremos el último nodo
        if (index === (this.length - 1)) {
            return this.tail;
        }

        // queremos un nodo n que no es el último ni el primero
        let currentNode = this.head;

        //         sintaxis alternativa con for
        //         for (let i =0; i<index; i++){
        //             currentNode = currentNode.next
        //         }
        let iterator = 0;
        while (iterator < index) {
            iterator++;
            currentNode = currentNode.next;
        }

        return currentNode;


    }
}


const list = new LinkedList();

list.push(25);
list.push(40);

const demoValues = [4, 2, 25, 23, 52, 40, 65, '']

demoValues.forEach((el) => {
    //list.pushIfUnique(el)
    list.push(el)
})

console.log({
    list
})

const res = list.printList();
console.log({
    res
})
