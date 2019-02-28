import React, { Component } from 'react'
import $ from 'jquery'
import axios from 'axios'

export default class Form extends Component {
  state = {
    isValidated: false,
  }

  constructor(props) {
    super()
    this.state = {
      success: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  validate = () => {
    const formLength = this.formEl.length

    if (this.formEl.checkValidity() === false) {
      for (let i = 0; i < formLength; i++) {
        const elem = this.formEl[i]
        const errorLabel = elem.parentNode.querySelector('.invalid-feedback')

        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          if (!elem.validity.valid) {
            if (elem.name.toLowerCase() === 'email') {
              elem.placeholder = 'i_need@an.email'
            } else {
              elem.placeholder = 'I feel empty.'
            }
            $('#newsletter-signup-form-button').addClass('animated shake')
          } else {
            errorLabel.textContent = ''
          }
        }
      }
      $('#newsletter-signup-form-button').addClass('animated shake')
      return false
    } else {
      for (let i = 0; i < formLength; i++) {
        const elem = this.formEl[i]
        const errorLabel = elem.parentNode.querySelector('.invalid-feedback')
        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          errorLabel.textContent = ''
        }
      }

      return true
    }
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.validate()) {
      
      axios
        .post('https://formspree.io/lisa@ladybytes.io', {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
        })
        .then(res => {
          console.log(res)
          $('.get-out').addClass('animated fadeOutUp')
          this.formEl.reset()
          setTimeout(
            function() {
              // $('.get-out-hide').css('visibility', 'hidden')
              this.setState({ success: true })
            }.bind(this),
            1000
          )
        })

        .catch(error => {
          $('#newsletter-signup-form-button').addClass('animated shake')

          $('.server-error').css('visibility', 'visible')
        })
    }
    this.formEl.reset()
    this.setState({ isValidated: true })
  }

  render() {
    const props = [...this.props]

    let classNames = []
    if (props.className) {
      classNames = [...props.className]
      delete props.className
    }

    if (this.state.isValidated) {
      classNames.push('.was-validated')
    }
    if (!this.state.success) {
      return (
        <div id="newsletter-signup-form">
          <div className="contact">
            <form
              ref={form => (this.formEl = form)}
              {...props}
              noValidate
              className="get-out"
              // onSubmit={this.handleSubmit}
              method="POST"
              action="https://formspree.io/lisa@ladybytes.io"
            >
              <div>
                <input
                  
                  required={true}
                  id="newsletter-signup-form-name"
                  name="name"
                  className="text-input"
                  placeholder="Name"
                />

                <div className="invalid-feedback" />
              </div>
              <div>
                <input
                  required={true}
                  id="newsletter-signup-form-email"
                  name="email"
                  type="email"
                  className="text-input"
                  placeholder="Email"
                />

                <div className="invalid-feedback" />
              </div>
              <div>
                <textarea
                  
                  rows="4"
                  type="text"
                  placeholder="Your (optional) Message!"
                  name="message"
                />
              </div>
              <div>
                <input
                  id="newsletter-signup-form-button"
                  className="signup-btn get-out-hide"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      )
    } else {
      return (
        <div id="newsletter-signup-form">
          <div id="thanks">Thanks, {this.state.name}!</div>
        </div>
      )
    }
  }
}
