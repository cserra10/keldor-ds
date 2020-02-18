import { createStyles, Theme } from '@material-ui/core/styles'

const styles = (theme: Theme) => (
  createStyles({
    flexColumn: {
      flexDirection: 'column'
    },
    dialogHeader: {
      backgroundColor: '#f2F2F2',
      padding: '8px 41px 8px 24px',
      textTransform: 'uppercase'
    },
    daysHeader: {
      display: 'flex'
    },
    datesContainer: {
      padding: '8px 24px',
      color: theme.palette.text.secondary,
      '& h6': {
        color: theme.palette.primary.main
      },
      '&.current': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '& h6': {
          color: theme.palette.primary.contrastText
        }
      }
    }
  })
)

export default styles
