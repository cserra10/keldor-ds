import StylesAPI from '../../../api/search/FlightPreferences'

// TODO: we need visual reference from UX to fill this
const styles = <StylesAPI> {
  root: {
    border: '1px solid #e7e7e7',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    '& > div': {
      marginBottom: 15
    }
  }
}

export default styles
