import React, { Component } from 'react'
import { Transition, animated } from 'react-spring'

export class Playground extends Component {
  constructor(props) {
    super(props)
    // Don't call this.setState() here!

    // this.handleClick = this.handleClick.bind(this);
  }

  render() {

    const Playground = styles => <animated.section id="playground-section" style={styles}>
            {' '}
            <div />
          </animated.section>
    return (
      <Transition
        native
        from={{ opacity: 0, height: '0em',width: '0em' }}
        enter={{ opacity: 1, height: '25em', width: '35em' }}
        leave={{opacity: .8, height: '0em', width: '0' }}
      >
         {this.props.show ? Playground : () => null}
      </Transition>
    )
  }
}

// Hero.propTypes = {
//   show: PropTypes.bool.isRequired,
// }

export default Playground
