import StylesAPI from '../../../api/search/DialogPlaceInput'

const styles = <StylesAPI> {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },

  label: {
    marginBottom: 10
  },

  input: {
    borderRadius: 6,
    padding: 5,
    boxShadow: '0 2px 4px 0 rgba(68,68,68,0.16)',
    border: '1px solid #CCCCCC'
  }
}

export default styles
