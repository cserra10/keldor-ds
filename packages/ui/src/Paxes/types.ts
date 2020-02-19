export type PaxesValueType = {
  adults?: number
  children?: number
  childrenAges?: number[]
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
  onChange: (value: PaxesValueType, id: number | string) => void
  id: string | number
}
