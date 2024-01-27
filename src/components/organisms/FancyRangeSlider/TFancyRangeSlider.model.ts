import { TRawSliderWithNativeAttrs } from '@/components/atoms/RawSlider';
import { TInputWrapper } from '@/components/molecules/InputWrapper';

export type TFancyRangeSlider = TInputWrapper & TRawSliderWithNativeAttrs & { displayNumberInput?: boolean };
