// COMPONENTES CLASE
// Están basados en programación orientada a objetos y usan sintaxis ES6 para ser declarados

import React from 'react';
import './style.css';

class Tarjeta extends React.Component {

  // PROPS
  // Propiedades que se pueden pasar y renderizar en nuestro componente

  // INICIAMOS EL STATE
  state = {
    nombre: this.props.nombre,
    direccion: this.props.direccion,
    telefono: this.props.telefono,
    correo: this.props.correo,
  }

  render() {
    return <div className="tarjeta-orden">
              <h3>Orden </h3>
              <p>Nombre: { this.state.nombre }</p>
              <p>Dirección: { this.state.direccion }</p>
              <p>Telefóno: { this.state.telefono }</p>
              <p>Correo: { this.state.correo }</p>
           </div>
  }
}

export default Tarjeta;
