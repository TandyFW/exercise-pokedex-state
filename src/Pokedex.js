import React from 'react';
import AllButtonsType from './AllButtonsType';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

  constructor() {
    super();
    this.state = {
      typeSelected: ''
    }
  }

  render() {

    const { pokemons } = this.props;

    return (
      <div>
        <div className="pokedex">
          {pokemons.filter(type => type.type.includes(this.state.typeSelected))
          .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}          
        </div>
        <AllButtonsType />
      </div>
    );
  }
}

export default Pokedex;