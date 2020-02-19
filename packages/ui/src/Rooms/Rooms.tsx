import React, { useEffect, memo, useCallback } from 'react'
import clsx from 'clsx'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { RoomsProps, RoomsValueType } from './types'
import { defaultStyles, themeStyles } from './styles'
import { combineStyles } from '../utils'
import Paxes from '../Paxes'
import { PaxesValueType } from '../Paxes/types'

const styles = combineStyles(defaultStyles, themeStyles)

const Rooms: React.FunctionComponent<RoomsProps> = (props: RoomsProps) => {
  const {
    className: classNameProp,
    classes = {},
    title = 'Rooms',
    maxRooms = 4,
    onChange,
    PaxesProps = { value: { adults: 2, children: 0 } }
  } = props

  const initialPaxes = {
    adults: PaxesProps.value.adults,
    children: PaxesProps.value.children,
    childrenAges: new Array(PaxesProps.value.children).fill(undefined)
  }

  const [value, setValue] = React.useState<Array<PaxesValueType>>([])

  useEffect(() => {
    console.log(value)
    onChange(value)
  }, [value])

  const addRoom = () => {
    const roomCount = value.length + 1
    if (roomCount <= maxRooms) {
      setValue(prevState => [...prevState, ...[initialPaxes]])
    }
  }

  const deleteRoom = (index: number) => {

  }

  const updatePaxesInRoom = useCallback((paxes: PaxesValueType, roomId) => {
    setValue(prevState => ({
      ...prevState,
      [roomId]: { ...paxes }
    }))
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

      {value.map((_, index: number) => (
        <div
          className={classes.paxesContainer}
          key={index}
        >
          <Paxes
            id={index}
            title={`Room ${index}`}
            onChange={updatePaxesInRoom}
          />
          <ButtonBase
            className={classes.deleteRoomButton}
            onClick={() => deleteRoom(index)}
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
    </div>
  )
}

export default memo(withStyles(styles)(Rooms))
