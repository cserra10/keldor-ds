import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes'
import { combineStyles } from '../utils'

export interface StylesAPI {
  /**
   * Styles applied to the root element
   */
  root?: CSSProperties
  placeGroup?: CSSProperties
  placeHeader?: CSSProperties
  place?: CSSProperties
  placeIcon?: CSSProperties
}

export default (theme: Theme) => {
  const defaultStyles = createStyles({
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
  }) as StylesAPI

  return combineStyles(defaultStyles, theme.styles.PlaceList || {})(theme)
}
