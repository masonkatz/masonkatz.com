import React from 'react'
import { Publication } from '../components/Resume'

export const Publications = ({ data }) => (
  <>
    {data.map(p => (
      <Publication
        title={p.title}
        journal={p.journal}
        issue={p.issue}
        url={p.web !== null ? p.web : p.pdf}
      />
    ))}
  </>
)
