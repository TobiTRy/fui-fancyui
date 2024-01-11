import { TLayer } from '@/types/TLayer';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

// the native attributes of the input element
export type TRawSliderNativeAttrs = React.InputHTMLAttributes<HTMLInputElement>;

// the attributes that are passed to the component
export type TRawSlider = {
  ref?: React.RefObject<HTMLInputElement>;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
};

// the combined attributes
export type TRawSliderWithNativeAttrs = TRawSliderNativeAttrs & TRawSlider;
