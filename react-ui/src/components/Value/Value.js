import React from 'react'
import './value.css'
// import './animations.css'
import Heart from './heart.svg'

function createMarkup(icon) {
  return { __html: icon }
}

const Value = ({ id, icon, slogan, body }) => (
  <div id={id} className=" value animated fadeInUp">
    <div className="value-text">
      <h2 aria-hidden="true">
        {icon ? <div dangerouslySetInnerHTML={createMarkup(icon)} /> : <img src={Heart} alt="heart" />}
      </h2>
      <h3>{slogan}</h3>
      <p>{body}</p>
    </div>
  </div>
)

export default Value
