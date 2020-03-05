export default theme => ({
  root: {
    border: 'unset',
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.common.white
  },

  header: {
    boxShadow: theme.shadows[0],
    '& *': {
      fontWeight: 'bold'
    }
  },

  main: {

  },

  originDestination: {

  },

  toggleOriginDestination: {
    display: 'none'
  },

  origin: {

  },

  originLabel: {
    color: theme.palette.common.white
  },

  originInput: {

  },

  destination: {

  },

  destinationLabel: {
    color: theme.palette.common.white
  },

  destinationInput: {

  },

  dates: {

  },

  datesLabel: {
    color: theme.palette.common.white
  },

  roomsControl: {
    height: 52,
    border: 'unset',
    borderRadius: 6,
    fontSize: 16,
    boxShadow: '0 2px 4px 0 rgba(68,68,68,0.16)',
    backgroundColor: '#FFFFFF',
    color: theme.palette.text.secondary
  },

  roomsLabel: {
    color: theme.palette.common.white
  },

  submit: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 25,
    color: theme.palette.common.white,
    height: 48,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
})
