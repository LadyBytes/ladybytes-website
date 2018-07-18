import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import { Translate } from 'react-localize-redux'
import $ from 'jquery'
import Form from './form.js'
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
    this.handleCssChange = this.handleCssChange.bind(this)
    this.handleClassChange = this.handleClassChange.bind(this)
  }

  handleCssChange(event) {
    event.preventDefault()
        console.log(this.state)

    $(this.state.element).css(this.state.property, this.state.value)
  }

  handleClassChange(event) {
    event.preventDefault()
    console.log(this.state)
    $(this.state.element).addClass(this.state.value)
    setTimeout(() => {
      $(this.state.element).removeClass(this.state.value)
    }, 1000)
    // setTimeout($(this.state.element).removeClass(this.state.value), 2000)
  }

  handleChange(event, i) {
    event.preventDefault()
    let target = event.target
    let value = target.value
    let name = target.name

    let property = target.getAttribute('property')
    
    this.setState({
      element: name,
      property: property,
      value: value,
    })
  }

  render() {
    return (
      <div id="prompt" style={this.props.styles}>
        <p className="comment">
          <Translate id={`playground.comment1`} />
        </p>
        <p className="comment">
          <Translate id={`playground.comment2`} />
        </p>
        <Form handleCssChange={this.handleCssChange} handleClassChange={this.handleClassChange} onChange={this.handleChange} />
      </div>
    )
  }
}
