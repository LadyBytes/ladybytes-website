import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Translate } from 'react-localize-redux'
import Value from './Values'
import Playground from './Playground'

export class Hero extends Component {
  constructor(props) {
    super(props)
    // Don't call this.setState() here!
    this.state = { showPlayground: false }
    this.togglePlayground = this.togglePlayground.bind(this)
  }

  togglePlayground() {
    this.setState({
      showPlayground: !this.state.showPlayground,
    })
    setTimeout(() => {
      this.state.showPlayground && document.getElementById('playground').scrollIntoView({ block: 'end', behavior: 'smooth' })
    }, 100);
  }

  render() {
    return (
      <section id="hero-section" className="segment head-section">
        <div id="ladybytes">
          <span className="ladybytes animated pulse">
            <span className="lady">
              L<span className="ady">ady</span>
            </span>
            <span id="bytes" className="bytes">
              B<span className="ytes">ytes</span>
            </span>
          </span>

          {/*<div id="slogan" onClick={() => this.props.parallax.scrollTo(2.85)}>*/}
          <div id="slogan">
            <h2>
              <Translate id="slogan" />
            </h2>
          </div>
        </div>

        <div id="values">
          <Value id="experience-value" icon="?" delay={500} onClick={this.togglePlayground} />
          <Value
            id="donation-value"
            icon="<span class='small-value'>$</span>$<span class='small-value'>$</span>"
            delay={750}
          />
          <Value id="skill-value" delay={250} />
        </div>

        {<Playground show={this.state.showPlayground} />}
      </section>
    )
  }
}

Hero.propTypes = {
  parallax: PropTypes.object,
}

export default Hero
