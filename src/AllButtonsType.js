import React from 'react';
import TypeChoice from './TypeChoice';

class AllButtonsType extends React.Component {
  render() {

    const pokemonTypes = ['All', 'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal'];

    return (
      <div>
        {pokemonTypes.map(pokemonType => <TypeChoice type={pokemonType} />)}
      </div>
    );
  }
}

export default AllButtonsType;
