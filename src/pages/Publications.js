import React from 'react'
import { graphql } from 'gatsby'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { Section } from '../components/Resume'
import { Publications } from '../components/Publications'

const extract = (data, key) => {
  // Return a single array with only non-null values for the KEY lookup
  // Or an Object if this isn't array data
  let items = data.allResumeYaml.edges
    .map(({ node }) => node[key])
    .filter((item) => item !== null)
  if (Array.isArray(items[0])) {
    return items.reduce((array, elem) => array.concat(elem), [])
  } else {
    return items[0]
  }
}

const main = (props) => {
  const data = props.data
  const params = new URLSearchParams(props.location.search)
  const contact = extract(data, 'contact')
  const links = !params.has('nolinks')

  return (
    <>
          <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="/">{contact.public.name}</Navbar.Brand>
	    <Nav>
		<Nav.Link href="/Resume">resume</Nav.Link>
	    </Nav>
          </Navbar>
          <br />

      <Section title="Publications">
        <Publications links={links} data={extract(data, 'publication')} />
      </Section>
      <br />
      <br />
      <br />
    </>
  )
}

export default main

export const query = graphql`
  query {
    allResumeYaml {
      edges {
        node {
          contact {
            public {
              name
            }
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
