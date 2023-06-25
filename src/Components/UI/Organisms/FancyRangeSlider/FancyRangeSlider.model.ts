import { ChangeEvent } from "react";

interface IFancyRangeSlider {
  label?: string;
  labelAlign?: 'left' | 'center';
  icon?: JSX.Element;
  value?: number;
  minValue?: number;
  maxValue?: number;
  displayNumber?: boolean;
  handler?: (value: number, e?: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export default IFancyRangeSlider;