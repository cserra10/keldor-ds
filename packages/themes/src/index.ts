import {
  ThemeProvider, Theme as MuiTheme, createStyles, fade
} from '@material-ui/core/styles'
import { CSSProperties } from '@material-ui/styles/withStyles'
import { withStyles } from '@material-ui/styles'
import createTheme from './createTheme'

import blank from './blank'
import bestday from './bestday'
import despegar from './despegar'

interface Theme extends MuiTheme {
  styles: Record<string, object>
}

export {
  ThemeProvider,
  Theme,
  createStyles,
  createTheme,
  withStyles,
  CSSProperties,
  fade
}

export default {
  blank,
  bestday,
  despegar
}
