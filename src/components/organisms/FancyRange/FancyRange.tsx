import React, { ChangeEvent, useId, useState } from 'react';
import { styled } from 'styled-components';

import { InputWrapper, TInputWrapper } from '@/components/molecules/InputWrapper';
import { LabeledRangeSlider, TLabeledRangeSliderWithNativeAttrs } from '@/components/molecules/LabeledRangeSlider';
import { FancyNumberInput } from '@/components/organisms/FancyNumberInput';
import { clampLayer } from '@/utils/functions/clampLayer';
import { calcItemState } from '@/design/designFunctions/calcItemState';

type TFancyRange = TInputWrapper & TLabeledRangeSliderWithNativeAttrs;
export default function FancyRange(props: TFancyRange) {
  const { id, label, layer, onChange, systemMessage, ...sliderProps } = props;
  const [value, setValue] = React.useState(0);

  const [isActive] = useState(false);
  const [toutched, setToutched] = useState(false);

  // if no id is provided, generate a random one
  const useid = useId();

  const usedId = id ? id : useid;

  const colorStateLabel = calcItemState({ type: 'text', isActive: isActive || toutched, value });
  console.log(colorStateLabel);

  // this function is called when the slider is moved
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // this line handles the the input bewteen number and slider
    setToutched(true);
    onChange && onChange(e);
  };

  return (
    <InputWrapper
      id="Test"
      underline={false}
      InputElement={
        <InputElementWrapper>
          <LabeledRangeSlider
            id={usedId}
            label={label}
            systemMessageType={systemMessage?.type}
            onChange={(e) => setValue(Number(e.target?.value) ?? 0)}
            {...sliderProps}
          />
          <FancyNumberInput
            value={value}
            autoWidth
            layer={layer ? clampLayer(layer - 2) : 1}
            align="center"
            onChange={changeHandler}
            systemMessage={systemMessage?.type ? { type: systemMessage?.type } : undefined}
          />
        </InputElementWrapper>
      }
    />
  );
}

const InputElementWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 12px;

  .wrapper_rawslider-input {
    margin-bottom: 2px;
  }
`;
