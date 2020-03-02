import styles from './styles'

const borderRadius = 4

export default {
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },

  overrides: {
    MuiInputBase: {
      root: {
        borderRadius
      }
    },

    MuiButtonBase: {
      root: {
        borderRadius
      }
    }
  },

  shape: {
    borderRadius
  },

  // Styles for all components goes here
  styles
}
