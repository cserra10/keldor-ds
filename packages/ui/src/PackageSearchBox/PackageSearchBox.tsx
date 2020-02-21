import React, {memo, useEffect, useState} from 'react'
import clsx from 'clsx'
import shortid from 'shortid'
import ButtonBase from '@material-ui/core/ButtonBase'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import { withStyles } from '@material-ui/styles'
import DateRangePicker from '../DateRangePicker/DateRangePicker'
import Rooms from '../Rooms'
import DialogPlaceInput from '../DialogPlaceInput'
import { Props, PackageFormType } from './types'
import { PlaceType } from '../PlaceInput'
import { RoomsFormType } from '../Rooms/types'
import { combineStyles } from '../utils'
import { defaultStyles, themeStyles } from './styles'


const combinedStyles = combineStyles(defaultStyles, themeStyles)

export const createPackageForm = ({ id, data }: PackageFormType = {
  id: shortid.generate(),
  data: {}
}): PackageFormType => ({
  id,
  data: { ...data },
  submitted: false,
  submitCount: 0,
  error: undefined
})

const PackageSearchBox: React.FunctionComponent<Props> = (props: Props) => {
  const {
    className: classNameProp,
    classes,
    onChange,
    fetchPlaces
  } = props

  const [form, setForm] = useState<PackageFormType>(createPackageForm())

  useEffect(() => {
    if (onChange) onChange(form.data)
  }, [form.data])

  const initialDialogsState = {
    origin: false,
    destination: false,
    dates: false,
    rooms: false
  }

  const [Dialogs, setDialogs] = useState(initialDialogsState)

  const className = clsx(classNameProp, classes.root)

  const openDialog = (e: React.MouseEvent) => {
    // @ts-ignore
    const dialog = e.target.attributes['data-dialog'].value
    setDialogs(prevState => ({
      ...prevState,
      [dialog]: true
    }))
  }

  const closeDialogs = () => setDialogs({ ...initialDialogsState })

  const updateFormData = (formDataKey: string, value: any) => {
    setForm(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        [formDataKey]: value
      }
    }))
  }

  const onRoomsSubmit = (roomsForm: RoomsFormType) => {
    const rooms = roomsForm.rooms.map(room => room.paxesForm.paxes)
    updateFormData('rooms', rooms)
    closeDialogs()
  }

  return (
    <div className={className}>
      <div className="originDestination">
        <DialogPlaceInput
          placeholder="Origin: "
          fetchPlaces={fetchPlaces}
          onPlaceChange={(p: PlaceType) => updateFormData('origin', p)}
        />
        <DialogPlaceInput
          placeholder="Destination: "
          fetchPlaces={fetchPlaces}
          onPlaceChange={p => updateFormData('destination', p)}
        />
      </div>

      <div className="dates">
        <DateRangePicker
          value={form.data.dates || []}
          onChange={dates => updateFormData('dates', dates)}
        />
      </div>

      <div className="rooms">
        <ButtonBase
          data-dialog="rooms"
          onClick={openDialog}
        >
          Rooms
        </ButtonBase>
      </div>

      <Dialog
        open={Dialogs.rooms}
        onClose={closeDialogs}
        fullScreen
        transitionDuration={0}
      >
        <Rooms
          onSubmit={onRoomsSubmit}
        />
      </Dialog>

      <Button>
        Search
      </Button>
    </div>
  )
}

export default memo(withStyles(combinedStyles)(PackageSearchBox))
