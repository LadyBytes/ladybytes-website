import React, { Component } from 'react'
import $ from 'jquery'

// import Plane from './paper-plane.svg'

export default class Form extends Component {
	state = {
		isValidated: false,
	}

	constructor(props) {
		super()
		this.state = {
			success: false,
		}

		// This binding is necessary to make `this` work in the callback
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	componentWillUpdate() {
		setTimeout(function() {
			$('#thanks')
				.addClass('animated jackInTheBox')
				.animate({ opacity: 1 }, 400)
		}, 200)

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

		// ?if (this.validate()) {
		if (this.validate()) {
			$.ajax({
				type: 'POST',
				url: '/api/signup',
				data: {
					name: this.state.name,
					email: this.state.email,
				},
				success: function(data) {
					$('.get-out').addClass('animated fadeOutUp')
					this.formEl.reset()
					setTimeout(
						function() {
							// $('.get-out-hide').css('visibility', 'hidden')
							this.setState({ success: true })
						}.bind(this),
						1000
					)
				}.bind(this),
				error: function() {
					$('#newsletter-signup-form-button').addClass('animated shake')
					// const elem = this.formEl[2]
					$('.server-error').css('visibility', 'visible')
				},
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
					<div className="server-error">
						I've got (server) issues. Mind shooting me an email at{' '}
						<a href="mailto:lisa@ladybytes.io">lisa@ladybytes.io</a> ?
					</div>
					<form
						ref={form => (this.formEl = form)}
						{...props}
						noValidate
						className="get-out"
						onSubmit={this.handleSubmit}
					>
						<div>
							<input
								onChange={this.handleChange}
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
								onChange={this.handleChange}
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
							<input
								onSubmit={this.handleSubmit}
								id="newsletter-signup-form-button"
								className="signup-btn get-out-hide"
								type="submit"
								defaultValue="Sign Up!"
							/>
						</div>
					</form>
				</div>
			)
		} else {
			return (
				<div id="newsletter-signup-form">
					<div className="plane-and-simple">
						{/*<div id="plane">
							<img src={Plane} alt="email paper-plane icon" />
						</div>*/}
						<div id="thanks">Thanks, {this.state.name}!</div>
					</div>
				</div>
			)
		}
	}
}
