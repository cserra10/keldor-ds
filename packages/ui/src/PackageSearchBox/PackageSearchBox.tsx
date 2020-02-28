import React, { memo, useEffect, useState } from 'react'
import clsx from 'clsx'
import shortid from 'shortid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import Person from '@material-ui/icons/Person'
import Hotel from '@material-ui/icons/Hotel'
import Dialog from '@material-ui/core/Dialog'
import { withStyles } from '@keldor-ds/themes/build'
import DateRangePicker from '../DateRangePicker/DateRangePicker'
import Rooms from '../Rooms'
import DialogPlaceInput from '../DialogPlaceInput'
import { Props, PackageFormType } from './types'
import { PlaceType } from '../PlaceInput'
import { RoomsFormType } from '../Rooms/types'
import styles from './styles'

const PackageSearchBox: React.FunctionComponent<Props> = (
  {
    id = shortid.generate(),
    className: classNameProp,
    classes,
    onChange,
    onSubmit,
    fetchPlaces,
    title = 'Packages',
    initialData = {
      origin: undefined,
      destination: undefined,
      dates: [],
      rooms: [{ adults: 1, children: 0, childrenAges: [] }]
    }
  }: Props
) => {
  const [form, setForm] = useState<PackageFormType>({
    id,
    data: { ...initialData },
    submitted: false,
    submitCount: 0,
    error: undefined
  })
  const [roomDialogOpen, setRoomDialogOpen] = useState(false)

  const openRoomsDialog = () => setRoomDialogOpen(true)
  const closeRoomsDialog = () => setRoomDialogOpen(false)

  const { data, submitCount } = form

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
    if (!roomsForm.error) {
      const rooms = roomsForm.rooms.map(room => room.paxes)
      updateFormData('rooms', rooms)
      closeRoomsDialog()
    }
  }

  const handleSubmit = () => {
    const isValid = true // Write is valid function
    setForm((prevState: PackageFormType) => ({
      ...prevState,
      submitted: true,
      error: isValid ? undefined : { message: 'Error' },
      submitCount: prevState.submitCount + 1
    }))
  }

  useEffect(() => {
    if (onChange) onChange(form.data)
  }, [form.data])

  useEffect(() => {
    if (onSubmit && submitCount > 0) {
      onSubmit(form)
    }
  }, [submitCount])

  const className = clsx(classNameProp, classes.root)

  const adults = data.rooms.reduce(
    (acc, room) => (acc + room.adults),
    0
  )

  const children = data.rooms.reduce(
    (acc, room) => (acc + room.children),
    0
  )

  return (
    <div className={className}>
      <AppBar
        className={classes.title}
        position="relative"
      >
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.originDestination}>
        <DialogPlaceInput
          label="Origin: "
          className={classes.origin}
          showStartAdornment={false}
          fetchPlaces={fetchPlaces}
          onPlaceChange={(p: PlaceType) => updateFormData('origin', p)}
        />

        <DialogPlaceInput
          label="Destination: "
          className={classes.destination}
          showStartAdornment={false}
          fetchPlaces={fetchPlaces}
          onPlaceChange={p => updateFormData('destination', p)}
          placeholder="Tap to search"
        />
      </div>

      <DateRangePicker
        className={classes.dates}
        label="Dates: "
        placeholder="From - To"
        value={form.data.dates || []}
        onChange={dates => updateFormData('dates', dates)}
      />

      <ButtonBase
        className={classes.rooms}
        onClick={openRoomsDialog}
      >
        <div>
          <Hotel />
          {data.rooms.length}
        </div>

        <div>
          <Person />
          {adults}
        </div>

        <div>
          <Person />
          {children}
        </div>

        <Dialog
          open={roomDialogOpen}
          onClose={closeRoomsDialog}
          fullScreen
          transitionDuration={0}
        >
          <Rooms
            onSubmit={onRoomsSubmit}
            initialData={data.rooms}
          />
        </Dialog>
      </ButtonBase>

      <ButtonBase
        className={classes.submit}
        onClick={handleSubmit}
      >
        Search
      </ButtonBase>
    </div>
  )
}

export default memo(withStyles(styles)(PackageSearchBox))
