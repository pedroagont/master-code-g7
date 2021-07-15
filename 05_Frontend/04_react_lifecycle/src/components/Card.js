import React from 'react';

class Personaje extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: props.name,
      especie: props.species,
      origen: props.origin,
      imagen: props.image,
    }
  }

  render() {
    return (
      <div className="card-personaje">
        <img className="card-imagen" src={ this.state.imagen } alt={ this.state.nombre } />
        <h4 className="card-titulo">Nombre: { this.state.nombre }</h4>
        <p className="card-texto">Especie: { this.state.especie }</p>
        <p className="card-texto">Origen: { this.state.origen }</p>
      </div>
    );
  }
}

export default Personaje;
