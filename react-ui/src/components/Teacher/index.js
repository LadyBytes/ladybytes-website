import React from 'react'

import { Parallax } from 'react-spring'
import { Translate } from 'react-localize-redux'
import TeacherImage from './teacher.jpeg'

const Teacher = () => (
  <section id="teacher-section">
    <div className="l-box-lrg">
      <h4>
        <Translate id="teacher.who.headline" />
      </h4>
      <p>
        <Translate id="teacher.who.body" />
      </p>
      <h4>
        <Translate id="teacher.free.headline" />
      </h4>
      <p>
        <Translate id="teacher.free.body" />
      </p>
    </div>
    <div className="l-box-lrg">
      {/*<Parallax.Layer offset={-0.4} speed={-0.3} style={{ position: 'unset', marginBottom: '10%' }}>*/}
        <img className="teacher" src={TeacherImage} alt="Lisa Wagner" />
      {/*</Parallax.Layer>*/}
    </div>
  </section>
)

export default Teacher
