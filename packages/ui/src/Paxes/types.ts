import { WithStyles } from '@keldor-ds/themes'
import styles from './styles'

export type PaxesType = {
  adults: number
  children: number
  childrenAges: number[]
}

export type PaxesFormType = {
  id?: string
  paxes?: PaxesType
  submitted?: boolean
  error?: undefined | { message: string },
  submitCount?: number
}

export interface PaxesProps extends WithStyles<typeof styles> {
  id?: string
  className?: string
  title?: string
  adults?: number
  children?: number
  minAdults?: number
  maxAdults?: number
  minChildren?: number
  maxChildren?: number
  minChildrenAge?: number
  maxChildrenAge?: number
  initialData?: PaxesType
  onChange?: (value: PaxesType) => void
  onSubmit?: (data: PaxesFormType) => void
  submitLabel?: string
  autoSubmit?: boolean
  showSubmit?: boolean
  showError?: boolean
}
