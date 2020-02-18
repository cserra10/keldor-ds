import { createStyles, Theme } from '@material-ui/core/styles'
import StylesAPI from '@keldor-ds/themes/src/api/CalendarDay'

const styles = (theme: Theme) => {
  const stylesRules = <StylesAPI> {
    day: {
      backgroundColor: 'transparent',
      transition: 'all 0.2s'
    },
    hidden: {},
    dayDisabled: {
    },
    current: {
      color: theme.palette.secondary.main
    },
    daySelected: {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    dayRangeStart: {
      fontWeight: 500,
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      borderRadius: '50% 0 0 50%',
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      },
      transition: 'all 0.2s'
    },
    dayRangeEnd: {
      borderRadius: '0 50% 50% 0'
    },
    dayInRange: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      borderRadius: 0,
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      }
    }
  }

  return createStyles(stylesRules)
}

export default styles
