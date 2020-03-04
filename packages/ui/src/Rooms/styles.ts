import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes/build'
import { combineStyles } from '../utils'

export type StylesAPI = {
  /**
   * Styles applied to the root element
   */
  root?: CSSProperties
  title?: CSSProperties
  room?: CSSProperties
  roomTitle?: CSSProperties
  paxes?: CSSProperties
  deleteRoomButton?: CSSProperties
  addRoomButton?: CSSProperties
}

export default (theme: Theme) => {
  const styles = createStyles({
    root: {
      border: `1px solid ${theme.palette.grey.A200}`,
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column'
    },

    title: {
      paddingBottom: theme.spacing(0.5)
    },

    room: {
      display: 'flex',
      flexDirection: 'column',
      border: `1px solid ${theme.palette.grey.A100}`,
      position: 'relative',
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2)
    },

    paxes: {
      border: 'none',
      padding: 0
    },

    deleteRoomButton: {
      alignSelf: 'flex-end'
    },

    addRoomButton: {
      marginBottom: theme.spacing(2)
    },

    okButton: {

    }
  })

  const themeStyles = theme.styles.Rooms || {}
  const combinedStyles = combineStyles(styles, themeStyles)
  if (typeof combinedStyles === 'function') {
    return combinedStyles(theme)
  }

  return combinedStyles
}
