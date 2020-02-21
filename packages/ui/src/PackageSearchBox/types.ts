import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { PlaceType } from '../PlaceInput'
import { PaxesType } from '../Paxes/types'

export type Props = {
  className?: string
  classes?: Record<string, string>
  title?: string
  onChange?: (data: PackageDataType) => void
  fetchPlaces: (searchText: string) => Promise<any>
}

export type PackageDataType = {
  origin?: any | PlaceType
  destination?: any | PlaceType
  dates?: any | Array<MaterialUiPickersDate>
  rooms?: any | PaxesType[]
}

export type PackageFormType = {
  id?: string
  data?: PackageDataType
  submitted?: boolean
  error?: undefined | { message: string },
  submitCount?: number
}
