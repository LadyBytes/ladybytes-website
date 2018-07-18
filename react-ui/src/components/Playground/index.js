import React, { Component } from 'react'
import { Translate } from 'react-localize-redux'
import { Transition, Spring, animated } from 'react-spring'
import $ from 'jquery'

export class Playground extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleClick = this.handleClick.bind(this);
  }

  // suggested values
  // error messages if invalid?
  // box animations
  // if it does not look great, just reload!
  // remove playgroung for smaller screens
  handleSubmit(event) {
    event.preventDefault()
    $('#ladybytes').css('color', 'red')
  }
  handleChange(event) {
    event.preventDefault()
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    const Playground = styles => (
      <animated.section id="playground-section" style={styles}>
        {' '}
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={500}>
          {styles => (
            <div id="prompt" style={styles}>
              <p className="comment">
                <Translate id={`playground.comment`} />
              </p>
              <div>
                <Translate id={`playground.background-color`} />
                <input
                  id="playground.background-color"
                  name="playground.background-color"
                  type="text"
                  placeholder="yellow"
                  onChange={this.handleChange}
                />;<br />}
              </div>
              <br />
              <div>
                <form className="prompt-form" onSubmit={this.handleSubmit}>
                  <Translate id={`playground.ladybytes-color`} />
                  <input
                    id="playground.ladybytes-color"
                    name="playground.ladybytes-color"
                    type="text"
                    placeholder="yellow"
                    onChange={this.handleChange}
                  />;<br />}
                  <button type="submit" hidden />
                </form>
              </div>
            </div>
          )}
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
