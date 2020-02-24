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

export type RoomsProps = {
  id?: string
  className?: string
  classes?: Record<string, string>
  title?: string
  maxRooms?: number
  PaxesProps?: PaxesProps
  onChange?: (rooms: RoomType[]) => void
  onSubmit?: (form: PaxesFormType) => void
  submitLabel?: string
  autoSubmit?: boolean
  showSubmit?: boolean
  initialData? : PaxesType[]
}
