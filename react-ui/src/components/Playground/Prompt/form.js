import React, { Component } from 'react'

import { Translate } from 'react-localize-redux'

export default class Form extends Component {
  change = event => {
    this.props.onChange(event)
  }

  handleCssChange = event => {
    this.props.handleCssChange(event)
  }

  handleClassChange = event => {
    this.props.handleClassChange(event)
  }

  shouldBlur = e => {
    if (e.keyCode === 40) {
      e.target.blur()
    }
  }

  render() {
    return (
      <span>
        <form className="prompt-form" onSubmit={this.handleCssChange}>
          <Translate id={`playground.ladybytes-color`} />
          <input
            onKeyDown={this.shouldBlur}
            id="playground.ladybytes-color"
            name="#ladybytes"
            property="color"
            type="text"
            placeholder="yellow"
            autoCapitalize="off"
            onChange={this.change}
          />;<br />}
          <button type="submit" hidden />
        </form>
        <form className="prompt-form" onSubmit={this.handleCssChange}>
          <div>
            <Translate id={`playground.background-color`} />
            <input
              onKeyDown={this.shouldBlur}
              id="playground.background-color"
              name="#teacher-section"
              property="background-color"
              type="text"
              placeholder="yellow"
              autoCapitalize="off"
              onChange={this.change}
            />;<br />}
            <button type="submit" hidden />
          </div>
        </form>
        <p className="comment">
          <Translate id={`playground.comment3`} />
        </p>
        <form className="prompt-form" onSubmit={this.handleClassChange}>
          <div>
            <Translate id={`playground.values-animation`} />
            <input
              onKeyDown={this.shouldBlur}
              id="playground.values-animation"
              name=".value"
              type="text"
              placeholder="animated swing"
              autoCapitalize="off"
              onChange={this.change}
            />);
            <button type="submit" hidden />
          </div>
        </form>
      </span>
    )
  }
}
