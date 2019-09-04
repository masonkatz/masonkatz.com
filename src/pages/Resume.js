import React from 'react'
import { graphql } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import { Section } from '../components/Resume'

import { Experience } from '../components/Experience'
import { Education } from '../components/Education'
import { Publications } from '../components/Publications'

import 'bootstrap/dist/css/bootstrap.min.css'

const extract = (data, key) => {
  // Return a single array with only non-null value for the KEY lookup
  let items = data.allResumeYaml.edges
    .map(({ node }) => node[key])
    .filter(item => item !== null)

  return items.reduce((array, elem) => array.concat(elem), [])
}

export default ({ data }) => (
  <>
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand>masonkatz.com</Navbar.Brand>
    </Navbar>
    <Section title="Experience">
      <Experience data={extract(data, 'experience')} />
    </Section>
    <Section title="Publications">
      <Publications data={extract(data, 'publication')} />
    </Section>
    <Section title="Education">
      <Education data={extract(data, 'degree')} />
    </Section>
  </>
)

export const query = graphql`
  query {
    allResumeYaml {
      edges {
        node {
          experience {
            company
            web
            position {
              department
              web
              title
              dates
              desc
            }
          }
          degree {
            school
            degree
            major
            date
          }
          publication {
            title
            authors
            journal
            issue
            web
            pdf
          }
        }
      }
    }
  }
`
