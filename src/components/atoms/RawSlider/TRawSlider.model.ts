import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TComponentSizes } from '@/types/TComponentSizes';

// the native attributes of the input element
export type TRawSliderNativeAttrs = React.InputHTMLAttributes<HTMLInputElement>;

// the attributes that are passed to the component
export type TRawSlider = {
  ref?: React.RefObject<HTMLInputElement>;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  sizeC?: TComponentSizes;
};

// the combined attributes
export type TRawSliderWithNativeAttrs = TRawSliderNativeAttrs & TRawSlider;
