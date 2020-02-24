import StylesAPI from '@keldor-ds/themes/build/api/PlaceList'
import { Theme, createStyles } from '@material-ui/core/styles'

export const defaultStyles = (theme: Theme) => {
  const styles = <StylesAPI> createStyles({
    root: {

    },

    placeGroup: {
      marginBottom: theme.spacing(1)
    },

    placeHeader: {
      backgroundColor: '#e7e7e7',
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1)
    },

    place: {
      padding: theme.spacing(1),
      display: 'flex',
      alignItems: 'center'
    },

    placeIcon: {
      marginRight: 5
    }
  })

  return styles
}

export const themeStyles = (theme: Theme) => {
  const styles = <StylesAPI> createStyles({
    root: {
    }
  })

  return styles
}
