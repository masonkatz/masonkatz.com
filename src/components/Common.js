import React from 'react'

/* Redefine common elements to their explicit bootstrap classes, this
fixes the problem of conflicting style sheets messing with
bootstep. The html5up identity stuff is awesome CSS but it really need
to get redon in react and stop screwing up bootstrap.  */

export const H1 = ({ children }) => <div class="h2">{children}</div>
export const H2 = ({ children }) => <div class="h3">{children}</div>
export const H3 = ({ children }) => <div class="h4">{children}</div>
export const H4 = ({ children }) => <div class="h5">{children}</div>
export const H5 = ({ children }) => <div class="h6">{children}</div>
