import React from 'react'
import {Translate } from 'react-localize-redux'
import Heart from './heart.svg'

function createMarkup(icon) {
  return { __html: icon }
}


const Value = ({ id, icon }) => (
  <div id={id} className=" value">
    <div className="value-text">
      <h2 aria-hidden="true">
        {icon ? <div dangerouslySetInnerHTML={createMarkup(icon)} /> : <img src={Heart} alt="heart" />}
      </h2>
      <h3><Translate id={`values.${id}.slogan`}/></h3>
      <p><Translate id={`values.${id}.body`}/></p>
    </div>
  </div>
)

export default Value
