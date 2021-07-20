import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: props.nombre,
      especie: props.especie,
      origen: props.origen,
      imagen: props.imagen,
    }
  }

  render() {
    return (
      <div className="card-personaje">
        <img className="card-imagen" src={ this.state.imagen } alt={ this.state.nombre } />
        <h4 className="card-titulo">{ this.state.nombre }</h4>
        <p className="card-texto">Especie: { this.state.especie }</p>
        <p className="card-texto">Origen: { this.state.origen }</p>
      </div>
    );
  }
}

export default Card;
