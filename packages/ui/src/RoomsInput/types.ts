import { WithStyles } from '@keldor-ds/themes'
import styles from './styles'
import { PaxesType } from '../Paxes'

export interface Props extends WithStyles<typeof styles> {
  className?: string
  label?: string
  showLabel?: boolean
  rooms: PaxesType[],
  onChange: (data: any) => void
}
