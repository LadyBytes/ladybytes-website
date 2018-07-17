import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Translate } from 'react-localize-redux'
import Value from './Values'
import { Playground } from '../../components'

export class Hero extends Component {
  constructor(props) {
    super(props)
    // Don't call this.setState() here!
    this.state = { showPlayground: false }
    this.togglePlayground = this.togglePlayground.bind(this);
  }

  togglePlayground() {
    this.setState({
      showPlayground: !this.state.showPlayground,
    })
  }

  render() {
    return (
      <section id="hero-section" className="segment head-section">
        <div id="ladybytes">
          <span className="ladybytes animated pulse">
            <span className="lady">
              L<span className="ady">ady</span>
            </span>
            <span className="bytes">
              B<span className="ytes">ytes</span>
            </span>
          </span>

          {/*<div id="slogan" onClick={() => this.props.parallax.scrollTo(2.85)}>*/}
          <div id="slogan" >
            <h2>
              <Translate id="slogan" />
            </h2>
          </div>
        </div>

        <div id="values">
          <Value id="skill-value" delay={250} />
          <Value id="experience-value" icon="?" delay={500} onClick={this.togglePlayground} />
          <Value
            id="donation-value"
            icon="<span class='small-value'>$</span>$<span class='small-value'>$</span>"
            delay={750}
          />
        </div>

        {<Playground show={this.state.showPlayground}/>}
      </section>
    )
  }
}

Hero.propTypes = {
  parallax: PropTypes.object,
}

export default Hero
