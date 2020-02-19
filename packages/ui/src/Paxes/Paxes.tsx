import React, { useEffect } from 'react'
import clsx from 'clsx'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import NativeSelect from '@material-ui/core/NativeSelect'
import { StateType, PaxesProps } from './types'
import Stepper from '../Stepper'
import { defaultStyles, themeStyles } from './styles'
import { combineStyles } from '../utils'

const styles = combineStyles(defaultStyles, themeStyles)

const Paxes: React.FunctionComponent<PaxesProps> = (props: PaxesProps) => {
  const {
    className: classNameProp,
    classes = {},
    minAdults = 1,
    maxAdults = 4,
    minChildren = 0,
    maxChildren = 4,
    minChildrenAge = 0,
    maxChildrenAge = 12,
    onChange,
    value: valueProp
  } = props

  const initialState: StateType = {
    adults: minAdults,
    children: minChildren,
    childrenAges: [],
    ...valueProp
  }

  const [value, setValue] = React.useState<StateType>(initialState)

  useEffect(() => {
    onChange(value)
  }, [value])

  const handleAdultsChange = (adults: number) => {
    setValue((prevState: StateType) => ({
      ...prevState,
      adults
    }))
  }

  const handleChildrenChange = (children: number) => {
    setValue((prevState: StateType) => ({
      ...prevState,
      children,
      childrenAges: prevState.children < children
        ? [...prevState.childrenAges, 0]
        : prevState.childrenAges.filter((item, index) => index < children)
    }))
  }

  const handleChildrenAgeChange = (index: number, v: number | string) => {
    setValue((prevState: StateType) => ({
      ...prevState,
      childrenAges: prevState.childrenAges.map((item, key) => ((key !== index) ? item : +v))
    }))
  }

  const getAllowedChildrenAges = () => {
    const items: Array<any> = []

    for (let i = minChildrenAge; i <= maxChildrenAge; i += 1) {
      items.push({ label: String(i), value: String(i) })
    }

    return items
  }

  const className = clsx(classNameProp, classes.root)

  return (
    <div className={className}>
      <Stepper
        className={classes.adults}
        value={value.adults}
        minValue={minAdults}
        maxValue={maxAdults}
        onChange={handleAdultsChange}
      />

      <Stepper
        className={classes.children}
        value={value.children}
        minValue={minChildren}
        maxValue={maxChildren}
        onChange={handleChildrenChange}
      />

      <div className={classes.childrenAges}>
        {value.childrenAges.map((_, i) => (
          <NativeSelect
            key={`children${i}`}
            onChange={(e: any) => handleChildrenAgeChange(i, e.target.value)}
          >
            {getAllowedChildrenAges().map(option => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </NativeSelect>
        ))}
      </div>
    </div>
  )
}

export default withStyles(styles)(Paxes)
