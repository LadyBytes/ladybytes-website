import React from 'react'
import { Parallax } from 'react-spring'
import { Translate } from 'react-localize-redux'
import Value from './Values'


const Hero = ({ id, icon, slogan, body, parallax }) => (
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

      <div id="slogan" onClick={() => parallax.scrollTo(3.3)}>

        <h2>
          <Translate id="slogan" />
        </h2>
      </div>
    </div>

    <div id="values">
      <Value id="skill-value" />

      <Value id="experience-value" icon="?" />
      <Value id="donation-value" icon="<span class='small-value'>$</span>$<span class='small-value'>$</span>" />
    </div>
  </section>
)

export default Hero
