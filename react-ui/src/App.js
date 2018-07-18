// import React, { Component } from 'react'
import en from './translations/en.translations.json'
import { renderToStaticMarkup } from 'react-dom/server'
import { withLocalize, Translate } from 'react-localize-redux'

import './App.css'

import React from 'react'
import ReactDOM from 'react-dom'
// import { Parallax, Spring } from 'react-spring'

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
          {/*<Parallax.Layer offset={-3} speed={-1} > Back to top </Parallax.Layer>*/}
          {/* <Parallax.Layer offset={0} speed={1} />
            <Parallax.Layer offset={1.1} speed={1} />
            <Parallax.Layer offset={2.2} speed={1} style={{}} />*/}

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
//
//
{
  /*<Parallax ref="parallax" pages={3}>
            <Parallax.Layer offset={-3} speed={-1} > Back to top </Parallax.Layer>
            <Parallax.Layer offset={0} speed={1} />
            <Parallax.Layer offset={1.1} speed={1} />
            <Parallax.Layer offset={2.2} speed={1} style={{}} />

            <Parallax.Layer offset={0.15} speed={0.5}>
              <Hero parallax={this.refs.parallax} />
            </Parallax.Layer>

            <Parallax.Layer offset={1.1} speed={0.4} className="teacher-layer">
              <Teacher />
            </Parallax.Layer>

            <Parallax.Layer offset={2} speed={0.5}>
              <Signup />
            </Parallax.Layer>

            <Parallax.Layer offset={2.85} speed={0.3}>
              <Footer />
            </Parallax.Layer>
          </Parallax>
*/
}
