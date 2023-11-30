import { ChangeEvent } from 'react';
import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TUiColors';

interface IFancyRangeSlider {
  label?: string;
  align?: 'left' | 'center';
  icon?: JSX.Element;
  value?: number;
  min?: number;
  max?: number;
  displayNumber?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  themeType?: TThemeTypes;
  layer?: TLayer;
  disabled?: boolean;
}

export default IFancyRangeSlider;
