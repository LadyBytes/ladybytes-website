import React, { Component } from 'react'
import en from './translations/en.json'
import { renderToStaticMarkup } from 'react-dom/server'
import { withLocalize, Translate } from 'react-localize-redux'

import './App.css'

import { Footer, Hero, Teacher, Signup } from './components'
// import TimingExample from './components/spring_animations/timing/'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.initialize({
      languages: [{ name: 'English', code: 'en' }],
      translation: en,
      options: { renderToStaticMarkup },
    })
  }

  render() {
    return (
      <div>
        <div className="main">
          <Hero />
          <Teacher />
          <Signup />
          <Footer />
        </div>
      </div>
    )
  }
}

export default withLocalize(App)
