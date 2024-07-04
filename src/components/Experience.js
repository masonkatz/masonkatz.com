import React from 'react'
import { Employer, Department, Job } from '../components/Resume'
import parse from 'html-react-parser';

export const Experience = props => (
  <>
    {props.data.map(e => (
      <Employer printable={props.printable} name={e.company} note={e.note} web={e.web}>
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

                    return (
			<li style={{ paddingLeft: 0, marginBottom: '.5em' }}>
                        { parse(bullet, { replace(node) {
			    if (node.type === 'tag' && node.name === 'p') {
				node.name = 'span'
				return node
			    }
			}})}
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
