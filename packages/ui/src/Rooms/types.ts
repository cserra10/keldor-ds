import { PaxesValueType, PaxesProps } from '../Paxes/types'

export type RoomsType = PaxesValueType[]

export type RoomsDataType = {
  id?: string
  rooms: RoomsType
  submitted: boolean
  error: undefined | { message: string },
  submitCount: number
}

export type RoomsProps = {
  id?: string
  className?: string
  classes?: Record<string, string>
  title?: string
  maxRooms?: number
  PaxesProps?: PaxesProps,
  onChange?: (value: RoomsType) => void
  onSubmit?: (data: RoomsDataType) => void
  submitLabel?: string
  autoSubmit?: boolean
  showSubmit?: boolean
}
