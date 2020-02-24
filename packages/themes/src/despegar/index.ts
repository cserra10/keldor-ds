import { createMuiTheme } from '@material-ui/core/styles'
import styles from './styles'

export default createMuiTheme({
  overrides: {

    MuiButton: {
      root: {
        color: 'red'
      }
    }
  }
})
