import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'

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
  employer: {
    link: {
      textAlign: 'right',
      alignSelf: 'center',
    },
  },
  department: {
    link: {
      textAlign: 'right',
      alignSelf: 'center',
    },
  },
  job: {
    dates: {
      textAlign: 'right',
      fontStyle: 'italic',
      alignSelf: 'center',
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
  <Container>
    <Row>
      <Col xs="12" style={styles.section.title}>
        <h2>{props.title}</h2>
        <hr></hr>
      </Col>
    </Row>
    <Row>
      <Col xs="12">{props.children}</Col>
    </Row>
  </Container>
)

export const Employer = props => (
  <div>
    <Container>
      <Row>
        <Col xs={12} md={9}>
          <h3>{props.name}</h3>
        </Col>
        <Col xs={12} md={3}>
          <div style={styles.employer.link}>
            <a href={'http://' + props.web}>{props.web}</a>
          </div>
        </Col>
      </Row>
      {props.children}
    </Container>
    <br></br>
  </div>
)

export const Department = props => (
  <div>
    <Row>
      <Col xs={12} md={9}>
        <h4>{props.name}</h4>
      </Col>
      <Col xs={12} md={3} style={styles.department.link}>
        <a href={'http://' + props.web}>{props.web}</a>
      </Col>
    </Row>
    {props.children}
  </div>
)

export const Job = props => (
  <div>
    <Row>
      <Col xs={12} md={9}>
        <h5>{props.title}</h5>
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

export const Bullet = props => (
  <Container>
    <Row>
      <Col xs={12}>{props.children}</Col>
    </Row>
  </Container>
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
          <span style={styles.publication.link}>
            <a href={props.url}>[link]</a>
          </span>
        </p>
      </Col>
    </Row>
  </Container>
)

export const Degree = props => (
  <Container>
    <Row>
      <Col xs={12} md={9} style={styles.degree.school}>
        <h3>{props.school}</h3>
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
