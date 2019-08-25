import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { Section, Publication } from '../components/Resume'

export const Publications = props => (
  <div>
    <Publication
      title="The OptIPortal, a scalable visualization, storage, and computing interface device for the OptiPuter"
      authors="T. A. DeFanti, J. Leigh, L. Renambot, B. Jeong, A. Verlo, L. Long, M. Brown, D. J. Sandin, V. Vishwanath, Q. Liu, M. J. Katz, P. Papadopoulos, J. P. Keefe, G. R. Hidley, G. L. Dawe, I. Kaufman, B. Glogowski, K. Doerr, R. Singh, J. Girado, J. P. Schulze, and L. Smarr"
      journal="Future Generation Computer Systems"
      issue="Feb. 2009, Volume 25, Issue 2, pg. 114-123"
      url="http://www.sciencedirect.com/science?_ob=ArticleURL&_udi=B6V06-4T4HP0V-1&_user=10&_coverDate=02%2F28%2F2009&_rdoc=1&_fmt=high&_orig=gateway&_origin=gateway&_sort=d&_docanchor=&view=c&_searchStrId=1733264677&_rerunOrigin=google&_acct=C000050221&_version=1&_urlVersion=0&_userid=10&md5=1f1ef7572de39cc793e9a60ad7fd6b35&searchtype=a"
    />
    <Publication
      title="Lessons learned through driving science applications in the PRAGMA grid"
      authors="C. Zheng, M. J. Katz, P. M. Papadopoulos, D. Abramson, S. Ayyub, C. Enticott, S. Garic, W. Goscinski, P. Arzberger, B. Lee, S. Phatanapherom, S. Sriprayoonsakul, P. Uthayopas, Y. Tanaka, Y. Tanimura, and O. Tatebe"
      journal="International Journal of Web and Grid Services"
      issue="2007, Volume 3, Issue 3, pg. 287-312"
      url="../assets/papers/zheng07-ijwgs.pdf"
    />
    <Publication
      title="Beyond Beowulf Clusters"
      authors="Papadopoulos, G. Bruno, and M. Katz"
      journal="ACM Queue"
      issue="Apr. 2007, Volume 5, Issue 3, pg. 36-43"
      url="../assets/papers/papadopoulos07-queue.pdf"
    />
    <Publication
      title="The PRAGMA Testbed: Building a Multi-Application International Grid"
      authors="C. Zheng, D. Abramson, P. Arzberger, S. Ayyub, C. Enticott, S. Garic, M. J. Katz, J. Kwak, B. S. Lee, Phil M. Papadopoulos, S. Phatanapherom, S. Sriprayoonsakul, Y. Tanaka, Y. Tanimura, O. Tatebe, and P. Uthayopas"
      journal="CCGrid"
      issue="Singapore, May 2006"
      url="../assets/zheng06-ccgrid.pdf"
    />
    <Publication
      title="Incorporation of middleware and grid technologies to enhance usability in Computational Chemistry Applications"
      authors="J. P. Greenberg, M. J. Katz, G. Bruno, F. D. Sacerdoti, P. M. Papadopoulos, and K. K. Baldridge"
      journal="Future Generation Computer Systems"
      issue="Jan. 2005, Volume 21, Issue 1, pg. 3-10"
      url="http://www.sciencedirect.com/science?_ob=ArticleURL&_udi=B6V06-4DN9PB2-1&_user=10&_coverDate=01%2F01%2F2005&_rdoc=1&_fmt=high&_orig=gateway&_origin=gateway&_sort=d&_docanchor=&view=c&_acct=C000050221&_version=1&_urlVersion=0&_userid=10&md5=eee5850b4dcac43e2740f9ec068b7456&searchtype=a"
    />
    <Publication
      title="411 on Scalable Password Service"
      authors="D. Sacerdoti, M. J. Katz, G. Bruno, and P. M. Papadopoulos"
      journal="IEEE HPDC"
      issue="North Carolina, July 2005"
      url="../assets/papers/sacerdoti05-hpdc.pdf"
    />
    <Publication
      title="Rolls: Modifying a Standard System Installer to Support User-Customizable Cluster Frontend Appliances"
      authors="G. Bruno, M. J. Katz, F. D. Sacerdoti, and P. M. Papadopoulos"
      journal="IEEE International Conference on Cluster Computing"
      issue="San Diego, California, Sep. 2004"
      url="../assets/papers/bruno04-cluster.pdf"
    />
    <Publication
      title="NPACI Rocks: tools and techniques for easily deploying manageable Linux clusters"
      authors="P. M. Papadopoulos, M. J. Katz, and G. Bruno"
      journal="Concurrency and Computation: Practice and Experience"
      issue="2003, Volume 15, Issue 7-8, pg. 707-725"
      url="../assets/papadopoulos03-concurrency.pdf"
    />
    <Publication
      title="Wide Area Cluster Monitoring with Ganglia"
      authors="F. D. Sacerdoti, M. L. Massie, M. J. Katz, and D. E. Culler"
      journal="IEEE International Conference on Cluster Computing"
      issue="Hong Kong, Dec. 2003"
      url="../assets/papers/sacerdoti03-cluster.pdf"
    />
    <Publication
      title="Configuring Large High-Performance Clusters at Lightspeed: A Case Study"
      authours="P. M. Papadopoulos, C. A. Papadopoulos, W. J. Link, M. J. Katz, and G. Bruno"
      journal="Clusters and Computational Grids for Scientific Computing"
      issue="Chateau de Faberges-de-la-Tour, France , Sep. 2002"
      url="../assets/papers/papadopoulos02-ccgsc.pdf"
    />
    <Publication
      title="Leveraging Standard Core Technologies to Programmatically Build Linux Cluster Appliances"
      authors="M. J. Katz, P. M. Papadopoulos, and G. Bruno"
      journal="IEEE International Conference on Cluster Computing"
      issue="Chicago, Illinois, Oct. 2002"
      url="../assets/papers/katz02-cluster.pdf"
    />
    <Publication
      title="NPACI Rocks: Tools and Techniques for Easily Deploying Manageable Linux Clusters"
      authors="P. M. Papadopoulos, M. J. Katz, and G. Bruno"
      journal="IEEE International Conference on Cluster Computing"
      issue="New Port Beach, California, Oct. 2001"
      url="../assets/papers/papadopoulos01-cluster.pdf"
    />
    <Publication
      title="Performance Enhancements for HPVM with Heterogeneous Messaging Substrates and Commodity Hardware"
      authors="G. Bruno, A. A. Chien, M. J. Katz, and P. M. Papadopoulos"
      journal="PDC Annual Conference"
      issue="Sweden, Dec. 1999"
      url="../assets/papers/bruno99-pdc.pdf"
    />
  </div>
)
