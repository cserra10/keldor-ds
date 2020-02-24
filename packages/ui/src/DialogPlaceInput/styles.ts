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

    label: {
      marginBottom: theme.spacing(1)
    },

    input: {
      padding: 5,
      border: `1px solid ${theme.palette.grey.A100}`
    }
  })

  return mergeDeep(styles, theme.styles.DialogPlaceInput || {})
}
