import React from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export const Section = props => (
  <Grid container spacing={3} direction="column">
    <Grid item>
      <Typography variant="h2">{props.title}</Typography>
    </Grid>
    <Grid item>{props.children}</Grid>
  </Grid>
)

export const Employer = props => (
  <Grid container>
    <Grid item xs={6}>
      <Typography variant="h3">{props.name}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography>
        <Link href={'http://' + props.web}>{props.web}</Link>
      </Typography>
    </Grid>
    <Grid item xs={12}>
      {props.children}
    </Grid>
    <Grid item xs={12}>
      <br></br>
    </Grid>
  </Grid>
)

export const Department = props => (
  <Grid container>
    <Grid item xs={6}>
      <Typography variant="h4">{props.name}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography>
        <Link href={'http://' + props.web}>{props.web}</Link>
      </Typography>
    </Grid>
    <Grid item xs={12}>
      {props.children}
    </Grid>
  </Grid>
)

export const Job = props => (
  <Grid container>
    <Grid item xs={6}>
      <Typography variant="h4">{props.title}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="h4">{props.dates}</Typography>
    </Grid>
    <Grid item xs={10}>
      {props.children}
    </Grid>
  </Grid>
)

export const Bullet = props => (
  <Grid container>
    <Grid item xs={12}>
      <Typography variant="body1">{props.children}</Typography>
    </Grid>
  </Grid>
)

export const Publication = props => (
  <Typography variant="body1">
    {props.title}. {props.authors}. {props.journal}. {props.issue}
    <Link href={props.url}> [link] </Link>
  </Typography>
)

export const Degree = props => (
  <Grid container>
    <Grid item xs={6}>
      <Typography variant="h3">{props.school}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="h4">{props.date}</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body1">{props.degree}</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body1">{props.major}</Typography>
    </Grid>
  </Grid>
)
