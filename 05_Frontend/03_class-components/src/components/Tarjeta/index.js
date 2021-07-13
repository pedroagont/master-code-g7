import React from 'react';
import './style.css';

class Tarjeta extends React.Component {

  // PROPS
  // Propiedades/valores que se pueden pasar para ser renderizados en nuestro componente
  // Los props se pasan al componente como atributos de HTML: <Componente prop1="Soy el prop1" prop2="Soy el prop2" />
  // Para acceder a los props en un componente tipo clase hacemos referencia a la instancia this + el objeto props + el nombre de la propiedad: this.props.nombre
  // Los props en React no pueden ser modificados
  // Link de referencia: https://www.w3schools.com/react/react_props.asp

  // render() {
  //   return <h3>Nombre: { this.props.nombre }</h3>
  // }

  // CONSTRUCTOR
  // El método constructor inicia nuestro componente y se debe llamar antes de cualquier otra cosa
  // Se inicia con la función super para heredar las propiedades y métodos de componente React
  // Tanto el constructor como la funcion super se pasan con los props

  // constructor(props) {
  //   super(props);
  // }

  constructor(props) {
    super(props);

    // STATE
    // Una vez inicializado el componente, podemos acceder a sus variables de estado, es decir, al objeto state de los componentes React
    // El state es una propiedad en la que podemos almacenar valores que forman parte del componente
    // Cuando un valor del estado cambia, el componente se vuelve a renderizar
    // Link de referencia: https://www.w3schools.com/react/react_state.asp

    // Para acceder al estado podemos acceder a la instancia this + el objeto state
    this.state = {
      // Como los props no pueden ser modificados directamente, una buena práctica es almacenarlos como propiedades del state para permitir sus cambios
      // Como los props ya se pasaron al constructor, podemos acceder directamente a ellos, sin la palabra this
      nombre: props.nombre,
      direccion: props.direccion,
      telefono: props.telefono,
      correo: props.correo,
      color: props.color,
    }

  }

  // Desde el método render, podemos acceder a las propiedades de estado con la instancia this + la palabra state + el nombre de la propiedad
  render() {
    return <div className="tarjeta-usuario" style={{ background: this.state.color }}>
              <p>Nombre: { this.state.nombre }</p>
              <p>Dirección: { this.state.direccion }</p>
              <p>Telefóno: { this.state.telefono }</p>
              <p>Correo: { this.state.correo }</p>
           </div>
  }
}

export default Tarjeta;
