import * as React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

import headshot from '../images/mason.jpg'

const main = (props) => {
    return (
	<>
	    <Navbar bg="light" expand="lg" sticky="top">
		<Navbar.Brand href="/">Mason Katz</Navbar.Brand>
		<Nav>
		    <Nav.Link href="/Resume">about</Nav.Link>
		</Nav>
	    </Navbar>

	    <br/>

	    <Container fluid>
		<Row>
		    <Col>
			<Image src={headshot} roundedCircle/>
		    </Col>
		</Row>
	    </Container>

	    <br/>

	    <Container fluid>
		<Row>
		    <Col>
			<FontAwesomeIcon icon={faLinkedin} />&nbsp;&nbsp;&nbsp;
			<a href="https://www.linkedin.com/in/masonkatz">linkedin</a>
		    </Col>
		</Row>
		<Row>
		    <Col>
			<FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;&nbsp;
			<a href="https://github.com/masonkatz">github</a>
		    </Col>
		</Row>
		<Row>
		    <Col>
			<FontAwesomeIcon icon={faTwitter} />&nbsp;&nbsp;&nbsp;
			<a href="https://twitter.com/masonkatz">twitter</a>
		    </Col>
		</Row>
	    </Container>



      </>
 )
}

export default main

 
