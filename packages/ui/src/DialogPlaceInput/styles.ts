import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes/build'
import { mergeDeep } from '../utils'

export interface StylesAPI {
  /**
   * Styles applied to the root element
   */
  root?: CSSProperties
  label?: CSSProperties
  input?: CSSProperties
  originInputStartAdornment?: CSSProperties
}

export default (theme: Theme) => {
  const styles = <StylesAPI> createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },

    label: {
      marginBottom: theme.spacing(1)
    },

    input: {

    }
  })

  return mergeDeep(styles, theme.styles.DialogPlaceInput || {})
}
