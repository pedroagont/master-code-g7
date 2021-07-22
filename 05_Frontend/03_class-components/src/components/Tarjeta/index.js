import React from 'react';
import './style.css';

class Tarjeta extends React.Component {

  // PROPS
  // Propiedades/valores que se pueden pasar para ser renderizados en nuestro componente
  // Los props se pasan al componente como atributos de HTML: <Componente prop1="Soy el prop1" prop2="Soy el prop2" />
  // Para acceder a los props en un componente tipo clase hacemos referencia a la instancia this + el objeto props + el nombre de la propiedad: this.props.nombre
  // Los props en React no pueden ser modificados
  // Link de referencia: https://www.w3schools.com/react/react_props.asp

  render() {
    return <div className="tarjeta-usuario" style={{ background: this.props.color }}>
              <p>Nombre: { this.props.nombre }</p>
              <p>Dirección: { this.props.direccion }</p>
              <p>Telefóno: { this.props.telefono }</p>
              <p>Correo: { this.props.correo }</p>
           </div>
  }
}

export default Tarjeta;
