import React from "react";
import {Helmet} from 'react-helmet'

import { withLocalize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import en from "./translations/en.translations.json";

import "./App.css";

import { Footer, Hero, Teacher, Signup } from "./components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.initialize({
      languages: [{ name: "English", code: "en" }],
      translation: en,
      options: {
        renderToStaticMarkup,
        renderInnerHtml: true
      }
    });
  }

  render() {
    return (
      <div>
        {" "}
        <Helmet>
          <title>LadyBytes Coding Classes</title>
          <meta
            name="description"
            content="Learning to code can feel intimidating, but we’ll start from the beginning. If you can copy&paste, you can take this class."
          />
        </Helmet>
        <div className="wrapper">
          <div className="main">
            <Hero />

            <Teacher className="teacher-layer" />

            <Signup />

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withLocalize(App);
