import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card-personaje">
        <img className="card-imagen" src={ this.props.imagen } alt={ this.props.nombre } />
        <h4 className="card-titulo">{ this.props.nombre }</h4>
        <p className="card-texto">Especie: { this.props.especie }</p>
        <p className="card-texto">Origen: { this.props.origen }</p>
      </div>
    );
  }
}

export default Card;
