import { CSSProperties } from '@material-ui/styles/withStyles'
import { Theme, createStyles } from '@material-ui/core/styles'

export interface StylesAPI {
  /**
   * Styles applied to the root element
   */
  root?: CSSProperties
  title?: CSSProperties
  deleteRoomButton?: CSSProperties
  addRoomButton?: CSSProperties
}

export const defaultStyles = (theme: Theme) => {
  const styles = <StylesAPI> createStyles({
    root: {
      border: `1px solid ${theme.palette.grey.A100}`,
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column'
    },

    title: {
      paddingBottom: theme.spacing(1)
    },

    paxesContainer: {
      position: 'relative',
      marginBottom: theme.spacing(2)
    },

    deleteRoomButton: {
      position: 'absolute',
      top: 15,
      right: 10
    },

    addRoomButton: {
      border: `1px solid ${theme.palette.grey.A100}`,
      padding: theme.spacing(1)
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
