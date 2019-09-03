import React from 'react'
import { Employer, Department, Job, Bullet } from '../components/Resume'

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
  </>
)
