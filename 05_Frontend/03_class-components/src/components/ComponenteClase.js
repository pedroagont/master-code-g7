// COMPONENTES CLASE
// Están basados en programación orientada a objetos y usan sintaxis ES6 para ser declarados
// Requieren de importar la librería React para heredar (extends) adecuadamente las propiedades y los métodos/funciones de un componente React
// Link de referencia: https://reactjs.org/docs/components-and-props.html
// w3schools: https://www.w3schools.com/react/react_components.asp

import React from 'react';

class ComponenteClase extends React.Component {

  // RENDER
  // El método render() es el que nos permite retornar el bloque de código HTML que corresponde a nuestro componente tipo clase
  render() {
    return <h2>Hola desde componente clase! 👋</h2>;
  }
}

export default ComponenteClase;
