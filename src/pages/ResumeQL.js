import React from 'react'
import { graphql } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import {
  Section,
  Employer,
  Department,
  Job,
  Bullet,
  Degree,
} from '../components/Resume'
import 'bootstrap/dist/css/bootstrap.min.css'

const extract = (data, key) => {
  // Return a single array with only non-null value for the KEY lookup
  let items = data.allResumeYaml.edges
    .map(({ node }) => node[key])
    .filter(item => item !== null)

  return items.reduce((array, elem) => array.concat(elem), [])
}

//export const Experience= props => (

export default ({ data }) => {
  let experience = extract(data, 'experience')
  let degree = extract(data, 'degree')

  //  console.log(experience)
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand>masonkatz.com</Navbar.Brand>
      </Navbar>
      <Section>
        {experience.map(e => (
          <Employer name={e.company} web={e.web}>
            {e.position.map(position => (
              <>
                {position.department !== null ? (
                  <Department name={position.department} web={position.web} />
                ) : (
                  <></>
                )}
                <Job title={position.title} dates={position.dates}>
                  {position.desc !== null ? (
                    position.desc.map(bullet => <Bullet>{bullet}</Bullet>)
                  ) : (
                    <></>
                  )}
                </Job>
              </>
            ))}
          </Employer>
        ))}
      </Section>
      <Section>
        {degree.map(d => (
          <Degree
            date={d.date}
            school={d.school}
            major={d.major}
            degree={d.degree}
          />
        ))}
      </Section>
    </>
  )
}

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
        }
      }
    }
  }
`
