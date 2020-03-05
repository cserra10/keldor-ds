import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { WithStyles } from '@keldor-ds/themes'
import styles from './styles'

export interface Props extends WithStyles<typeof styles> {
  className?: string
  value: Array<MaterialUiPickersDate>
  onChange: (dates: { begin: MaterialUiPickersDate, end: MaterialUiPickersDate }) => void
  labelFunc?: any
  format?: string
  emptyLabel?: string
  autoOk?: boolean
  onOpen?: () => void
  onClose?: () => void
  open?: boolean,
  disablePast?: boolean
  label?: string
  placeholder?: string
  renderInput?: () => JSX.Element
  showLabel?: boolean
}
