import React from 'react'

const Identity = props => (
  <header>
    <span className="avatar">
      <img height="128px" alt="" src={props.image} />
    </span>
    <br />
    <h1>{props.title}</h1>
    <br />
    <p>{props.subtitle}</p>
  </header>
)

const Social = props => (
  <footer>
    <ul className="icons">
      {props.links.map(social => {
        const { icon, url } = social
        return (
          <li>
            <a href={url} className={`icon ${icon}`} />
          </li>
        )
      })}
    </ul>
  </footer>
)

const Footer = props => {
  const date = new Date()
  return (
    <footer id="footer">
      <ul className="copyright">
        <li>
          &copy; {date.getFullYear()} {props.author}
        </li>
      </ul>
    </footer>
  )
}

export default () => {
  require('../assets/sass/main.scss')
  const headshot = require('../assets/images/mason.jpg')
  return (
    <div className={'main-body'}>
      <div id="wrapper">
        <section id="main">
          <Identity image={headshot} title="Mason J. Katz" />
          <Social
            links={[
              {
                icon: 'fa-twitter',
                url: 'https://twitter.com/masonkatz',
              },
              {
                icon: 'fa-linkedin',
                url: 'https://www.linkedin.com/in/masonkatz',
              },
              {
                icon: 'fa-github',
                url: 'https://github.com/masonkatz',
              },
              {
                icon: 'fa-briefcase',
                url: 'Resume',
              },
            ]}
          />
        </section>
        <Footer author="Mason Katz" />
      </div>
    </div>
  )
}
