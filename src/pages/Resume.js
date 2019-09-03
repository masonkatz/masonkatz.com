import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card'

import { Section } from '../components/Resume'
import { Experience } from '../components/Experience'
import { Publications } from '../components/Publications'
import { Education } from '../components/Education'

import 'bootstrap/dist/css/bootstrap.min.css'

export default () => (
  <>
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand>masonkatz.com</Navbar.Brand>
    </Navbar>
    <Card title="Experience">
      <Card.Header>Experience</Card.Header>
      <Card.Body>
        <Experience />
      </Card.Body>
    </Card>
    <Section title="Publications">
      <Publications />
    </Section>
    <Section title="Education">
      <Education />
    </Section>
  </>
)
