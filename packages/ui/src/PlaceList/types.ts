import { WithStyles } from '@keldor-ds/themes'
import styles from './styles'

export type PlaceType = null | Record<string, string>

export interface PlaceListProps extends WithStyles<typeof styles> {
  className?: string
  optionProps: Function
  places: PlaceType[]
  showHeader?: boolean
  showPlaceIcon?: boolean
  labelProperty?: string
  groupBy?: string
}
