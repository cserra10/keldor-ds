import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes'
import { combineStyles } from '../utils'

export type StylesAPI = {
  root: CSSProperties
  label: CSSProperties
  control: CSSProperties
}

export default (theme: Theme) => {
  const defaultStyles = createStyles({
    root: {

    },

    label: {
      marginBottom: theme.spacing(1)
    },

    control: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-evenly',
      '& > div': {
        display: 'flex',
        alignItems: 'center'
      }
    }
  }) as StylesAPI

  return combineStyles(defaultStyles, theme.styles.RoomsInput || {})(theme)
}
