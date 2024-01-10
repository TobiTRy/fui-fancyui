import { TLayer } from '@/types/TLayer';
import { TThemeTypes } from '@/types/TThemeTypes';

// the native attributes of the input element
export type TRawSliderNativeAttrs = React.InputHTMLAttributes<HTMLInputElement>;

// the attributes that are passed to the component
export type TRawSlider = {
  ref?: React.RefObject<HTMLInputElement>;
  themeType?: TThemeTypes;
  layer?: TLayer;
};

// the combined attributes
export type TRawSliderWithNativeAttrs = TRawSliderNativeAttrs & TRawSlider;
