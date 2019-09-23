import React from 'react'
import { Publication } from '../components/Resume'

export const Publications = props => (
  <>
    {props.data.map(p => (
      <Publication
        printable={props.printable}
        title={p.title}
        authors={
          p.authors.slice(0, -1).join(', ') + ' and ' + p.authors.slice(-1)
        }
        journal={p.journal}
        issue={p.issue}
        url={p.web !== null ? p.web : p.pdf}
      />
    ))}
  </>
)