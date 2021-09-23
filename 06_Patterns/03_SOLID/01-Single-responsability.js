// PRINCIPIO DE RESPONSABILIDAD SIMPLE

// SIN PRINCIPIO
class Square {
  constructor(side) {
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }

  calculatePerimeter() {
    return this.side * 4;
  }

  draw(resolution = 'HD') {
    if (resolution === 'HD') {
      console.log('Dibujando un cuadrado de alta HD 😎');
    } else {
      console.log('Dibujando un cuadrado 🟥');
    }
  }

  rotate(degrees = 0) {
    console.log(`Rotando el cuadrado ${degrees} grados 🔄`);
  }
}

// APLICANDO PRINCIPIO
class Square {
  constructor(side) {
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }

  calculatePerimeter() {
    return this.side * 4;
  }
}

class SquareUI {
  draw(resolution = 'HD') {
    if (resolution === 'HD') {
      console.log('Dibujando un cuadrado de alta HD 😎');
    } else {
      console.log('Dibujando un cuadrado 🟥');
    }
  }

  rotate(degrees = 0) {
    console.log(`Rotando el cuadrado ${degrees} grados 🔄`);
  }
}
