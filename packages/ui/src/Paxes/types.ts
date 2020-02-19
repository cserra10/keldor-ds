export type PaxesProps = {
  className?: string
  classes?: Record<string, string>
  label?: string
  minAdults?: number
  maxAdults?: number
  minChildren?: number
  maxChildren?: number
  minChildrenAge?: number
  maxChildrenAge?: number
  value?: StateType
  onChange: (value: object) => void
}

export type StateType = {
  adults?: number
  children?: number
  childrenAges?: number[]
}
