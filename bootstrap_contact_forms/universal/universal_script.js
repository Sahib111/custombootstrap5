import '.js/bootstrap.js';
import '.js/bootstrap_bundle.js';
import url("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js")

import { curry, pipe, prop } from 'rambda'

import layout from 'theme/layout'

const media = value =>
  `@media (${Array.isArray(value) ? value.join('and') : value})`

const minWidth = curry(bp => `min-width: ${prop(bp, layout.breakpoints)}`)

const maxWidth = curry(bp => `max-width: ${prop(bp, layout.breakpoints)}`)

export const up = pipe(
  minWidth,
  media
)

export const down = pipe(
  maxWidth,
  media
)

export const between = (down, up) => media([minWidth(down), maxWidth(up)])
