import React from 'react'

import { withLocalize } from 'react-localize-redux'
import { renderToStaticMarkup } from 'react-dom/server'
import en from './translations/en.translations.json'

import './App.css'

import { Footer, Hero, Teacher, Signup } from './components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.props.initialize({
      languages: [{ name: 'English', code: 'en' }],
      translation: en,
      options: {
        renderToStaticMarkup,
        renderInnerHtml: true,
      },
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">

          <Hero />

          <Teacher className="teacher-layer" />

          <Signup />

          <Footer />
        </div>
      </div>
    )
  }
}

export default withLocalize(App)

