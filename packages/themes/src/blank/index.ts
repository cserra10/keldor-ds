export default {
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },

  overrides: {
    MuiInputBase: {
      root: {
        height: 45,
        padding: '5px 10px',
        border: '1px solid #e7e7e7'
      }
    },

    MuiButtonBase: {
      root: {
        height: 45,
        padding: '5px 10px',
        border: '1px solid #e7e7e7'
      }
    }
  },

  styles: {}
}
