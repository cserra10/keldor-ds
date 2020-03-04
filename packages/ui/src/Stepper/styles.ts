import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes/build'
import { combineStyles } from '../utils'

export interface StylesAPI {
  /**
   * Styles applied to the root element
   */
  root?: CSSProperties
  increaseButton: CSSProperties
  input: CSSProperties
  decreaseButton: CSSProperties
}

export default (theme: Theme) => {
  const styles = <StylesAPI> createStyles({
    root: {
      width: 'fit-content',
      minHeight: 30,
      display: 'flex',
      border: `1px solid ${theme.palette.grey.A100}`,
      boxSizing: 'border-box',
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
      borderLeft: `1px solid ${theme.palette.grey.A100}`,
      border: 'none',
      boxShadow: 'none',
      borderRadius: 0
    },

    increaseButton: {
      border: 'none'
    },

    decreaseButton: {
      border: 'none'
    }
  })

  console.log(theme.styles.Stepper)

  return combineStyles(styles, theme.styles.Stepper || {})(theme)
}
