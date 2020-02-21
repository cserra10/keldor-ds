import { PaxesProps, PaxesFormType } from '../Paxes/types'

export type RoomsType = {
  id: string,
  paxesForm: PaxesFormType
}

export type RoomsFormType = {
  id?: string
  rooms?: RoomsType[]
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
  onChange?: (rooms: RoomsType[]) => void
  onSubmit?: (form: PaxesFormType) => void
  submitLabel?: string
  autoSubmit?: boolean
  showSubmit?: boolean
}
