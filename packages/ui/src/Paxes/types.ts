export type PaxesValueType = {
  adults?: number
  children?: number
  childrenAges?: number[]
}

export type PaxesDataType = {
  id?: string
  value: PaxesValueType
  submitted: boolean
  error: undefined | { message: string },
  count: number
}

export type PaxesProps = {
  className?: string
  classes?: Record<string, string>
  title?: string
  adults?: number
  children?: number
  minAdults?: number
  maxAdults?: number
  minChildren?: number
  maxChildren?: number
  minChildrenAge?: number
  maxChildrenAge?: number
  value?: PaxesValueType
  onChange?: (value: PaxesValueType) => void
  onSubmit?: (data: PaxesDataType) => void
  submitLabel?: string
  autoSubmit?: boolean
  showSubmit?: boolean
  id?: string
}
