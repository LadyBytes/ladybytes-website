import React, { Component } from 'react';

export class Playground extends Component {
  constructor(props) {
  super(props);
  // Don't call this.setState() here!
 
  // this.handleClick = this.handleClick.bind(this);
}

  render() {
    return (
      <section id="playground-section">
      <div ></div>
      </section>
    );
  }
}

// Hero.propTypes = {
//   show: PropTypes.bool.isRequired,
// }


export default Playground