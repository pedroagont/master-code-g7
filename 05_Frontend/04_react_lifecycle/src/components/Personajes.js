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
        // handle success
        this.setState({personajes: response.data.results});
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
  }

  render() {
    return(
      this.state.personajes.map(personaje => {
        return <Card key={ personaje.id } name={personaje.name} species={personaje.species} origin={personaje.origin.name} image={personaje.image}/>
      })
    );
  }
}

export default Personajes;
