import React, { Component } from 'react'
// import { Translate } from 'react-localize-redux'
import { Transition, Spring, animated } from 'react-spring'

import Prompt from './Prompt'

export class Playground extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const Playground = styles => (
      <animated.section id="playground-section" style={styles}>
        {' '}
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={500}>
          {styles => <Prompt style={styles} />}
        </Spring>
      </animated.section>
    )

    return (
      <Transition
        native
        from={{ opacity: 0, height: '0em', width: '0em' }}
        enter={{ opacity: 1, height: '35em', width: '45em' }}
        leave={{ opacity: 0, height: '0em', width: '0' }}
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
