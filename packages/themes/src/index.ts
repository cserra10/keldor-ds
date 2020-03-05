import { withStyles, ThemeProvider } from '@material-ui/core/styles'
import { CSSProperties, createStyles } from '@material-ui/styles'
import { WithStyles } from '@material-ui/core'
import createTheme, { Theme } from './createTheme'

import blank from './blank'
import bestday from './bestday'
import despegar from './despegar'

export {
  Theme,
  createTheme,
  withStyles,
  ThemeProvider,
  CSSProperties,
  createStyles,
  WithStyles
}

export default {
  blank,
  bestday,
  despegar
}
