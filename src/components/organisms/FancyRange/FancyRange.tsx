import React, { ChangeEvent, useEffect, useId, useState } from 'react';
import { css, styled } from 'styled-components';

import { InputWrapper, TInputWrapper } from '@/components/molecules/InputWrapper';
import { LabeledRangeSlider, TLabeledRangeSliderWithNativeAttrs } from '@/components/molecules/LabeledRangeSlider';
import { FancyNumberInput } from '@/components/organisms/FancyNumberInput';
import { clampLayer } from '@/utils/functions/clampLayer';

type TFancyRange = TInputWrapper & TLabeledRangeSliderWithNativeAttrs;
export default function FancyRange(props: TFancyRange) {
  const { id, label, layer, onChange, systemMessage, max, min, transparentBackground, ...sliderProps } = props;
  const [value, setValue] = React.useState(0);
  const [toutched, setToutched] = useState(false);

  const minVal = min ? Number(min) : 0;
  const maxVal = max ? Number(max) : 100;

  // if no id is provided, generate a random one
  const useid = useId();
  const usedId = id ? id : useid;

  // this function is called when the slider is moved
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // this line handles the the input bewteen number and slider
    setValue(Number(e.target?.value) ?? 0);
    setToutched(true);
    onChange?.(e);
  };

  useEffect(() => {
    if (value > maxVal) {
      setValue(maxVal);
    }

    if (value < minVal) {
      setValue(minVal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxVal, minVal]);

  return (
    <InputWrapper
      id="Test"
      underline={false}
      isActive={toutched}
      transparentBackground={transparentBackground}
      externalStyle={css`
        padding: 2px 2px 2px 8px;
      `}
      InputElement={
        <InputElementWrapper>
          <LabeledRangeSlider
            isActive={toutched}
            id={usedId}
            label={label}
            value={value}
            systemMessageType={systemMessage?.type}
            onChange={changeHandler}
            max={maxVal}
            min={minVal}
            {...sliderProps}
          />
          <FancyNumberInput
            value={value}
            autoWidth
            layer={layer ? clampLayer(layer - 2) : 1}
            align="center"
            max={maxVal}
            min={minVal}
            onChange={changeHandler}
            transparentBackground={transparentBackground}
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
  gap: 8px;

  .wrapper_rawslider-input {
    margin-bottom: 4px;
  }
`;
