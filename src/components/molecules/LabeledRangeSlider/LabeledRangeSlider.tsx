import React, { useId } from 'react';

import { RawSlider } from '@/components/atoms/RawSlider';
import { IRawSlider } from '@/components/atoms/RawSlider/RawSlider';
import { NewInputLabel } from '@/components/atoms/InputLabelNew/InputLabelNew';

export default function LabeledRangeSlider(props: IRawSlider) {
  const { disabled, id, value, themeType, layer, min, max, onChange } = props;

  const useid = useId();
  const usedId = id ? id : useid;

  return (
    <div>
      <NewInputLabel htmlFor={usedId} $lableVariant="static" />
      <RawSlider
        id={usedId}
        disabled={disabled}
        value={value}
        themeType={themeType}
        layer={layer}
        onChange={onChange}
        min={min}
        max={max}
      />
    </div>
  );
}
