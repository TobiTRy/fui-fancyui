import React from 'react';

import { InputWrapper } from '@/components/molecules/InputWrapper';
import LabeledRangeSlider from '@/components/molecules/LabeledRangeSlider/LabeledRangeSlider';
import { FancyNumberInput } from '@/components/organisms/FancyNumberInput';

export default function FancyRange() {
  const [value, setValue] = React.useState(0);

  return (
    <InputWrapper
      id="Test"
      underline={false}
      InputElement={
        <div style={{ display: 'flex', alignItems: 'end', gap: '12px' }}>
          <LabeledRangeSlider onChange={(e) => setValue(Number(e.target?.value) ?? 0)} />
          <FancyNumberInput value={value} autoWidth layer={1} align="center" />
        </div>
      }
    />
  );
}
