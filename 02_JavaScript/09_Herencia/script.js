console.log('Hola desde script.js! 👋');

// HERENCIA
// La herencia es una forma en la que podemos crear una clase hija (subclase) a partir de una clase superior (super clase)
// Esta nueva clase hija, HEREDA por lo tanto, los mismos atributos y métodos de la super clase

// EJEMPLO ANIMAL > HUMANO + MASCOTA > PERRO + GATO
// SUPER CLASE ANIMAL
class Animal {
  constructor(){
    this.brain = true;
    this.legs = 0;
  }

  dormir(){
    return 'Durmiendooooo zzZzZzZzZz... 😴'
  }
}

const animal = new Animal();
console.log(animal);
console.log(animal.brain);
console.log(animal.legs);
console.log(animal.dormir());

// SUB CLASE PERSONA QUE HEREDA PROPIEDADES Y MÉTODOS DE LA CLASE SUPERIOR ANIMAL
class Humano extends Animal {
  constructor(){
    super();
    this.legs = 2;
  }

  hablar(palabras){
    return 'Soy un humano y estoy hablando: ' + palabras;
  }
}

const humano = new Humano();
console.log(humano);

// Propiedades y métodos heredados de super clase Animal
console.log(humano.brain);
console.log(humano.legs);
console.log(humano.dormir());

// Propiedaes y métodos asignados específicamente a la clase Humano
console.log(humano.hablar('Hola! 👋'));


// SUB CLASE MASCOTA QUE HEREDA PROPIEDADES Y MÉTODOS DE CLASE SUPERIOR ANIMAL
class Mascota extends Animal {
  constructor(){
    super();
    this.legs = 4;
    this.fleas = 0;
  }

  jugar(juego){
    return 'Wujuuu soy una mascota y estoy jugando: ' + juego;
  }
}

const mascota = new Mascota()
console.log(mascota);
console.log(mascota.brain);
console.log(mascota.legs);
console.log(mascota.fleas);
console.log(mascota.dormir());
console.log(mascota.jugar('pelota 🏀'));


// SUB CLASE PERRO QUE HEREDA PROPIEDADES Y MÉTODOS DE LA CLASE SUPERIOR MASCOTA
class Perro extends Mascota {
  constructor(){
    super();
    this.fleas = 8;
  }

  ladrar(){
    return 'Soy un perro y ladro guauuu guauuuu!! 🐶';
  }
}

const perro = new Perro();

console.log(perro);
console.log(perro.brain);
console.log(perro.legs);
console.log(perro.fleas);
console.log(perro.dormir());
console.log(perro.jugar('Hueso 🦴'));
console.log(perro.ladrar());

// OTRA SUB CLASE GATO QUE HEREDA PROPIEDADES Y MÉTODOS DE LA SÚPER CLASE MASCOTA
class Gato extends Mascota {
  constructor(){
    super();
    this.fleas = 4;
  }

  maullar(){
    return 'Soy un gato y maullo miauuu miauuuu!! 😸';
  }
}

const gato = new Gato();

console.log(gato);
console.log(gato.brain);
console.log(gato.legs);
console.log(gato.fleas);
console.log(gato.dormir());
console.log(gato.jugar('Estambre 🧶'));
console.log(gato.maullar());
