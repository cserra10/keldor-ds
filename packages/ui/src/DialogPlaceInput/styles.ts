import StylesAPI from '@keldor-ds/themes/build/api/search/DialogPlaceInput'
import { Theme, createStyles } from '@material-ui/core/styles'

export const defaultStyles = (theme: Theme) => {
  const styles = <StylesAPI> createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },

    label: {
      marginBottom: theme.spacing(1)
    },

    input: {
      padding: 5,
      border: `1px solid ${theme.palette.grey.A100}`
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
