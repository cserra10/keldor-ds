import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes/build'
import { mergeDeep } from '../utils'

export interface StylesAPI {
  /**
   * Styles applied to the root element
   */
  root?: CSSProperties
  rooms?: CSSProperties
  submit?: CSSProperties
}

export default (theme: Theme) => {
  const styles = <StylesAPI>createStyles({
    root: {
      border: `1px solid ${theme.palette.grey.A100}`,
      padding: theme.spacing(1),
      '& > *': {
        marginBottom: theme.spacing(2)
      }
    },

    rooms: {
      display: 'flex',
      width: '100%',
      padding: theme.spacing(1),
      border: `1px solid ${theme.palette.grey.A100}`,
      justifyContent: 'space-evenly'
    },

    submit: {
      display: 'flex',
      padding: theme.spacing(1),
      border: `1px solid ${theme.palette.grey.A100}`,
      width: '100%'
    }
  })

  return mergeDeep(styles, theme.styles.PackageSearchBox || {})
}
