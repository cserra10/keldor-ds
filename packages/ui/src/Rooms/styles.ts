import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes/build'
import { mergeDeep } from '../utils'

export interface StylesAPI {
  /**
   * Styles applied to the root element
   */
  root?: CSSProperties
  title?: CSSProperties
  deleteRoomButton?: CSSProperties
  addRoomButton?: CSSProperties
}

export default (theme: Theme) => {
  const styles = <StylesAPI> createStyles({
    root: {
      border: `1px solid ${theme.palette.grey.A100}`,
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column'
    },

    title: {
      paddingBottom: theme.spacing(0.5)
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
      padding: theme.spacing(0.5)
    },

    okButton: {
      border: `1px solid ${theme.palette.grey.A100}`,
      padding: theme.spacing(0.5)
    }
  })

  return mergeDeep(styles, theme.styles.Rooms || {})
}
