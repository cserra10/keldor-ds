import { WithStyles } from '@keldor-ds/themes'
import styles from './styles'
import { PaxesProps, PaxesFormType, PaxesType } from '../Paxes/types'

export type RoomType = {
  id: string,
  paxes: PaxesType
}

export type RoomsFormType = {
  id?: string
  rooms?: RoomType[]
  submitted?: boolean
  error?: undefined | { message: string },
  submitCount?: number
}

export interface RoomsProps extends WithStyles<typeof styles> {
  id?: string
  className?: string
  title?: string
  minRooms?: number
  maxRooms?: number
  PaxesProps?: PaxesProps
  onChange?: (rooms: RoomType[]) => void
  onSubmit?: (form: PaxesFormType) => void
  submitLabel?: string
  autoSubmit?: boolean
  showSubmit?: boolean
  initialData? : PaxesType[]
}
