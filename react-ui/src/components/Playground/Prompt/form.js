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
        <form className="prompt-form" name="bytes" onSubmit={this.handleCssChange}>
          <Translate id={`playground.ladybytes-color`} />
          <input
            list="bytes-data"
            id="playground.ladybytes-color"
            name="#ladybytes"
            property="color"
            type="text"
            placeholder="yellow"
            autoCapitalize="off"
            onChange={this.change}
          />;<br />}
          <datalist id="bytes-data">
            <option value="hotpink" />
            <option value="gray" />
            <option value="lightseagreen" />
            <option value="aquamarine" />
            <option value="#00edd9" />
            <option value="#6e2c66" />
            <option value="RGB(70, 130, 180)" />
          </datalist>
          <button type="submit" hidden />
        </form>
        <form className="prompt-form" name="teacher-section" onSubmit={this.handleCssChange}>
          <div>
            <Translate id={`playground.background-color`} />
            <input
              id="playground.background-color"
              name="#teacher-section"
              property="background-color"
              type="text"
              placeholder="yellow"
              autoCapitalize="off"
              list="teacher-data"
              onChange={this.change}
            />;<br />}
            <datalist id="teacher-data">
              <option value="hotpink" />
              <option value="orange" />
              <option value="#00edd9" />
              <option value="#6e2c66" />
              <option value="rgb(152, 251, 152)" />
              <option value="rgba(139, 0, 139, 0.4)" />
            </datalist>
            <button type="submit" hidden />
          </div>
        </form>
        <p className="comment">
          <Translate id={`playground.comment3`} />
        </p>
        <form className="prompt-form" name="values" onSubmit={this.handleClassChange}>
          <div>
            <Translate id={`playground.values-animation`} />
            <input
              id="playground.values-animation"
              name=".value"
              type="text"
              list="animation-data"
              placeholder="animated swing"
              autoCapitalize="off"
              onChange={this.change}
            />);
            <datalist id="animation-data">
              <option value="animated swing" />
              <option value="animated tada" />
              <option value="animated bounce" />
              <option value="animated lightSpeedOut" />
              <option value="animated zoomOut" />
              <option value="animated slideOutUp" />)}
            </datalist>
            <button type="submit" hidden />
          </div>
        </form>
      </span>
    )
  }
}
