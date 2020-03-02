import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes/build'
import { combineStyles } from '../utils'

export type StylesAPI = {
  root: CSSProperties
  header: CSSProperties
  main: CSSProperties
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
      position: 'relative',
      border: `1px solid ${theme.palette.grey.A100}`
    },

    header: {
      marginBottom: theme.spacing(2)
    },

    main: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      '& > *': {
        marginBottom: theme.spacing(2)
      }
    },

    origin: {
      marginBottom: theme.spacing(2)
    },

    rooms: {
      width: '100%'
    },

    submit: {
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
