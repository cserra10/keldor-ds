import React, { useEffect } from 'react'
import clsx from 'clsx'
import { withStyles } from '@material-ui/styles'
import NativeSelect from '@material-ui/core/NativeSelect'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import { PaxesValueType, PaxesProps } from './types'
import Stepper from '../Stepper'
import { defaultStyles, themeStyles } from './styles'
import { combineStyles } from '../utils'

const styles = combineStyles(defaultStyles, themeStyles)

const Paxes: React.FunctionComponent<PaxesProps> = (props: PaxesProps) => {
  const {
    className: classNameProp,
    classes = {},
    title = 'Paxes selection',
    minAdults = 1,
    maxAdults = 4,
    minChildren = 0,
    maxChildren = 4,
    minChildrenAge = 0,
    maxChildrenAge = 12,
    onChange,
    value: valueProp = {
      adults: 2,
      children: 0
    }
  } = props

  const initialState: PaxesValueType = {
    adults: valueProp.adults,
    children: valueProp.children,
    childrenAges: new Array(valueProp.children).fill(undefined)
  }

  const [value, setValue] = React.useState<PaxesValueType>(initialState)

  useEffect(() => {
    onChange(value)
  }, [value])

  const handleAdultsChange = (n: number) => {
    setValue((prevState: PaxesValueType) => ({
      ...prevState,
      adults: n
    }))
  }

  const handleChildrenChange = (n: number) => {
    setValue((prevState: PaxesValueType) => ({
      ...prevState,
      children: n,
      childrenAges: prevState.children < n // @ts-ignore
        // Expand childrenAges
        ? prevState.childrenAges.concat(
          new Array(n - prevState.childrenAges.length).fill(undefined)
        )
        // Cut childrenAges
        : prevState.childrenAges.slice(0, n)
    }))
  }

  const handleChildrenAgeChange = (index: number, v: number | string) => {
    setValue((prevState: PaxesValueType) => ({
      ...prevState,
      childrenAges:
        prevState?.childrenAges.map((age: number, i: number) => ((index === i) ? +v : age))
    }))
  }

  const getAllowedChildrenAges = () => {
    const items: Array<any> = []

    for (let i = minChildrenAge; i <= maxChildrenAge; i += 1) {
      items.push({ label: String(i), value: String(i) })
    }

    return items
  }

  const allowedChildrenAges = getAllowedChildrenAges()

  const className = clsx(classNameProp, classes.root)

  return (
    <div className={className}>
      <Typography variant="subtitle1">{title}</Typography>
      <div className={classes.adults}>
        <InputLabel className={classes.adultsLabel}>Adults:</InputLabel>
        <Stepper
          className={`${classes.adultsStepper} ${classes.inputControl}`}
          value={value.adults}
          minValue={minAdults}
          maxValue={maxAdults}
          onChange={handleAdultsChange}
        />
      </div>

      <div className={classes.adults}>
        <InputLabel className={classes.childrenLabel}>Children:</InputLabel>
        <Stepper
          className={`${classes.childrenStepper} ${classes.inputControl}`}
          value={value.children}
          minValue={minChildren}
          maxValue={maxChildren}
          onChange={handleChildrenChange}
        />
      </div>

      {value.childrenAges.map((age: number, i: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={`children${i}`}>
          <InputLabel className={classes.adultsLabel}>{`Age children ${i+1}`}</InputLabel>
          <NativeSelect
            className={`${classes.ageSelect} ${classes.inputControl}`}
            value={age}
            onChange={(e: any) => handleChildrenAgeChange(i, e.target.value)}
          >
            <option> </option>
            {allowedChildrenAges.map(option => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </NativeSelect>
        </div>
      ))}
    </div>
  )
}

export default withStyles(styles)(Paxes)
