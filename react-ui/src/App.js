import React, { Component } from 'react'
import en from './translations/en.json'
import { renderToStaticMarkup } from 'react-dom/server'
import { withLocalize, Translate } from 'react-localize-redux'
import Form from './components/Form/Form'
import './App.css'

import { Hero, Teacher, Signup } from './components/Sections/'
// import TimingExample from './components/spring_animations/timing/'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: null,
      fetching: true,
      // username: null,
      // values: null,
    }

    this.props.initialize({
      languages: [{ name: 'English', code: 'en' }],
      translation: en,
      options: { renderToStaticMarkup },
    })
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`)
        }
        return response.json()
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false,
        })
      })
      .catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false,
        })
      })

    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }))

    // fetch('/api/getValues')
    //   .then(res => res.json())
    //   .then(resValues => {
    //     let values = resValues.map(value => {
    //       return (
    //         <Value
    //           id={value.id}
    //           className={value.class}
    //           slogan={value.slogan}
    //           body={value.body}
    //           icon={value.icon}
    //           key={value.id}
    //         />
    //       )
    //     })

    //     this.setState({ values })
    //   })
  }

  render() {
    return (
      <div>
        <div className="main">
          <header>
            {/*  <a href="#" id="logo">
                LadyBytes
              </a>
              <nav>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Values</a>
                  </li>
                  <li>
                    <a href="#">Teacher</a>
                  </li>
                </ul>
              </nav>*/}
          </header>

          <Hero />
          <Teacher />
          <Signup />
          <footer>
            <p>* if you identify as a woman, you're in.</p>
          </footer>
        </div>
        {/*   ) : (
          <h1>Loading.. please wait!</h1>
        )}*/}
      </div>
    )
  }
}

export default withLocalize(App)
