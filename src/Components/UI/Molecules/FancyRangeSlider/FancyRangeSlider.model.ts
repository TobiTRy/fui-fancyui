export interface IFancyRangeSlider {
  label?: string;
  labelAlign?: 'left' | 'center';
  icon?: JSX.Element;
  currentValue?: number;
  minValue?: number;
  maxValue?: number;
  displayNumber?: boolean;
  handler?: (e: number) => void;
  disabled?: boolean;
}