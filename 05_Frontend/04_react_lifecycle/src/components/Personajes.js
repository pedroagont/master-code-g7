import React from 'react';
import Card from './Card';
import axios from 'axios';

class Personajes extends React.Component {

  // 1. INICIALIZANDO EL COMPONENTE

  // -----> Método constructor()
  // El método constructor inicia nuestro componente y se debe llamar antes de cualquier otra cosa
  // Se inicia con la función super para heredar las propiedades y métodos de componente React
  // Tanto el constructor como la funcion super se pasan con los props

  constructor(props) {
    super(props);

    // -----> Variables de estado this.state
    // Una vez inicializado el componente, podemos acceder a sus variables de estado, es decir, al objeto state de los componentes React
    // El state es una propiedad en la que podemos almacenar valores que forman parte del componente
    // Cuando un valor del estado cambia, el componente se vuelve a renderizar
    // Link de referencia: https://www.w3schools.com/react/react_state.asp

    // Para acceder al estado podemos acceder a la instancia this + el objeto state
    this.state = {
      personajes: [],
    }

  }

  // 2. PARA MONTAR EL COMPONENTE
  componentDidMount() {
    const URL_API_RICKMORTY = 'https://rickandmortyapi.com/api/character';
    axios.get(URL_API_RICKMORTY)
      .then(response => {
        this.setState({ personajes: response.data.results });
      })
      .catch(error => console.log(error))
  }

  renderizarPersonajes() {
    const { personajes } = this.state;
    if (personajes.length === 0) {
      return <h2>Cargando personajes...</h2>
    } else if (personajes.length > 0){
      return (
        <>
          <h2> Se encontraron { personajes.length } personajes </h2>
          <div>
            {
              personajes.map(personaje => {
                return <Card key={ personaje.id } nombre={personaje.name} especie={personaje.species} origen={personaje.origin.name} imagen={personaje.image}/>
              })
            }
          </div>
        </>
      );
    }
  }

  render() {
    return(
      <>
      {
        this.renderizarPersonajes()
      }
      </>
    );
  }
}

export default Personajes;
