import { PaxesProps } from '../Paxes/types'

export type RoomsProps = {
  className?: string
  classes?: Record<string, string>
  title?: string
  maxRooms?: number
  PaxesProps?: PaxesProps,
  onChange?: (RoomsValueType: object) => void
  okLabel?: string
}
