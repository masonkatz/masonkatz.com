import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { Degree } from '../components/Resume'

export const Education = props => (
  <Degree
    date="1992"
    school="Univerity of Arizona"
    major="Systems Engineering"
    degree="Bachelors of Science"
  />
)
