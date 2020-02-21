import React, { memo, useCallback, useState } from 'react'
import shortid from 'shortid'
import clsx from 'clsx'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { RoomsProps, RoomsDataType } from './types'
import Paxes from '../Paxes'
import {PaxesDataType, PaxesValueType, RoomsValueType} from '../Paxes/types'
import { defaultStyles, themeStyles } from './styles'
import { combineStyles } from '../utils'

const styles = combineStyles(defaultStyles, themeStyles)

const Rooms: React.FunctionComponent<RoomsProps> = (
  {
    id = shortid.generate(),
    className: classNameProp,
    classes = {},
    title = 'Rooms',
    maxRooms = 4,
    onChange,
    PaxesProps,
    submitLabel = 'Apply',
    autoSubmit = false,
    showSubmit = true
  }: RoomsProps
) => {

  const initialRoomPaxes: PaxesDataType = {
    value: {
      adults: PaxesProps?.value.adults || 2,
      children: PaxesProps?.value.children || 0,
      childrenAges: new Array(PaxesProps?.value.children || 0).fill(undefined)
    }
  }

  const [data, setData] = useState<RoomsValueType>({
    id,
    rooms: [initialRoomPaxes],
    submitted: false,
    error: undefined,
    submitCount: 0
  })

  const { rooms } = data

  const handleSubmit = () => {
    const isValid = rooms.every((roomPaxes: PaxesDataType) => roomPaxes.error === undefined)
    setData((prevState: PaxesDataType) => ({
      ...prevState,
      submitted: true,
      error: isValid ? undefined : { message: 'Enter child age' },
      submitCount: prevState.submitCount + 1
    }))
  }

  const addRoom = () => {
    const roomCount = rooms.length + 1
    if (roomCount <= maxRooms) {
      setData((prevState: RoomsValueType) => prevState.concat(...[initialRoomPaxes]))
    }
  }

  const deleteRoom = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // @ts-ignore
    const index = e.currentTarget.attributes['data-index']
    setData((prevState: RoomsValueType) => {
      const temp = [...prevState.rooms]
      temp.splice(index, 1)
      return {
        ...prevState,
        rooms: temp
      }
    })
  }

  const updatePaxesInRoom = useCallback((paxes: PaxesDataType) => {
    setData((prevState: RoomsValueType) => {
      const temp = [...prevState.rooms]
      const i = temp.findIndex(item => item.id === paxes.id)
      temp[i] = paxes
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

      {rooms.map((paxes: RoomsValueType, index: number) => (
        <div
          key={paxes.id}
          className={classes.paxesContainer}
        >
          <Paxes
            id={`${paxes.id}`}
            title={`Room ${index + 1}`}
            autoSubmit
            onSubmit={updatePaxesInRoom}
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

      <ButtonBase
        className={classes.okButton}
        onClick={handleSubmit}
      >
        {submitLabel}
      </ButtonBase>
    </div>
  )
}

export default memo(withStyles(styles)(Rooms))
