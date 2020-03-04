import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes/build'
import { mergeDeep } from '../utils'

export type StylesAPI = {
  /**
   * Styles applied to the root element
   */
  root?: CSSProperties

  /**
   * Styles applied to the adults container
   */
  adults?: CSSProperties

  /**
   * Styles applied to the adults label
   */
  adultsLabel?: CSSProperties

  /**
   * Styles applied to the adults stepper control
   */
  adultsStepper?: CSSProperties

  /**
   * Styles applied to the children container
   */
  children?: CSSProperties

  /**
   * Styles applied to the children label
   */
  childrenLabel?: CSSProperties

  /**
   * Styles applied to the children stepper control
   */
  childrenStepper?: CSSProperties

  /**
   * Styles applied to the childrenAge´s container
   */
  childrenAge?: CSSProperties

  /**
   * Styles applied to the children age select control
   */
  ageSelect?: CSSProperties
}

export default (theme: Theme) => {
  const styles = createStyles({
    root: {
      '& > *': {
        marginBottom: theme.spacing(2),
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
      },

      border: `1px solid ${theme.palette.grey.A100}`,
      padding: theme.spacing(1)
    },

    title: {
      paddingBottom: theme.spacing(1)
    },

    inputControl: {
      width: 150
    },

    ageSelect: {
      textAlign: 'center',
      margin: '0!important'
    }
  }) as StylesAPI

  return mergeDeep(styles, theme.styles.Paxes || {})
}
