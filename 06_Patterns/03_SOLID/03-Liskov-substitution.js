// PRINCIPIO DE SUSTITUCIÓN DE LISKOV

// SIN PRINCIPIO
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(value) {
    this.width = value;
  }

  setHeight(value) {
    this.height = value;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return this.width * 2 + this.height * 2;
  }
}

class Square extends Rectangle {
  setWidth(value) {
    this.width = value;
    this.height = value;
  }

  setHeight(value) {
    this.width = value;
    this.height = value;
  }
}

// APLICANDO PRINCIPIO
class Shape {
  setColor(color) {
    this.color = color;
  }

  render(area) {
    return `Renderizando forma con área: ${area}`;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  setWidth(value) {
    this.width = value;
  }

  setHeight(value) {
    this.height = value;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return this.width * 2 + this.height * 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  setSide(value) {
    this.side = value;
  }

  getArea() {
    return this.side * this.side;
  }

  getPerimeter() {
    return this.side * 4;
  }
}
