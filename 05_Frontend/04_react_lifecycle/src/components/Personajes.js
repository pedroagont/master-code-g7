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
      return <span>Cargando personajes...</span>
    } else if (personajes.length > 0){
      return <>
              <h4> Se encontraron { personajes.length } personajes </h4>
              <div className="">
                {
                  personajes.map(personaje => {
                    return <Card key={ personaje.id } name={personaje.name} species={personaje.species} origin={personaje.origin.name} image={personaje.image}/>
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
