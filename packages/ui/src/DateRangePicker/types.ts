import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

export type DatePickerProps = {
  classes?: Record<string, string>
  value: Array<MaterialUiPickersDate>
  onChange: (dates: { begin: MaterialUiPickersDate, end: MaterialUiPickersDate }) => void
  labelFunc?: any
  format?: string
  emptyLabel?: string
  autoOk?: boolean
  onOpen?: () => void
  onClose?: () => void
  open?: boolean,
  disablePast: boolean
}
