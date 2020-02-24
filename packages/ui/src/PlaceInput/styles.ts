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

  return mergeDeep(styles, theme.styles.PlaceInput || {})
}
