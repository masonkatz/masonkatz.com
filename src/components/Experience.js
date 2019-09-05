import React from 'react'
import { Employer, Department, Job } from '../components/Resume'
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from 'react-html-parser'

export const Experience = ({ data }) => (
  <>
    {data.map(e => (
      <Employer name={e.company} web={e.web}>
        {e.position.map(position => (
          <>
            {position.department !== null ? (
              <Department name={position.department} web={position.web} />
            ) : (
              <></>
            )}
            <Job title={position.title} dates={position.dates}>
              {console.log(position.desc)}
              <ul>
                {position.desc !== null ? (
                  position.desc.map(bullet => {
                    // React escapes all string so we need to parse the bullets
                    // for html tags, while at it nuke the <p> that markdown adds.
                    const transform = node => {
                      if (node.type === 'tag' && node.name === 'p') {
                        node.name = 'span'
                        return convertNodeToElement(node)
                      }
                    }
                    return <li>{ReactHtmlParser(bullet, { transform })}</li>
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
