import { Translate } from 'react-localize-redux'
import { Spring } from 'react-spring'

import Heart from './heart.svg'

import React, { Component } from 'react'

export default class Value extends Component {
  createMarkup(icon) {
    return { __html: icon }
  }

  click = () => {
    this.props.onClick()
  }

  render() {
    let id = this.props.id
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={this.props.delay}>
        {styles => (
          <div id={id} className=" value" style={styles}>
            <div className="value-text">
              <h2 aria-hidden="true">
                {this.props.icon ? (
                  <div dangerouslySetInnerHTML={this.createMarkup(this.props.icon)} />
                ) : (
                  <img src={Heart} alt="heart" />
                )}
              </h2>

              <h3>
                <Translate id={`values.${id}.slogan`} />
              </h3>
              <p>
                <Translate id={`values.${id}.body`} />
                {id === 'experience-value' ? (
                  <span onClick={this.click} className="value-cta">
                    <Translate id="cta.value" />
                  </span>
                ) : (
                  <span />
                )}
              </p>
            </div>
          </div>
        )}
      </Spring>
    )
  }
}

// const Value = ({ id, icon, delay, onClick }) => (

// )
