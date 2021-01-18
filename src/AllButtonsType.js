import React from 'react';
import TypeChoice from './TypeChoice';

class AllButtonsType extends React.Component {

  render() {

    const pokemonTypes = ['All', 'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal'];
    const { typeSelected } = this.props;

    return (
      <div className="Buttons">
        {pokemonTypes.map(pokemonType => <TypeChoice type={pokemonType} value={typeSelected} />)}
      </div>
    );
  }
}

export default AllButtonsType;
