export type StepperProps = {
  className?: string
  classes?: Record<string, string>
  label?: string
  value?: number
  minValue?: number
  maxValue?: number
  onChange: (value: number) => void
}
