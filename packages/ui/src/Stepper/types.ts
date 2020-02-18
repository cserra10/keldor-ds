export type StepperProps = {
  className?: string;
  label?: string;
  value?: number;
  minValue?: number;
  maxValue?: number;
  onChange: (value: number) => void;
}
