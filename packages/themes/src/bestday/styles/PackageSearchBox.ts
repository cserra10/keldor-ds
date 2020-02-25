export default theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  title: {
    width: '100%'
  },

  originDestination: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },

  origin: {
    flex: 1,
    marginRight: theme.spacing(2),
    '& input': {
      height: 120,
      textAlign: 'center'
    }
  },

  destination: {
    flex: 1,
    '& input': {
      height: 120,
      textAlign: 'center'
    }
  },

  dates: {
    width: '100%'
  },

  submit: {
    width: '100%',
    height: 56,
    background: '#0171C9',
    border: '1px solid #0171C9',
    boxSizing: 'border-box',
    borderRadius: 4,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
