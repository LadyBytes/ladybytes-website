// import React, { Component } from 'react'
import en from './translations/en.json'
import { renderToStaticMarkup } from 'react-dom/server'
import { withLocalize, Translate } from 'react-localize-redux'

import './App.css'

// import { Footer, Hero, Teacher, Signup } from './components'
// // import TimingExample from './components/spring_animations/timing/'

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.props.initialize({
//       languages: [{ name: 'English', code: 'en' }],
//       translation: en,
//       options: { renderToStaticMarkup },
//     })
//   }

//   render() {
//     return (
//       <div>
//         <div className="main">
//           <Hero />
//           <Teacher />
//           <Signup />
//           <Footer />
//         </div>
//       </div>
//     )
//   }
// }§

// export default withLocalize(App)

import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'

import { Footer, Hero, Teacher, Signup } from './components'

class App extends React.Component {
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
          <Parallax ref="parallax" pages={3}>
            <Parallax.Layer offset={0} speed={1} />
            <Parallax.Layer offset={1.1} speed={1} />
            <Parallax.Layer offset={2.2} speed={1} style={{}} />

            <Parallax.Layer offset={0.15} speed={0.5}>
              <Hero parallax={this.refs.parallax} />
            </Parallax.Layer>

            <Parallax.Layer
              offset={1.1}
              speed={0.4}
              className="teacher-layer"
              onClick={() => this.refs.parallax.scrollTo(2.4)}
            >
              <Teacher />
            </Parallax.Layer>

            <Parallax.Layer offset={2} speed={0.5} onClick={() => this.refs.parallax.scrollTo(0)}>
              <Signup />
            </Parallax.Layer>
            <Parallax.Layer offset={2.85} speed={0.3} onClick={() => this.refs.parallax.scrollTo(0)}>
              <Footer />
            </Parallax.Layer>
          </Parallax>
        </div>
      </div>
    )
  }
}

export default withLocalize(App)
