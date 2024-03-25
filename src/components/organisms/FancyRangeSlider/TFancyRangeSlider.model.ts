import { TRawSliderWithNativeAttrs } from '@/components/atoms/RawSlider';
import { TInputWrapperUserInputProps } from '@/components/molecules/InputWrapper';

export type TFancyRangeSlider = Omit<TInputWrapperUserInputProps, 'placeholder'> &
  TRawSliderWithNativeAttrs & { displayNumberInput?: boolean };
