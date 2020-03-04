import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes/build'
import { combineStyles } from '../utils'

export type StylesAPI = {
  root: CSSProperties
  header: CSSProperties
  main: CSSProperties
  originDestination: CSSProperties
  toggleOriginDestination: CSSProperties
  origin: CSSProperties
  originLabel: CSSProperties
  originInput: CSSProperties
  destination: CSSProperties
  destinationLabel: CSSProperties
  destinationInput: CSSProperties
  dates: CSSProperties
  rooms: CSSProperties
  submit: CSSProperties
}

export default (theme: Theme) => {
  console.log(theme)
  const styles = createStyles({
    root: {
      position: 'relative',
      border: `1px solid ${theme.palette.grey.A100}`,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },

    header: {
      boxShadow: 'inherit'
    },

    main: {
      padding: theme.spacing(2)
    },

    origin: {
      marginBottom: theme.spacing(2)
    },

    destination: {
      marginBottom: theme.spacing(2)
    },

    dates: {
      marginBottom: theme.spacing(2)
    },

    submit: {
      padding: theme.spacing(1)
    }
  }) as StylesAPI

  const themeStyles = theme.styles.PackageSearchBox || {}
  const combinedStyles = combineStyles(styles, themeStyles)
  if (typeof combinedStyles === 'function') {
    return combinedStyles(theme)
  }

  return combinedStyles
}
