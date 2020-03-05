import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes'
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
  datesLabel: CSSProperties
  rooms: CSSProperties
  roomsLabel: CSSProperties
  roomsControl: CSSProperties
  submit: CSSProperties
}

export default (theme: Theme) => {
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

    originDestination: {
      display: 'flex',
      flexDirection: 'column'
    },

    origin: {
      marginBottom: theme.spacing(2)
    },

    toggleOriginDestination: {
      marginBottom: theme.spacing(2),
      alignSelf: 'center'
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

  return combineStyles(styles, theme.styles.PackageSearchBox || {})(theme)
}
