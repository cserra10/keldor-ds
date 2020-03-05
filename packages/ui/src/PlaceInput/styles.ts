import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes'
import { combineStyles } from '../utils'

export interface StylesAPI {
  root?: CSSProperties
  input?: CSSProperties
  inputStartAdornment?: CSSProperties
  inputEndAdornment?: CSSProperties
  cancel?: CSSProperties
  placeList?: CSSProperties
}

export default (theme: Theme) => {
  const defaultStyles = createStyles({
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
  }) as StylesAPI

  return combineStyles(defaultStyles, theme.styles.PlaceInput || {})(theme)
}
