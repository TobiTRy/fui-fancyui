import { ChangeEvent } from 'react';
import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

interface IFancyRangeSlider {
  label?: string;
  align?: 'left' | 'center';
  icon?: JSX.Element;
  value?: number;
  min?: number;
  max?: number;
  displayNumber?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  disabled?: boolean;
}

export default IFancyRangeSlider;
