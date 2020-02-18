import overrides from './overrides'

export default {
  props: {
    MuiButtonBase: {
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      light: '#D3EEFC',
      main: '#0171C9',
      // dark: will be calculated from palette.primary.main,
      dark: '#003A8C',
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: '#FFFFFF'
    },

    secondary: {
      light: '#FFE4CF',
      main: '#FF9F54',
      dark: '#E08843',
      contrastText: '#ffcc00'
    },
    //
    // // Used by `getContrastText()` to maximize the contrast between
    // // the background and the text.
    // contrastThreshold: 3,
    // // Used by the functions below to shift a color's luminance by approximately
    // // two indexes within its tonal palette.
    // // E.g., shift from Red 500 to Red 300 or Red 700.
    // tonalOffset: 0.2
  }
  // overrides
}
