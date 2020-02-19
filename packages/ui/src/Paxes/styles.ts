import { CSSProperties } from '@material-ui/styles/withStyles'
import { Theme, createStyles } from '@material-ui/core/styles'

export interface StylesAPI {
  /**
   * Styles applied to the root element
   */
  root?: CSSProperties

  /**
   * Styles applied to the adults stepper input
   */
  adults?: CSSProperties

  /**
   * Styles applied to the children stepper input
   */
  children?: CSSProperties

  /**
   * Styles applied to the childrenAges container
   */
  childrenAges?: CSSProperties
}

export const defaultStyles = (theme: Theme) => {
  const styles = <StylesAPI> createStyles({
    root: {

    }
  })

  return styles
}

export const themeStyles = (theme: Theme) => {
  const styles = <StylesAPI> createStyles({
    root: {
    }
  })

  return styles
}
