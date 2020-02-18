export default {
  MuiTypography: {
    subtitle1: {
      fontWeight: 'bold'
    },
    subtitle2: {
      fontWeight: 'bold'
    }
  },
  MuiAppBar: {
    colorPrimary: {
      backgroundColor: '#003A8C'
    }
  },
  MuiButton: {
    root: {
      textTransform: 'none'
    }
  },
  MuiPickersCalendarHeader: {
    dayLabel: {
      margin: 0,
      width: '45px',
      fontSize: '1.125rem'
    },
    switchHeader: {
      '& p': {
        textTransform: 'uppercase',
        textAlign: 'left',
        fontSize: '1.125rem'
      }
    },
    transitionContainer: {
      maxWidth: '298px'
    },
    daysHeader: {
      display: 'none'
    }
  },
  MuiPickersCalendar: {
    transitionContainer: {
      '@media (min-width:340px)': {
        minHeight: '280px'
      }
    }
  },
  MuiPickersDay: {
    day: {
      margin: 0,
      '@media (min-width:340px)': {
        '& p': {
          fontSize: '1.125rem'
        },
        width: '45px',
        height: '45px'
      }
    },
    hidden: {},
    dayDisabled: {}
  }
}
