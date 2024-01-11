import { TRawSliderWithNativeAttrs } from '@/components/atoms/RawSlider';

export type TLabeledRangeSlider = {
  label?: string;
};

export type TLabeledRangeSliderWithNativeAttrs = TLabeledRangeSlider & TRawSliderWithNativeAttrs;
