import { WithStyles } from '@material-ui/core'
import { StylesAPI } from './styles'
import { PaxesType } from '../Paxes'

export type Props = {
  className?: string
  label?: string
  showLabel?: boolean
  rooms: PaxesType[],
  onChange: (data: any) => void
} & WithStyles<StylesAPI>
