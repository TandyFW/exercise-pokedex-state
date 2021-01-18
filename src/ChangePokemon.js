import React from 'react';

class ChangePokemon extends React.Component {
  render() {

    const { value, handleClick } = this.props;

    return(
      <button name={value} onClick={handleClick}>{value} Pokemon</button>
    );
  }
}

export default ChangePokemon;
