export default {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  title: {
    width: '100%'
  },

  origin: {
    width: '46%',
    '& input': {
      height: 120,
      textAlign: 'center'
    }
  },

  destination: {
    width: '46%',
    '& input': {
      height: 120,
      textAlign: 'center'
    }
  },

  dates: {
    width: '100%'
  },

  submit: {
    width: 347,
    height: 56,
    background: '#0171C9',
    border: '1px solid #0171C9',
    boxSizing: 'border-box',
    borderRadius: 4,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
}
