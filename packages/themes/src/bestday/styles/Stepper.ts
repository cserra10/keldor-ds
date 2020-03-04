export default theme => ({
  root: {
    border: 'unset',
    height: 40,
    width: 140
  },

  input: {
    borderLeft: 'unset',
    borderRight: 'unset',
    height: 40
  },

  increaseButton: {
    borderRadius: '50%',
    border: `1px solid ${theme.palette.primary.main}`,
    width: 40,
    height: 40,
    flexBasis: 'unset'
  },

  decreaseButton: {
    borderRadius: '50%',
    border: `1px solid ${theme.palette.primary.main}`,
    width: 40,
    height: 40,
    flexBasis: 'unset'
  }
})
