import React from 'react';
import pokemons from './data';

class TypeChoice extends React.Component {

  render() {

    const { type , handleClick } = this.props;

    const size = pokemons.filter(poke => poke.type === type).length;

    return(
      <button onClick={(event) => handleClick(event, size)}  name={type !== 'All' ? type : ''}>{type}</button>
    );
  }
}

export default TypeChoice;