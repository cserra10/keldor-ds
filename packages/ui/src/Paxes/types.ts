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
  onChange: (value: object) => void
}

export type PaxesValueType = {
  adults?: number
  children?: number
  childrenAges?: number[]
}
