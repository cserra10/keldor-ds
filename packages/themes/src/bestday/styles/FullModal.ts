import { createStyles, Theme } from '@material-ui/core/styles'

const styles = (theme: Theme) => (
  createStyles({
    maxWidth: {
      maxWidth: theme.breakpoints.values.sm
    },
    dialogTitle: {
      padding: 0,
      '& h6': {
        fontSize: '1.125rem',
        width: 'calc(100% - 30px)',
      }
    },
    flexColumn: {
      flexDirection: 'column'
    }
  })
)

export default styles
