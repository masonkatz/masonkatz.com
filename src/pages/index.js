import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
//import Card from 'react-bootstrap/Card'
//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
//import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/sass/main.scss'

const config = {
  social: [
    {
      icon: 'fa-github',
      url: 'https://github.com/masonkatz',
    },
    {
      icon: 'fa-twitter',
      url: 'https://twitter.com/masonkatz',
    },
    {
      icon: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/masonkatz',
    },
  ],
}

const headshot = require('../assets/images/mason.jpg')

const Avatar = props => (
  <header>
    <span className="avatar">
      <img height="128px" src={props.image} />
    </span>
    <br />
    <h1>{props.title}</h1>
    <br />
    <p>{props.subtitle}</p>
  </header>
)

export default () => (
  <div className={'main-body'}>
    <div id="wrapper">
      <section id="main">
        <Avatar image={headshot} title="Mason J. Katz" />

        <footer>
          <ul className="icons">
            {config.social.map(social => {
              const { icon, url } = social
              return (
                <li>
                  <a href={url} className={`icon ${icon}`} />
                </li>
              )
            })}
          </ul>
        </footer>
      </section>
      <footer id="footer">
        <ul className="copyright">
          <li>&copy; 2019 Mason Katz</li>
        </ul>
      </footer>
    </div>
  </div>
)
