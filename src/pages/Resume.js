import React from 'react'
import { graphql } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'

import { Section, Contact } from '../components/Resume'
import { Experience } from '../components/Experience'
import { Education } from '../components/Education'
import { Publications } from '../components/Publications'

const extract = (data, key) => {
  // Return a single array with only non-null values for the KEY lookup
  // Or an Object if this isn't array data
  let items = data.allResumeYaml.edges
    .map(({ node }) => node[key])
    .filter(item => item !== null)
  if (Array.isArray(items[0])) {
    return items.reduce((array, elem) => array.concat(elem), [])
  } else {
    return items[0]
  }
}

export default props => {
  const data = props.data
  const params = new URLSearchParams(props.location.search)
  const contact = extract(data, 'contact')
  const printable = params.has('printable')
  return (
    <>
      {printable ? (
        <Section title={contact.public.name}>
          <Contact data={contact} />
        </Section>
      ) : (
        <>
          <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="/">{contact.public.name}</Navbar.Brand>
          </Navbar>
          <br />
        </>
      )}
      <Section title="Experience">
        <Experience printable={printable} data={extract(data, 'experience')} />
      </Section>
      <Section title="Publications">
        <Publications
          printable={printable}
          data={extract(data, 'publication')}
        />
      </Section>
      <Section title="Education">
        <Education printable={printable} data={extract(data, 'degree')} />
      </Section>
      <br />
      <br />
      <br />
    </>
  )
}

export const query = graphql`
  query {
    allResumeYaml {
      edges {
        node {
          contact {
            public {
              web
              name
              email
            }
            private {
              address
              city
              state
              zipcode
              phone
            }
          }
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
