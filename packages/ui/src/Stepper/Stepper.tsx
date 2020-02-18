import React, { useEffect, memo } from 'react'
import clsx from 'clsx'
import InputBase from '@material-ui/core/InputBase'
import Box from '@material-ui/core/Box'
import ButtonBase from '@material-ui/core/ButtonBase'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles, createStyles } from '@material-ui/core'
import defaultStyles, { ClassNamesAPI } from './styles'
import { StepperProps } from './types'

export const useStyles = makeStyles(createStyles(defaultStyles))

const Stepper: React.FunctionComponent<StepperProps> = (props: StepperProps) => {
  const {
    className: classNameProp,
    value: valueProp = 0,
    minValue = 0,
    maxValue = 100,
    onChange
  } = props

  const [value, setValue] = React.useState<number>(valueProp)

  const handleDecrease = () => {
    if (value > minValue) {
      setValue(prevState => prevState - 1)
    }
  }

  const handleIncrease = () => {
    if (value < maxValue) {
      setValue(prevState => prevState + 1)
    }
  }

  useEffect(() => {
    onChange(value)
  }, [value])

  const classes = useStyles() as ClassNamesAPI
  const className = clsx(classNameProp, classes.root)

  return (
    <Box className={className}>
      <ButtonBase
        className={classes.decreaseButton}
        role="button"
        onClick={handleDecrease}
      >
        <RemoveIcon />
      </ButtonBase>

      <InputBase
        className={classes.input}
        value={value}
        disabled
      />

      <ButtonBase
        className={classes.increaseButton}
        role="button"
        onClick={handleIncrease}
      >
        <AddIcon />
      </ButtonBase>
    </Box>
  )
}

export default memo(Stepper)
