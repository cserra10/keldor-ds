export default theme => ({
  root: {
    border: 'unset',
    position: 'relative'
  },

  room: {
    textAlign: 'center',
    boxShadow: theme.shadows[2],
    border: 'unset',
    borderRadius: theme.shape.borderRadius
  },

  roomTitle: {
    justifyContent: 'center',
    color: theme.palette.text.disabled
  },

  deleteRoomButton: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(1),
    border: 'unset',
    fontSize: 12,
    height: 'fit-content'
  },

  addRoomButton: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(1),
    border: 'unset',
    fontSize: 12,
    height: 'fit-content'
  },

  okButton: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white
  }
})
