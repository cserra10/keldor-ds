export default theme => ({
  root: {
    border: 'none'
  },

  header: {
    boxShadow: theme.shadows[0]
  },

  main: {

  },

  originDestination: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    marginBottom: theme.spacing(2)
  },

  toggleOriginDestination: {
    zIndex: 10,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    height: 'fit-content',
    backgroundColor: theme.palette.background.default
  },

  origin: {
    flex: 1,
    marginRight: theme.spacing(2),
    marginBottom: 0
  },

  originLabel: {
    display: 'none'
  },

  originInput: {
    height: 120,
    '& input': {
      textAlign: 'center'
    }
  },

  destination: {
    flex: 1,
    marginBottom: 0
  },

  destinationLabel: {
    display: 'none'
  },

  destinationInput: {
    height: 120,
    '& input': {
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
