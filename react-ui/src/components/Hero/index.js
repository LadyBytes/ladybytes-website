import React from 'react'
import { Translate } from 'react-localize-redux'
import Value from './Values'

const Hero = ({ id, icon, parallax }) => (
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

      <div id="slogan" onClick={() => parallax.scrollTo(2.85)}>
        <h2>
          <Translate id="slogan" />
        </h2>
      </div>
    </div>

    <div id="values">
      <Value id="skill-value" delay={250} />
      <Value id="experience-value" icon="?" delay={500} parallax={parallax} />
      <Value
        id="donation-value"
        icon="<span class='small-value'>$</span>$<span class='small-value'>$</span>"
        delay={750}
      />
    </div>
  </section>
)

export default Hero
