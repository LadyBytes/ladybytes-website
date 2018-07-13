import React from 'react'

import { Translate } from 'react-localize-redux'
import Form from './Form'

const Signup = () => (
  <section id="newsletter-section">
    <div className="text">
      <p>
        Leave your email and I'll reach out! We have weekly group sessions at{' '}
        <a target="_blank" href="https://goo.gl/maps/SC7MmKwxifL2">
          Cafe Beit in Williamsburg
        </a>, but I also do private lessons for special people.
      </p>
    </div>
    <Form />
  </section>
)

export default Signup
