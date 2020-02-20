import React, { memo, useCallback } from 'react'
import clsx from 'clsx'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { RoomsProps } from './types'
import Paxes from '../Paxes'
import { PaxesValueType } from '../Paxes/types'
import { defaultStyles, themeStyles } from './styles'
import { combineStyles } from '../utils'

const styles = combineStyles(defaultStyles, themeStyles)

const Rooms: React.FunctionComponent<RoomsProps> = (
  {
    className: classNameProp,
    classes = {},
    title = 'Rooms',
    maxRooms = 4,
    onChange,
    PaxesProps = { value: { adults: 2, children: 0 } },
    okLabel = 'Apply'
  }: RoomsProps
) => {
  const initialPaxes = {
    id: String(+new Date()),
    adults: PaxesProps.value.adults,
    children: PaxesProps.value.children,
    childrenAges: new Array(PaxesProps.value.children).fill(undefined)
  }

  const [value, setValue] = React.useState<PaxesValueType[]>([initialPaxes])

  const onOk = () => {
    if (onChange) {
      onChange(value)
    }
  }

  const addRoom = () => {
    const roomCount = value.length + 1
    if (roomCount <= maxRooms) {
      setValue(prevState => prevState.concat(...[initialPaxes]))
    }
  }

  const deleteRoom = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // @ts-ignore
    const index = e.currentTarget.attributes['data-index']
    setValue(prevState => {
      const temp = [...prevState]
      temp.splice(index, 1)
      return temp
    })
  }

  const updatePaxesInRoom = useCallback((paxes: PaxesValueType) => {
    setValue(prevState => {
      const temp = [...prevState]
      const i = temp.findIndex(item => item.id === paxes.id)
      temp[i] = paxes
      return temp
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

      {value.map((paxes, index: number) => (
        <div
          className={classes.paxesContainer}
          key={paxes.id}
        >
          <Paxes
            id={`${paxes.id}`}
            title={`Room ${index + 1}`}
            onChange={updatePaxesInRoom}
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
        onClick={onOk}
      >
        {okLabel}
      </ButtonBase>
    </div>
  )
}

export default memo(withStyles(styles)(Rooms))
