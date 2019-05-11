import React from 'react'

import { Translate } from 'react-localize-redux'
import Form from './Form'

const Signup = () => (
  <section id="newsletter-section">
    <div className="text">
      <p>
        <Translate id={`signup.body`} />
      </p>
    </div>
    <Form />
  </section>
)

export default Signup
