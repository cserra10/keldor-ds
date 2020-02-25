import { PlaceInputProps, PlaceType } from '../PlaceInput'

export type DialogPlaceInputProps = PlaceInputProps & {
  label?: string,
  renderInput?: (p: PlaceType) => JSX.Element
  showLabel?: boolean
  showStartAdornment?: boolean
}
