import blueGrey from '@material-ui/core/colors/blueGrey'
import styles from './styles'


const palette = {
  primary: {
    main: '#270570'
  },

  secondary: {
    main: '#E12B19'
  },

  text: {
    primary: '#444',
    secondary: '#666'
  }
}

const shape = {
  borderRadius: 8
}

export default {
  palette,
  overrides: {
    MuiInputBase: {
      root: {
        height: 52,
        border: 'unset',
        borderRadius: 6,
        fontSize: 16,
        boxShadow: '0 2px 4px 0 rgba(68,68,68,0.16)',
        backgroundColor: '#FFFFFF',
        padding: 10
      },

      input: {
        '&::placeholder': {
          color: palette.text.secondary,
          fontStyle: 'italic',
          opacity: 'unset'
        }
      }
    },

    MuiButtonBase: {
      root: {

      }
    }
  },
  shape,
  styles
}
