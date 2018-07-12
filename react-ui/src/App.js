import React, { Component } from 'react'
import Value from './components/Value/Value'
import Form from './components/Form/Form'
import Teacher from './images/teacher.jpeg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: null,
      fetching: true,
      // username: null,
      values: null,
    }
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

    fetch('/api/getValues')
      .then(res => res.json())
      .then(resValues => {
        let values = resValues.map(value => {
          return (
            <Value
              id={value.id}
              className={value.class}
              slogan={value.slogan}
              body={value.body}
              icon={value.icon}
              key={value.id}
            />
          )
        })

        this.setState({ values })
      })
  }

  render() {
    return (
      <div>
        {this.state.values ? (
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

            <section id="hero-section" className="segment head-section">
              <div id="ladybytes">
                <span className="ladybytes animated pulse">
                  <span className="lady">
                    L<span className="ady">ady</span>
                  </span>
                  <span className="bytes">
                    B<span className="ytes">ytes</span>
                  </span>
                </span>

                <div id="slogan">
                  <h2>A women*-only coding class.</h2>
                </div>
              </div>
              <div id="values">{this.state.values}</div>
            </section>
            <section id="teacher-section">
              <div className="l-box-lrg">
                <h4>Who's teaching?</h4>
                <p>
                  I'm Lisa. I have a degree in Computer Science and have been working as a Developer and IT Project
                  Manager for 5 years. I taught coding as a teaching assistant and am excited to pick it up again.
                  <br />
                  <br />
                  It's freaking hard to be a woman in this field, but there's power in numbers. My plan is to
                  increase these numbers.
                </p>
                <h4>Why is it free-ish?</h4>
                <p>
                  Everyone benefits from having a basic understanding of coding - and everyone should be able to afford
                  that. At the end of each class, just throw in however much you can or want to. Think Yoga To The
                  People with less sweat.
                </p>
              </div>
              <div className="l-box-lrg">
                <img className="teacher" src={Teacher} alt="Lisa Wagner" />
              </div>
            </section>
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
            <footer>
              <p>* if you identify as a woman, you're in.</p>
            </footer>
          </div>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
      </div>
    )
  }
}

export default App
