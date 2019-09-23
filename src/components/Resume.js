import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { H1, H2, H3, H4, H5 } from './Common'

/* #cv p {
 *     text-align: justify;
 * }
 *
 * #cv h3 {
 *     margin-bottom: 8px;
 * }
 */

const styles = {
  section: {
    title: {
      textTransform: 'uppercase',
    },
  },
  contact: {
    web: {
      textAlign: 'right',
    },
    email: {
      textAlign: 'right',
    },
    phone: {
      textAlign: 'right',
    },
  },
  employer: {
    link: {
      textAlign: 'right',
      //      alignSelf: 'center',
    },
  },
  department: {
    link: {
      textAlign: 'right',
      alignSelf: 'bottom',
    },
  },
  job: {
    dates: {
      textAlign: 'right',
      fontStyle: 'italic',
      alignSelf: 'bottom',
    },
  },
  publication: {
    title: {
      textDecoration: 'underline',
    },
    journal: {
      fontStyle: 'italic',
    },
    link: {
      fontVariant: 'small-caps',
      fontWeight: 'bold',
      fontSize: '13px',
    },
  },
  degree: {
    school: {},
    major: {},
    degree: {},
    date: {
      textAlign: 'right',
      fontStyle: 'italic',
      alignSelf: 'center',
    },
  },
}

export const Section = props => (
  <Container style={{ margin: '0' }}>
    <Row>
      <Col xs="12" style={styles.section.title}>
        <H1>{props.title}</H1>
        <hr style={{ marginTop: '0', marginBottom: '1em' }}></hr>
      </Col>
    </Row>
    <Row>
      <Col xs="12">{props.children}</Col>
    </Row>
  </Container>
)

export const Contact = props => (
  <>
    <Container>
      <Row>
        <Col xs={9}>{props.data.private.address}</Col>
        <Col xs={3} style={styles.contact.web}>
          {props.data.public.web}
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          {props.data.private.city}, {props.data.private.state}
        </Col>
        <Col xs={3} style={styles.contact.email}>
          {props.data.public.email}
        </Col>
      </Row>
      <Row>
        <Col xs={9}>{props.data.private.zipcode}</Col>
        <Col xs={3} style={styles.contact.phone}>
          {props.data.private.phone}
        </Col>
      </Row>
    </Container>
    <br />
  </>
)

export const Employer = props => (
  <div>
    <Container>
      <Row>
        <Col xs={12} md={9}>
          <H2>{props.name}</H2>
        </Col>
        {props.printable ? (
          <></>
        ) : (
          <Col xs={12} md={3}>
            <div style={styles.employer.link}>
              <a href={'http://' + props.web}>{props.web}</a>
            </div>
          </Col>
        )}
      </Row>
      {props.children}
    </Container>
  </div>
)

export const Department = props => (
  <div>
    <Row>
      <Col xs={12} md={9}>
        <H3>{props.name}</H3>
      </Col>
      {props.printable ? (
        <></>
      ) : (
        <Col xs={12} md={3} style={styles.department.link}>
          <a href={'http://' + props.web}>{props.web}</a>
        </Col>
      )}
    </Row>
    {props.children}
  </div>
)

export const Job = props => (
  <div>
    <Row>
      <Col xs={12} md={9}>
        <H4>{props.title}</H4>
      </Col>
      <Col xs={12} md={3} style={styles.job.dates}>
        <i>{props.dates}</i>
      </Col>
    </Row>
    <Row>
      <Col>{props.children}</Col>
    </Row>
  </div>
)

export const Publication = props => (
  <Container>
    <Row>
      <Col xs={12}>
        <p>
          <span style={styles.publication.title}>{props.title}</span>.{' '}
          <span style={styles.publication.authors}>{props.authors}</span>.{' '}
          <span style={styles.publication.journal}>{props.journal}</span>.{' '}
          <span style={styles.publication.issue}>{props.issue}</span>{' '}
          {props.printable ? (
            <></>
          ) : (
            <span style={styles.publication.link}>
              <a href={props.url}>[link]</a>
            </span>
          )}
        </p>
      </Col>
    </Row>
  </Container>
)

export const Degree = props => (
  <Container>
    <Row>
      <Col xs={12} md={9} style={styles.degree.school}>
        <H2>{props.school}</H2>
      </Col>
      <Col xs={12} md={3} style={styles.degree.date}>
        {props.date}
      </Col>
    </Row>
    <Row>
      <Col xs={12} style={styles.degree.degree}>
        {props.degree}
      </Col>
    </Row>
    <Row>
      <Col xs={12} style={styles.degree.major}>
        {props.major}
      </Col>
    </Row>
  </Container>
)
