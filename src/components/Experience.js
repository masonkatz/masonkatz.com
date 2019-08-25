import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { Employer, Department, Job, Bullet } from '../components/Resume'

export const Experience = props => (
  <div>
    <Employer name="Teradata" web="teradata.com">
      <Job title="Director Software Engineering" dates="July 2017 - present">
        <Bullet>bullet number one</Bullet>
        <Bullet>bullet number two</Bullet>
      </Job>
    </Employer>
    <Employer name="StackIQ" web="stackiq.com">
      <Job
        title="Co-founder / Chief Technical Officer"
        dates="Feb. 2011 - July 2017"
      >
        <Bullet>
          Leading commercialization effort of open-source
          <Link href="http://www.rocksclusters.org"> Rocks Clusters </Link>
          software into public and private clouds.
        </Bullet>
      </Job>
      <Job title="Board Member" dates="Feb. 2011 - ?"></Job>
    </Employer>
    <Employer name="San Diego Supercomputer Center" web="sdsc.edu">
      <Job
        title="Group Lead, Cluster Development"
        dates="Feb. 2002 - Feb. 2011"
      >
        <Bullet>
          Supervised Rocks software development team while functioning as a lead
          developer and architect on the project. During this time Rocks grew
          from a user community of a few hundred to several thousand (estimated
          10k+ clusters world-wide).
        </Bullet>
      </Job>
      <Job title="Programmer/Analyst III" dates="May 2000 - Feb. 2002">
        <Bullet>Co-founder and architect of the Rocks Clusters project.</Bullet>
      </Job>
    </Employer>
    <Employer name="University of Californian, San Diego" web="ucsd.edu">
      <Job title="Programmer/Analyst III" dates="Jun. 1999 - May 2000">
        <Bullet>
          Member of software team developing first generation Windows NT
          clustering software, which ran in production at
          <Link href="http://www.ncsa.illinois.edu/"> NCSA </Link>. Developed a
          lock-free shared memory transport for MPI and custom firmware on
          Myrinet network cards.
        </Bullet>
      </Job>
    </Employer>
    <Employer
      name="University of Arizona"
      department="Department of Computer Sience"
      web="arizona.edu"
    >
      <Department name="Department of Computer Sience" web="cs.arizona.edu">
        <Job
          title="Systems Programmer, Principal"
          dates="Feb. 1996 - Jun. 1999"
        >
          <Bullet>
            Developed networking protocols (IPv6, IPSec) and drivers for
            embedded and user-space operating systems. Managed software
            releases, user support, and prepared grant reports.
          </Bullet>
        </Job>
      </Department>
    </Employer>
    <Employer name="Global Atmospherics">
      <Job title="Software Engineer" dates="Jun. 1991 - Feb. 1996">
        <Bullet>
          Designed and authored software for a range of embedded weather sensors
          (z80, 80186, SunOS). Ported software onto new hardware platforms,
          authored and debugged a terminal driver with nothing more than 8 LEDs
          and an oscilloscope.
        </Bullet>
      </Job>
    </Employer>

    <Employer name="Micro-Guys Consulting">
      <Job title="Co-founder" dates="Jan. 1990 - Dec. 1990">
        <Bullet>
          Created a company to tutor computer science students, and sell
          computer equipment.
        </Bullet>
      </Job>
    </Employer>
  </div>
)
