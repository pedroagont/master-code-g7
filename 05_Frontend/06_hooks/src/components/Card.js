import { useState } from 'react';

function Card(props) {
  const { titulo, descripcion, imagen, url } = props;

  // useState -> Inicializar y modificar el valor del estado de componentes funcionales
  // Similar a declarar this.state en componentes clase
  // Sintaxis: const [variableState, funcionModificarState] = useState('valor inicial')
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const handleDownVotes = () => {
    setVotes(votes - 1)
    setHasVoted(true)
  };
  const handleUpVotes = () => {
    setVotes(votes + 1)
    setHasVoted(true)
  };

  const renderizarBotones = () => {
    if(hasVoted === true) {
      return (
        <>
          <button disabled className="card-boton" onClick={ handleDownVotes }>🔽</button>
          <span>Votos: {votes}</span>
          <button disabled className="card-boton" onClick={ handleUpVotes }>🔼</button>
        </>
      );
    }
    return (
      <>
      <button className="card-boton" onClick={ handleDownVotes }>🔽</button>
        <span>Votos: {votes}</span>
        <button className="card-boton" onClick={ handleUpVotes }>🔼</button>
      </>
    );
  }

  return (
    <div className="card-noticia">
      <img className="card-imagen" src={ imagen } alt={ titulo } />
      <h4 className="card-titulo">{ titulo }</h4>
      <p className="card-descripcion">{ descripcion }</p>
      <a className="card-url" href={ url }>Ver más...</a>
      {
        renderizarBotones()
      }
    </div>
  );
}

export default Card;
