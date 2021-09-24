// PRINCIPIO DE SEGREGACIÓN DE INTERFACES

// SIN PRINCIPIO
class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  
  getName() {
    return this.name;
  }
  
  getType() {
    return this.type;
  }
  
  attack() {
    return `Soy ${this.name} y estoy atacando!`
  }
  
  fly() {
    return `Soy ${this.name} y estoy volando!`
  }
  
  swim() {
    return `Soy ${this.name} y estoy nadando!`
  }
}

class Charizard extends Pokemon {
  constructor(){
    super('Charizard', 'Fuego');
  }
  
  swim() {
    return `Soy ${this.name} y no puedo nadar!`
  }
}

class Pikachu extends Pokemon {
  constructor(){
    super('Pikachu', 'Eléctrico');
  }
  
  fly() {
    return `Soy ${this.name} y no puedo volar!`
  }
}

class Squirtle extends Swim(Pokemon) {
  constructor(){
    super('Squirtle', 'Agua');
  }
  
  fly() {
    return `Soy ${this.name} y no puedo volar!`
  }
}

// APLICANDO PRINCIPIO
class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  
  getName() {
    return this.name;
  }
  
  getType() {
    return this.type;
  }
  
  attack() {
    return `Soy ${this.name} y estoy atacando!`
  }
}

const Fly = (ClasePadre) => {
  class extends ClasePadre {
    fly() {
      return `Soy ${this.name} y estoy volando!`
    }
  }
}

const Swim = (ClasePadre) => {
  class extends ClasePadre {
    swim() {
      return `Soy ${this.name} y estoy nadando!`
    }
  }
}

class Charizard extends Fly(Pokemon) {
  constructor(){
    super('Charizard', 'Fuego');
  }
}

class Pikachu extends Pokemon {
  constructor(){
    super('Pikachu', 'Eléctrico');
  }
}

class Squirtle extends Swim(Pokemon) {
  constructor(){
    super('Squirtle', 'Agua');
  }
}
