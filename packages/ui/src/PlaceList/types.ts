export type PlaceType = null | Record<string, string>

export type PlaceListProps = {
  className?: string
  classes?: Record<string, string>
  optionProps: Function
  places: PlaceType[]
  showHeader?: boolean
  showPlaceIcon?: boolean
  labelProperty?: string
  groupBy?: string
}

