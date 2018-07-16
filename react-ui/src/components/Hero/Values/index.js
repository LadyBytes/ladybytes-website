import React from 'react'
import { Translate } from 'react-localize-redux'
import { Spring } from 'react-spring'

import Heart from './heart.svg'

function createMarkup(icon) {
  return { __html: icon }
}

const Value = ({ id, icon, delay, parallax }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={delay}>
    {styles => (
      <div id={id} className=" value" style={styles}>
        <div className="value-text">
          <h2 aria-hidden="true">
            {icon ? <div dangerouslySetInnerHTML={createMarkup(icon)} /> : <img src={Heart} alt="heart" />}
          </h2>

          <h3>
            <Translate id={`values.${id}.slogan`} />
          </h3>
          <p>
            <Translate id={`values.${id}.body`} />
            { id == "experience-value" ? <span onClick={() => parallax.scrollTo(3)} className="value-cta"><Translate id="cta.value" /></span> : <span/> }
          </p>
        </div>
      </div>
    )}
  </Spring>
)

export default Value
