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

  render() {
    return (
      <span>
        <form className="prompt-form" onSubmit={this.handleCssChange}>
          <Translate id={`playground.ladybytes-color`} />
          <input
            id="playground.ladybytes-color"
            name="#ladybytes"
            property="color"
            type="text"
            placeholder="yellow"
            onChange={this.change}
          />;<br />}
          <button type="submit" hidden />
        </form>
        <form className="prompt-form" onSubmit={this.handleCssChange}>
          <div>
            <Translate id={`playground.background-color`} />
            <input
              id="playground.background-color"
              name="#teacher-section"
              property="background-color"
              type="text"
              placeholder="yellow"
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
              id="playground.values-animation"
              name=".value"
              type="text"
              placeholder="animated swing"
              onChange={this.change}
            />);
            <button type="submit" hidden />
          </div>
        </form>
      </span>
    )
  }
}
