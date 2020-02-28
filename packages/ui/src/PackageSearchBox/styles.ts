import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes/build'
import { combineStyles } from '../utils'

export type StylesAPI = {
  root: CSSProperties
  title: CSSProperties
  originDestination: CSSProperties
  origin: CSSProperties
  destination: CSSProperties
  dates: CSSProperties
  rooms: CSSProperties
  submit: CSSProperties
}

export default (theme: Theme) => {
  const styles = createStyles({
    root: {
      border: `1px solid ${theme.palette.grey.A100}`,
      padding: theme.spacing(1),
      '& > *': {
        marginBottom: theme.spacing(2)
      }
    },

    origin: {
      marginBottom: theme.spacing(2)
    },

    rooms: {
      display: 'flex',
      width: '100%',
      padding: theme.spacing(1),
      border: `1px solid ${theme.palette.grey.A100}`,
      justifyContent: 'space-evenly'
    },

    submit: {
      display: 'flex',
      padding: theme.spacing(1),
      width: '100%'
    }
  }) as StylesAPI

  const themeStyles = theme.styles.PackageSearchBox || {}
  const combinedStyles = combineStyles(styles, themeStyles)
  if (typeof combinedStyles === 'function') {
    return combinedStyles(theme)
  }

  return combinedStyles
}
