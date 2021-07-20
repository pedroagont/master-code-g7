import React from 'react';
import Card from './Card';
import axios from 'axios';

class Personajes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personajes: [],
    }
  }

  componentDidMount() {
    const URL_API_RICKMORTY = 'https://rickandmortyapi.com/api/character';

    axios.get(URL_API_RICKMORTY)
      .then(response => {
        console.log(response);
        const personajes = response.data.results
        this.setState({ personajes });
      })
      .catch(error => {
        console.log(error);
      })
  }

  renderizarPersonajes() {
    const { personajes } = this.state;
    if (personajes.length === 0) {
      return <h2>Cargando personajes...</h2>
    } else if (personajes.length > 0){
      return <>
              <h2> Se encontraron { personajes.length } personajes </h2>
              <div>
                {
                  personajes.map(personaje => {
                    return <Card key={ personaje.id } nombre={personaje.name} especie={personaje.species} origen={personaje.origin.name} imagen={personaje.image}/>
                  })
                }
              </div>
            </>
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
