import React, { useEffect, memo, useState } from 'react'
import shortid from 'shortid'
import clsx from 'clsx'
import { withStyles } from '@material-ui/styles'
import NativeSelect from '@material-ui/core/NativeSelect'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import ButtonBase from '@material-ui/core/ButtonBase'
import { PaxesDataType, PaxesProps } from './types'
import Stepper from '../Stepper'
import { defaultStyles, themeStyles } from './styles'
import { combineStyles } from '../utils'

const styles = combineStyles(defaultStyles, themeStyles)

const Paxes: React.FunctionComponent<PaxesProps> = (
  {
    id = shortid.generate(),
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
    onSubmit,
    autoSubmit = false,
    submitLabel = 'Apply',
    showSubmit = true,
    value: valueProp = {
      adults: 2,
      children: 0
    }
  }: PaxesProps
) => {
  const [data, setData] = useState<PaxesDataType>({
    id,
    value: {
      adults: valueProp.adults,
      children: valueProp.children,
      childrenAges: new Array(valueProp.children).fill(undefined)
    },
    submitted: false,
    error: undefined,
    submitCount: 0
  })

  const {
    value, error, submitted, submitCount
  } = data

  const { adults, children, childrenAges } = value

  const handleSubmit = () => {
    const isValid = childrenAges.every(age => age >= 0)
    setData((prevState: PaxesDataType) => ({
      ...prevState,
      submitted: true,
      error: isValid ? undefined : { message: 'Enter child age' },
      submitCount: prevState.submitCount + 1
    }))
  }

  useEffect(() => {
    if (onChange) {
      onChange(value)
      if (autoSubmit) onSubmit(data)
    }
  }, [value])

  useEffect(() => {
    if (onSubmit) onSubmit(data)
  }, [submitCount])

  const handleAdultsChange = (n: number) => {
    setData((prevState: PaxesDataType) => ({
      ...prevState,
      value: {
        ...prevState.value,
        adults: n
      }
    }))
  }

  const handleChildrenChange = (n: number) => {
    setData((prevState: PaxesDataType) => {
      const {
        children: prevChildren,
        childrenAges: prevChildrenAges
      } = prevState.value

      return {
        ...prevState,
        value: {
          ...prevState.value,
          children: n,
          childrenAges: prevChildren < n
            // Expand childrenAges
            ? prevChildrenAges.concat(
              new Array(n - prevChildrenAges.length).fill(undefined)
            )
            // Cut childrenAges
            : prevChildrenAges.slice(0, n)
        }
      }
    })
  }

  const handleChildrenAgeChange = (index: number, v: number | string) => {
    setData((prevState: PaxesDataType) => {
      const { childrenAges: prevChildrenAges } = prevState.value

      return {
        ...prevState,
        value: {
          ...prevState.value,
          childrenAges:
            prevChildrenAges.map((age: number, i: number) => ((index === i) ? +v : age))
        }
      }
    })
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
      <Typography
        className={classes.title}
        variant="subtitle1"
      >
        {title}
      </Typography>

      <FormControl className={classes.adults}>
        <InputLabel
          className={classes.adultsLabel}
          shrink
        >
          Adults:
        </InputLabel>
        <Stepper
          className={`${classes.adultsStepper} ${classes.inputControl}`}
          value={adults}
          minValue={minAdults}
          maxValue={maxAdults}
          onChange={handleAdultsChange}
        />
      </FormControl>

      <FormControl className={classes.children}>
        <InputLabel
          className={classes.childrenLabel}
          shrink
        >
          Children:
        </InputLabel>
        <Stepper
          className={`${classes.childrenStepper} ${classes.inputControl}`}
          value={children}
          minValue={minChildren}
          maxValue={maxChildren}
          onChange={handleChildrenChange}
        />
      </FormControl>

      {childrenAges.map((age: number, i: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={`children${i}`}>
          <FormControl>
            <InputLabel
              className={classes.adultsLabel}
              shrink
            >
              {`Age children ${i + 1}:`}
            </InputLabel>
            <NativeSelect
              className={`${classes.ageSelect} ${classes.inputControl} ${submitted && error ? 'error' : ''}`}
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
          </FormControl>
        </div>
      ))}

      {error && <Typography>{error.message}</Typography>}

      {showSubmit && (
        <ButtonBase
          className={classes.submitButton}
          onClick={handleSubmit}
        >
          {submitLabel}
        </ButtonBase>
      )}
    </div>
  )
}

export default memo(withStyles(styles)(Paxes))
