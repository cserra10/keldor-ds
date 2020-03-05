import { WithStyles } from '@keldor-ds/themes'
import styles from './styles'

export interface Props extends WithStyles<typeof styles> {
  className?: string
  label?: string
  value?: number
  minValue?: number
  maxValue?: number
  onChange: (value: number) => void
}
