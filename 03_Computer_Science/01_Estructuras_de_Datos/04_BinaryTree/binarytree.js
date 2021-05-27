console.log('Hola desde binarytree.js! 👋');

"use strict";

class Node {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}


class BinaryTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    addChild(insertionValue) {
        if (this.isEmpty()) {
            this.root = new Node(insertionValue);
            return
        } else {
            let currentNode = this.root;
            let added = false;
            while (!added && currentNode) {
                //no añadir duplicados
                if (insertionValue === currentNode.value) {
                    return "No se permiten valores duplicados"
                }

                if (insertionValue < currentNode.value) {
                    //está libre el espacio? añadir nodo
                    if (currentNode.leftChild === null) {
                        currentNode.leftChild = new Node(insertionValue);
                        added = true;
                    } else {
                        //de otra manera seguir avanzando a la izquierda
                        currentNode = currentNode.leftChild;
                    }
                } else if (insertionValue > currentNode.value) {
                    //está libre el espacio? añadir nodo
                    if (currentNode.rightChild === null) {
                        currentNode.rightChild === new Node(insertionValue);
                        added = true
                    } else {
                        // de otra manera seguir avanzando a la derecha
                        currentNode = currentNode.rightChild;
                    }
                }
            }
        }

    }

    removeChild(deletionValue) {
        let currentNode = this.root;
        let found = false;
        let nodeToRemove;
        let parentNode = null;
        //Encontrar el nodo que tenga el valor a remover
        while (!found) {
            if (currentNode === null || currentNode.value === null) {
                return "El nodo no se encontró"
            }
            // si encontramos el nodo que coincide con el valor
            // lo removemos y cambiamos el marcador de salida a verdadero
            if (deletionValue === currentNode.value) {
                nodeToRemove = currentNode;
                found = true;
                //si no lo encontramos en este nodo, es más chico? vamos a la izquierda
            } else if (deletionValue < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.leftChild;
                //si no lo encontramos en este nodo, es más grande? vamos a la derecha
            } else if (deletionValue > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.rightChild;
            }

            const nodeToRemoveIsMothersLeftChild = parentNode.leftChild === nodeToRemove

            //si el nodo a remover es una hoja (leaf) removerlo
            if (nodeToRemove.leftChild === null && nodeToRemove.rightChild === null) {
                if (nodeToRemoveIsMothersLeftChild) {
                    parentNode.leftChild = null;
                } else {
                    parentNode.rightChild = null;
                }
            } else if (nodeToRemove.leftChild !== null && nodeToRemove.rightChild === null) {
                if (nodeToRemoveIsMothersLeftChild) {
                    parentNode.leftChild = nodeToRemove.leftChild
                } else {
                    parentNode.rightChild = nodeToRemove.leftChild;
                }
            } else if (nodeToRemove.rightChild !== null && nodeToRemove.leftChild === null) {
                if (nodeToRemoveIsMothersLeftChild) {
                    parentNode.leftChild = nodeToRemove.rightChild;
                } else {
                    parentNode.rightChild = nodeToRemove.rightChild;
                }
            } else {
                // tiene dos hijas
                const rightSubTree = nodeToRemove.rightChild;
                const leftSubTree = nodeToRemove.leftChild;

                // Poner el nodo respectivo apuntando al sub-árbol derecho
                if (nodeToRemoveIsMothersLeftChild) {
                    parentNode.leftChild = rightSubTree;
                } else {
                    parentNode.rightChild = rightSubTree;
                }

                // encontrar el espacio más bajo que podamos del lado izquierdo del
                // sub-árbol derecho

                let currLeftNode = rightSubTree;
                let currLeftMother;
                let foundSpace = false;
                while (!foundSpace) {
                    if (currLeftNode === null) {
                        foundSpace = true;
                    } else {
                        currLeftMother = currLeftNode;
                        currLeftNode = currLeftNode.leftChild;
                    }
                }
                currLeftMother.leftChild = leftSubTree;
                return "El nodo fue eliminado correctamente"
            }
        }

    }
}

const tree = new BinaryTree();

tree.addChild(25);
tree.addChild(9);
tree.addChild(3);
const res = tree.addChild(3);

console.log(tree)
console.log({
    res
})
