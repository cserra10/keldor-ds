import { Theme } from '../..'

export default (theme : Theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  header: {
    boxShadow: theme.shadows[1]
  },

  main: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },

  originDestination: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },

  origin: {
    '& label': {
      display: 'none'
    },
    flex: 1,
    marginBottom: 0,
    marginRight: theme.spacing(2),
    '& input': {
      height: 120,
      textAlign: 'center'
    }
  },

  destination: {
    '& label': {
      display: 'none'
    },
    flex: 1,
    '& input': {
      height: 120,
      textAlign: 'center'
    }
  },

  dates: {
    width: '100%',
    '& label': {
      display: 'none'
    }
  },

  rooms: {
    '& label': {
      display: 'none'
    }
  },

  submit: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: 56,
    background: theme.palette.primary.main,
    border: '1px solid #0171C9',
    boxSizing: 'border-box',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 'bold'
  }
})
