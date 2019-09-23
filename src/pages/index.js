import React from 'react'
import styles from '../assets/sass/main.module.scss'

const Identity = props => (
  <header>
    <span className={styles.avatar}>
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
    <ul className={styles.icons}>
      {props.links.map(social => {
        const { icon, url } = social
        console.log(icon)
        return (
          <li>
            <a href={url} className={styles.icon + ' ' + icon} />
          </li>
        )
      })}
    </ul>
  </footer>
)

const Footer = props => {
  const date = new Date()
  return (
    <footer id={styles.footer}>
      <ul className={styles.copyright}>
        <li>
          &copy; {date.getFullYear()} {props.author}
        </li>
      </ul>
    </footer>
  )
}

export default () => {
  const headshot = require('../assets/images/mason.jpg')
  return (
    <div className={styles.mainBody}>
      <div id={styles.wrapper}>
        <section id={styles.main}>
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
