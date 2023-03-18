export interface IFancyRangeSlider {
  label?: string;
  labelAlign?: 'left' | 'center';
  currentValue?: number;
  minValue?: number;
  maxValue?: number;
  displayNumber?: boolean;
  handler?: (e: number) => void;
  icon?: JSX.Element;
}