export default theme => ({
  root: {

  },

  header: {
    boxShadow: theme.shadows[1]
  },

  main: {

  },

  originDestination: {
    display: 'flex',
    position: 'relative'
  },

  toggleOriginDestination: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 20,
    margin: 'auto'
  },

  origin: {
    flex: 1,
    marginRight: theme.spacing(2)
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
    flex: 1
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
