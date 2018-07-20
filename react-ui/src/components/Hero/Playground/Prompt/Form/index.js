import React, { Component } from 'react'

import { Translate } from 'react-localize-redux'

export default class Form extends Component {
  change = event => {
    this.props.onChange(event)
  }

  handleSubmit = event => {
    this.props.handleSubmit(event)
  }

  render() {
    return (
      <span>
        <form className="prompt-form" name={this.props.targetName} onSubmit={this.handleSubmit}>
          <Translate id={this.props.id} />
          <input
            list={this.props.id + '-data-list'}
            id={this.props.id}
            name={this.props.targetName}
            property={this.props.property}
            type="text"
            placeholder={this.props.placeholder}
            autoCapitalize="off"
            onChange={this.change}
          />
          <Translate id={this.props.closingChar} />
          <datalist id={this.props.id + '-data-list'}>
            {this.props.dataList.map((item, i) => <option key={i} value={item} />)}
          </datalist>
          <button type="submit" hidden />
        </form>
      </span>
    )
  }
}
