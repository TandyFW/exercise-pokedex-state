import React from 'react';

class TypeChoice extends React.Component {
  render() {

    const { type } = this.props;

    return(
      <button>{type}</button>
    );
  }
}

export default TypeChoice;