import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes/build'
import { mergeDeep } from '../utils'

export interface StylesAPI {
  /**
   * Styles applied to the root element
   */
  root?: CSSProperties
}

export default (theme: Theme) => {
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

  return mergeDeep(styles, theme.styles.PlaceList || {})
}
