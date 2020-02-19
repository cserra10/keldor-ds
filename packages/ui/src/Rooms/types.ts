import { PaxesProps, PaxesValueType } from '../Paxes/types'

export type RoomsValueType = Array<PaxesValueType>

export type RoomsProps = {
  className?: string
  classes?: Record<string, string>
  title?: string
  maxRooms?: number
  PaxesProps?: PaxesProps,
  onChange: (RoomsValueType: object) => void
}
