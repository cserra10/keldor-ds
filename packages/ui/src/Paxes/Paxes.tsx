import React, { useEffect, memo, useState } from 'react'
import shortid from 'shortid'
import clsx from 'clsx'
import { withStyles } from '@material-ui/styles'
import NativeSelect from '@material-ui/core/NativeSelect'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import ButtonBase from '@material-ui/core/ButtonBase'
import { PaxesFormType, PaxesProps } from './types'
import Stepper from '../Stepper'
import { defaultStyles, themeStyles } from './styles'
import { combineStyles } from '../utils'

const styles = combineStyles(defaultStyles, themeStyles)

export const createPaxesForm = (
  {
    id = shortid.generate(),
    paxes
  }: PaxesFormType
): PaxesFormType => ({
  id,
  paxes: { ...paxes },
  submitted: false,
  submitCount: 0,
  error: undefined
})

const Paxes: React.FunctionComponent<PaxesProps> = (props: PaxesProps) => {
  // region props destructuring
  const {
    id,
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
    showError = true,
    paxes = {
      adults: 2,
      children: 0
    }
  } = props
  // endregion

  const [form, setForm] = useState<PaxesFormType>(createPaxesForm(
    {
      id,
      paxes: {
        adults: paxes.adults,
        children: paxes.children,
        childrenAges: new Array(paxes.children).fill(undefined)
      }
    }
  ))

  const { submitted, submitCount, error } = form
  const { adults, children, childrenAges } = form.paxes

  const handleSubmit = () => {
    const isValid = childrenAges.every(age => age >= 0)
    setForm((prevState: PaxesFormType) => ({
      ...prevState,
      submitted: true,
      error: isValid ? undefined : { message: 'Enter child age' },
      submitCount: prevState.submitCount + 1
    }))
  }

  useEffect(() => {
    if (onChange) onChange(form.paxes)
    if (autoSubmit) handleSubmit()
  }, [form.paxes])

  useEffect(() => {
    if (onSubmit && submitCount > 0) {
      onSubmit(form)
    }
  }, [submitCount])

  const handleAdultsChange = (n: number) => {
    setForm((prevState: PaxesFormType) => ({
      ...prevState,
      paxes: {
        ...prevState.paxes,
        adults: n
      }
    }))
  }

  const handleChildrenChange = (n: number) => {
    setForm((prevState: PaxesFormType) => {
      const {
        children: prevChildren,
        childrenAges: prevChildrenAges
      } = prevState.paxes

      return {
        ...prevState,
        paxes: {
          ...prevState.paxes,
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
    setForm((prevState: PaxesFormType) => {
      const { childrenAges: prevChildrenAges } = prevState.paxes

      return {
        ...prevState,
        paxes: {
          ...prevState.paxes,
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
        <FormControl key={`children${i}`}>
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
      ))}

      {showError && error && <Typography>{error.message}</Typography>}

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
