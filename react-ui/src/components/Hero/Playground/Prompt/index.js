import React, { Component } from 'react'

import ReactDOM from 'react-dom'

import { Translate } from 'react-localize-redux'
import $ from 'jquery'
import Form from './Form'
// error messages if invalid?
// if it does not look great, just reload!
// nothing changed, try a value like

const colorsA = ['hotpink', 'gray', 'lightseagreen', 'aquamarine', '#00edd9', '#6e2c66', 'RGB(70, 130, 180)']
const colorsB = ['hotpink', 'orange', '#00edd9', '#6e2c66', 'rgb(152, 251, 152)', 'rgba(139, 0, 139, 0.4)']
const animatedClasses = [
  'animated swing',
  'animated tada',
  'animated bounce',
  'animated lightSpeedOut',
  'animated zoomOut',
  'animated slideOutUp',
]

export default class Prompt extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleCssSubmit = this.handleCssSubmit.bind(this)
    this.handleClassSubmit = this.handleClassSubmit.bind(this)
  }

  handleCssSubmit(event) {
    event.preventDefault()
    $('input').blur()
    document.getElementById(this.state.element).scrollIntoView({ block: 'end', behavior: 'smooth' })
    $('#' + this.state.element).css(this.state.property, this.state.value)
  }

  handleClassSubmit(event) {
    event.preventDefault()
    $('input').blur()
    console.log(this.state)
    console.log(event.target)

    document.getElementById('values').scrollIntoView({ block: 'end', behavior: 'smooth' })
    $('.' + this.state.element).addClass(this.state.value)
    setTimeout(() => {
      $(this.state.element).removeClass(this.state.value)
    }, 1000)
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
        <Form
          handleSubmit={this.handleCssSubmit}
          onChange={this.handleChange}
          targetName="bytes"
          id="playground.ladybytes-color"
          property="color"
          type="text"
          placeholder="yellow"
          dataList={colorsA}
          closingChar="playground.property-end"
        />
        <Form
          handleSubmit={this.handleCssSubmit}
          onChange={this.handleChange}
          targetName="teacher-section"
          id="playground.background-color"
          property="background-color"
          placeholder="yellow"
          dataList={colorsB}
          closingChar="playground.property-end"
        />
        <Form
          handleSubmit={this.handleClassSubmit}
          onChange={this.handleChange}
          targetName="value"
          id="playground.values-animation"
          placeholder="animated swing"
          dataList={animatedClasses}
          closingChar="playground.class-end"
        />
      </div>
    )
  }
}
