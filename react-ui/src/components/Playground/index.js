import React, { Component } from 'react'
// import { Translate } from 'react-localize-redux'
import { Transition, Spring, animated } from 'react-spring'
import Responsive from 'react-responsive'

import Prompt from './Prompt'


const TabletAndUp = props => <Responsive {...props} minWidth={'35.6em'} />
const Mobile = props => <Responsive {...props} maxWidth={'35.5em'} />

export class Playground extends Component {
  // constructor(props) {
  //   super(props)
  // }
  //
  //

  render() {
    const Playground = styles => (
      <animated.div style={styles}>
        {' '}
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={500}>
          {styles => <Prompt style={styles} />}
        </Spring>
      </animated.div>
    )

    return (
      <div id="playground">
        <Mobile>
          <Transition
            native
            from={{ opacity: 0, height: '0em', width: '0em' }}
            enter={{ opacity: 1, height: '45em', width: '18em' }}
            leave={{ opacity: 0, height: '0em', width: '0' }}
          >
            {this.props.show ? Playground : () => null}
          </Transition>
        </Mobile>

        <TabletAndUp>
          <Transition
            native
            from={{ opacity: 0, height: '0em', width: '0em' }}
            enter={{ opacity: 1, height: '30em', width: '35em' }}
            leave={{ opacity: 0, height: '0em', width: '0' }}
          >
            {this.props.show ? Playground : () => null}
          </Transition>
        </TabletAndUp>
{/*
        <Desktop>
          <Transition
            native
            from={{ opacity: 0, height: '0em', width: '0em' }}
            enter={{ opacity: 1, height: '45em', width: '45em' }}
            leave={{ opacity: 0, height: '0em', width: '0' }}
          >
            {this.props.show ? Playground : () => null}
          </Transition>
        </Desktop>*/}
      </div>
    )
  }
}

// Hero.propTypes = {
//   show: PropTypes.bool.isRequired,
// }

export default Playground
