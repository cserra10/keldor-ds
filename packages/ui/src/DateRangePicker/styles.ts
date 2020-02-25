import { Theme, fade, createStyles } from '@keldor-ds/themes/build'

export default (theme: Theme) => {
  const focusedRangeColor = fade(theme.palette.primary.main, 0.3)
  const focusedRangeGradient = `linear-gradient(to right, ${focusedRangeColor}, ${focusedRangeColor})`
  const transparentRangeGradient = 'linear-gradient(to right, rgba(0,0,0,0.0), rgba(0,0,0,0.0))'

  const styles = createStyles({
    dateRangePickerDialog: {
      '& .MuiPickersCalendar-transitionContainer': {
        minHeight: 218,
        marginTop: 10
      }
    },
    day: {
      width: 40,
      height: 36,
      fontSize: theme.typography.caption.fontSize,
      margin: 0,
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
      padding: 0,
      transition: 'none',
      '&::after': {
        borderRadius: '100%',
        bottom: 0,
        boxSizing: 'border-box',
        content: '""',
        height: 36,
        width: 36,
        left: 0,
        margin: 'auto',
        position: 'absolute',
        right: 0,
        top: 0,
        transform: 'scale(0)',
        zIndex: 2
      },
      '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        '&::after': {
          backgroundColor: theme.palette.background.paper,
          border: `2px solid ${theme.palette.primary.main}`,
          bottom: -2,
          left: -2,
          height: 36,
          width: 36,
          right: -2,
          top: -2,
          boxSizing: 'content-box',
          transform: 'scale(1)'
        }
      },
      '& > .MuiIconButton-label': {
        zIndex: 3
      }
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none'
    },
    current: {
      color: theme.palette.primary.main,
      fontWeight: 600
    },
    focusedRange: {
      color: theme.palette.primary.contrastText,
      background: `${focusedRangeGradient} no-repeat 0/20px 40px, ${focusedRangeGradient} no-repeat 20px 0/20px 40px`,
      fontWeight: theme.typography.fontWeightMedium,
      width: 40,
      marginRight: 0,
      marginLeft: 0,
      borderRadius: 0
    },
    dayDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    },
    beginCap: {
      '&::after': {
        transform: 'scale(1)',
        backgroundColor: theme.palette.primary.main
      }
    },
    endCap: {
      '&::after': {
        transform: 'scale(1)',
        backgroundColor: theme.palette.primary.main
      }
    },
    focusedFirst: {
      background: `${transparentRangeGradient} no-repeat 0/20px 40px,${focusedRangeGradient} no-repeat 20px 0/20px 40px`
    },
    focusedLast: {
      background: `${focusedRangeGradient} no-repeat 0/20px 40px,${transparentRangeGradient} no-repeat 20px 0/20px 40px`
    },

    inputContainer: {
      display: 'flex',
      flexDirection: 'column'
    },

    inputLabel: {
      marginBottom: theme.spacing(1)
    },

    input: {
      border: `1px solid ${theme.palette.grey.A100}`,
      padding: 5
    }
  })

  return styles
}
