import React from 'react'

import { Section } from '../components/Resume'
import { Experience } from '../components/Experience'
import { Publications } from '../components/Publications'
import { Education } from '../components/Education'

import 'bootstrap/dist/css/bootstrap.min.css'

export default () => (
  <div>
    <Section title="Experience">
      <Experience />
    </Section>
    <Section title="Publications">
      <Publications />
    </Section>
    <Section title="Education">
      <Education />
    </Section>
  </div>
)
