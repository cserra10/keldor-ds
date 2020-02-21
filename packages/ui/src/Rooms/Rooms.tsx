import React, {
  memo,
  useCallback,
  useEffect,
  useState
} from 'react'
import shortid from 'shortid'
import clsx from 'clsx'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { RoomsProps, RoomsFormType, RoomsType } from './types'
import Paxes, { createPaxesForm } from '../Paxes'
import { PaxesFormType } from '../Paxes/types'
import { defaultStyles, themeStyles } from './styles'
import { combineStyles } from '../utils'

const styles = combineStyles(defaultStyles, themeStyles)

export const createRoomsForm = ({ id, rooms }: RoomsFormType = {
  id: shortid.generate(),
  rooms: []
}): RoomsFormType => ({
  id,
  rooms: [...rooms],
  submitted: false,
  submitCount: 0,
  error: undefined
})

const Rooms: React.FunctionComponent<RoomsProps> = (
  {
    className: classNameProp,
    classes = {},
    title = 'Rooms',
    maxRooms = 4,
    PaxesProps,
    onChange,
    onSubmit,
    submitLabel = 'Apply',
    autoSubmit = false,
    showSubmit = true
  }: RoomsProps
) => {
  const createRoom = (): RoomsType => ({
    id: shortid.generate(),
    paxesForm: createPaxesForm({
      paxes: {
        adults: PaxesProps?.paxes.adults || 2,
        children: PaxesProps?.paxes.children || 0,
        childrenAges: new Array(PaxesProps?.paxes.children || 0).fill(undefined)
      }
    })
  })

  const [form, setForm] = useState<RoomsFormType>(createRoomsForm({
    rooms: [createRoom()]
  }))

  const { rooms, error, submitCount } = form

  const handleSubmit = () => {
    const isValid = rooms.every((room: RoomsType) => room.paxesForm.error === undefined)
    setForm((prevState: RoomsFormType) => ({
      ...prevState,
      submitted: true,
      error: isValid ? undefined : { message: 'Enter child age' },
      submitCount: prevState.submitCount + 1
    }))
  }

  const addRoom = () => {
    const roomCount = rooms.length + 1
    if (roomCount <= maxRooms) {
      const newRoom = createRoom()
      setForm((prevState: RoomsFormType) => ({
        ...prevState,
        rooms: prevState.rooms.concat(...[newRoom])
      }))
    }
  }

  useEffect(() => {
    if (onChange) onChange(form.rooms)
    if (autoSubmit) handleSubmit()
  }, [form.rooms])

  useEffect(() => {
    if (onSubmit && submitCount > 0) {
      onSubmit(form)
    }
  }, [submitCount])

  const deleteRoom = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // @ts-ignore
    const index = e.currentTarget.attributes['data-index']
    setForm((prevState: RoomsFormType) => {
      const temp = [...prevState.rooms]
      temp.splice(index, 1)
      return {
        ...prevState,
        rooms: temp
      }
    })
  }

  const updatePaxesInRoom = useCallback((paxesForm: PaxesFormType) => {
    setForm((prevState: RoomsFormType) => {
      const temp = [...prevState.rooms]
      const i = temp.findIndex(item => item.paxesForm.id === paxesForm.id)
      temp[i].paxesForm = paxesForm
      return {
        ...prevState,
        rooms: temp
      }
    })
  }, [])

  const className = clsx(classNameProp, classes.root)

  return (
    <div className={className}>
      <Typography
        className={classes.title}
        variant="subtitle1"
      >
        {title}
      </Typography>

      {rooms.map((room, index: number) => (
        <div
          key={room.id}
          className={classes.paxesContainer}
        >
          <Paxes
            id={room.paxesForm.id}
            title={`Room ${index + 1}`}
            onSubmit={updatePaxesInRoom}
            autoSubmit
            showError={false}
            showSubmit={false}
          />

          <ButtonBase
            className={classes.deleteRoomButton}
            data-index={index}
            onClick={deleteRoom}
          >
            Remove room
          </ButtonBase>
        </div>
      ))}

      <ButtonBase
        className={classes.addRoomButton}
        onClick={addRoom}
      >
        Add room
      </ButtonBase>

      {error && <Typography>{error.message}</Typography>}

      {showSubmit && (
        <ButtonBase
          className={classes.okButton}
          onClick={handleSubmit}
        >
          {submitLabel}
        </ButtonBase>
      )}
    </div>
  )
}

export default memo(withStyles(styles)(Rooms))
