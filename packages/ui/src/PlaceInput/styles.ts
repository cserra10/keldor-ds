import StylesAPI from '@keldor-ds/themes/build/api/search/PlaceInput'
import { Theme, createStyles } from '@material-ui/core/styles'

export const defaultStyles = (theme: Theme) => {
  const styles = <StylesAPI> createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },

    input: {
      display: 'flex',
      padding: '5px 6px',
      borderBottom: '1px solid #e7e7e7'
    },

    inputStartAdornment: {
      marginRight: 10
    },

    inputEndAdornment: {

    },

    cancel: {
      padding: theme.spacing(1),
      border: `1px solid ${theme.palette.grey.A100}`,
      alignSelf: 'flex-end',
      width: 'fitContent'

},

    placeList: {
      border: '1px solid #e7e7e7'
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
