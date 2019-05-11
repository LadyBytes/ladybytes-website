import React from 'react'

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
      <img className="teacher" src={TeacherImage} alt="Lisa Wagner" />
    </div>
  </section>
)

export default Teacher
