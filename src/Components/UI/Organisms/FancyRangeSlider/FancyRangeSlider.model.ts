import { ChangeEvent } from "react";
import { TLayer } from "@/Components/UI/Interface/TLayer";
import { TUiColors } from '@/Components/UI/Interface/TUiColors';

interface IFancyRangeSlider {
  label?: string;
  align?: 'left' | 'center';
  icon?: JSX.Element;
  value?: number;
  min?: number;
  max?: number;
  displayNumber?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  themeType?: TUiColors;
  layer?: TLayer;
  disabled?: boolean;
}

export default IFancyRangeSlider;