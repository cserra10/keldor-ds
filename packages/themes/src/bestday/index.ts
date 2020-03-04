import blueGrey from '@material-ui/core/colors/blueGrey'
import styles from './styles'

const shape = {
  borderRadius: 4
}
const palette = {
  primary: {
    main: '#0171C9',
    dark: '#003A8C',
    light: '#D3EEFC'
  }
}


export default {
  palette,
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },

  overrides: {
    MuiInputBase: {
      root: {
        height: 56,
        fontSize: 16,
        borderRadius: shape.borderRadius,
        padding: '5px 10px',
        border: `1px solid ${blueGrey.A100}`,
        '& > svg:first-child': {
          marginRight: 5,
          color: palette.primary.main
        },
        '& input': {
          padding: '5px 10px'
        }
      }
    },

    MuiButtonBase: {
      root: {
        height: 56,
        borderRadius: shape.borderRadius,
        padding: '5px 10px',
        border: `1px solid ${blueGrey.A100}`,
        fontSize: 16,
        '& svg': {
          color: palette.primary.main
        }
      }
    }
  },

  shape,

  // Styles for all components goes here
  styles
}
