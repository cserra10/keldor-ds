import { CSSProperties } from '@material-ui/styles/withStyles'
import { Theme, createStyles } from '@material-ui/core/styles'

export interface StylesAPI {
  /**
   * Styles applied to the root element
   */
  root?: CSSProperties
  increaseButton: CSSProperties
  input: CSSProperties
  decreaseButton: CSSProperties
}

export type ClassNamesAPI = Record<keyof StylesAPI, string>

export default (theme: Theme) => {
  const styles = <StylesAPI> createStyles({
    root: {
      width: 'fit-content',
      minHeight: 30,
      display: 'flex',
      border: `1px solid ${theme.palette.grey.A100}`,
      justifyContent: 'center',
      textAlign: 'center',
      '& > * ': {
        flexBasis: '100%'
      }
    },

    input: {
      '& input': {
        textAlign: 'center'
      },
      borderRight: `1px solid ${theme.palette.grey.A100}`,
      borderLeft: `1px solid ${theme.palette.grey.A100}`
    }
  })

  return styles
}
