import { useId } from 'react';

import { RawSlider } from '@/components/atoms/RawSlider';

import { NewInputLabel } from '@/components/atoms/InputLabelNew/InputLabelNew';
import { TRawSliderWithNativeAttrs } from '@/components/atoms/RawSlider/TRawSlider.model';

export default function LabeledRangeSlider(props: TRawSliderWithNativeAttrs) {
  const { id, ...sliderProps } = props;

  const useid = useId();
  const usedId = id ? id : useid;

  return (
    <div>
      <NewInputLabel htmlFor={usedId} $lableVariant="static" />
      <RawSlider id={usedId} {...sliderProps} />
    </div>
  );
}
