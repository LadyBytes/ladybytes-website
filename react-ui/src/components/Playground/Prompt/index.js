import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import { Translate } from 'react-localize-redux'
import $ from 'jquery'
// suggested values
// error messages if invalid?
// box animations
// if it does not look great, just reload!
// remove playgroung for smaller screens
// nothing changed, try a value like

export default class Prompt extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    $('#ladybytes').css('color', 'red')
  }

  handleChange(event) {
    event.preventDefault()
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div id="prompt" style={this.props.styles}>
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
    )
  }
}
