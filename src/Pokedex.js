import React from 'react';
import ChangePokemon from './ChangePokemon';
import Pokemon from './Pokemon';
import TypeChoice from './TypeChoice';

class Pokedex extends React.Component {

  constructor() {
    super();
    this.state = {
      typeSelected: '',
      index: 0,
      maxIndex: 0,
    }
  }

  handleClickType = (event, size) => {
    this.setState({
      typeSelected: event.target.name,
      index: 0,
      maxIndex: size,
    });
  }

  handleClickNext = () => {
    if(this.state.maxIndex - 1 > this.state.index) {
      this.setState({
        index: this.state.index + 1,
      });
    } else {
      this.setState({
        index: 0,
      });
    }
  }

  handleClickPrevious = () => {
    if(this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
      });
    } else {
      this.setState({
        index: this.state.maxIndex - 1,
      });
    }
  }

  render() {

    const { pokemons } = this.props;
    const { typeSelected, index } = this.state;

    const pokemonTypes = ['All', 'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal'];

    return (
      <div>
        <div className="pokedex">
          {typeSelected === '' ? pokemons.filter(type => type.type.includes(this.state.typeSelected))
          .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />) : 
          pokemons.filter(type => type.type.includes(this.state.typeSelected))
          .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} size={pokemons.filter(type => type.type.includes(this.state.typeSelected)).length}/>)[index]
          }
        </div>
        <div className="Types-Buttons">
          {pokemonTypes.map(pokemonType => <TypeChoice type={pokemonType} handleClick={this.handleClickType} />)}
        </div>
        <div className="Change-Butt ons">
          <ChangePokemon value="Previous" handleClick={this.handleClickPrevious} />
          <ChangePokemon value="Next" handleClick={this.handleClickNext} />
        </div>
      </div>
    );
  }
}

export default Pokedex;
