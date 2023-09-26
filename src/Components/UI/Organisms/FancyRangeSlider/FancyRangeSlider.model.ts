import { ChangeEvent } from "react";
import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";

interface IFancyRangeSlider {
  label?: string;
  align?: 'left' | 'center';
  icon?: JSX.Element;
  value?: number;
  min?: number;
  max?: number;
  displayNumber?: boolean;
  handler?: (e: ChangeEvent<HTMLInputElement>) => void;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  disabled?: boolean;
}

export default IFancyRangeSlider;