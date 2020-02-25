import styles from './styles'

export default {
  // TODO: Define theme here. Palette, Typography, etc

  overrides: {
    MuiInputBase: {
      root: {
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.2)',
        border: '1px solid #D4D4D4',
        boxSizing: 'border-box',
        borderRadius: 6,
        fontSize: 16,
        color: '#292929',
        padding: '5px 10px'
      }
    }
  },
  // Styles for all components goes here
  styles
}
