import React from 'react'
import { Employer, Department, Job } from '../components/Resume'
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser'

export const Experience = props => (
  <>
    {props.data.map(e => (
      <Employer printable={props.printable} name={e.company} web={e.web}>
        {e.position.map(position => (
          <>
            {position.department !== null ? (
              <Department
                printable={props.printable}
                name={position.department}
                web={position.web}
              />
            ) : (
              <></>
            )}
            <Job title={position.title} dates={position.dates}>
              <ul style={{ paddingLeft: '2em' }}>
                {position.desc !== null ? (
                  position.desc.map(bullet => {
                    if (props.printable) {
                      // remove <a> tags for printing (could also do with css)
                      bullet = bullet.replace(/<a/g, '<span ')
                      bullet = bullet.replace(/<\/a>/g, '</span>')
                    }
                    const transform = node => {
                      // remove the outermost <p> that Reach MD inserts.
                      if (node.type === 'tag' && node.name === 'p') {
                        node.name = 'span'
                        return convertNodeToElement(node)
                      }
                    }
                    return (
                      <li style={{ paddingLeft: 0, marginBottom: '.5em' }}>
                        {ReactHtmlParser(bullet, { transform })}
                      </li>
                    )
                  })
                ) : (
                  <></>
                )}
              </ul>
            </Job>
          </>
        ))}
      </Employer>
    ))}
  </>
)
