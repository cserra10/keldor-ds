import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { WithStyles } from '@material-ui/core'
import { PlaceType } from '../PlaceInput'
import { PaxesType } from '../Paxes'
import { StylesAPI } from './styles'

export type PackageDataType = {
  origin?: undefined | PlaceType
  destination?: undefined | PlaceType
  dates?: Array<MaterialUiPickersDate>
  rooms?: PaxesType[]
}

export type PackageFormType = {
  id?: string
  data?: PackageDataType
  submitted?: boolean
  error?: undefined | { message: string },
  submitCount?: number
}

export type Props = {
  id?: string
  className?: string
  title?: string
  onChange?: (data: PackageDataType) => void
  onSubmit?: (form: PackageFormType) => void
  fetchPlaces: (searchText: string) => Promise<any>
  initialData?: PackageDataType
} & WithStyles<StylesAPI>
