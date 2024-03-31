import React, { ChangeEvent, useEffect, useId, useState } from 'react';

import { InputWrapper } from '@/components/molecules/InputWrapper';
import { FancyNumberInput } from '@/components/organisms/FancyNumberInput';
import { clampLayer } from '@/utils/functions/clampLayer';
import { RawSlider } from '@/components/atoms/RawSlider';
import { countNegativLayerUpwards } from '@/design/designFunctions/countNegativLayerUpwards';

import { TFancyRangeSlider } from './TFancyRangeSlider.model';
import { InputElementWrapper, generateInputWrapperStyles } from './FancyRangeSlider.style';

// --------------------------------------------------------------------------- //
// ------------ Here is createt the Fancy Range Slider Organism -------------- //
// --------------------------------------------------------------------------- //
export default function FancyRangeSlider(props: TFancyRangeSlider) {
  const {
    id,
    label,
    layer = 2,
    onChange,
    systemMessage,
    max = 100,
    min = 0,
    transparentBackground,
    displayNumberInput = false,
    icon,
    align,
    placeholder,
    themeType,
    disabled,
    ...sliderProps
  } = props;

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
      id={usedId}
      label={label}
      hasValue={toutched}
      underline={false}
      isActive={toutched}
      transparentBackground={transparentBackground}
      externalStyle={generateInputWrapperStyles({ hasNumberInput: displayNumberInput })}
      disabled={disabled}
      placeholder={placeholder}
      themeType={themeType}
      layer={layer}
      align={align}
      labelVariant="static"
      icon={icon}
      systemMessage={systemMessage}
      InputElement={
        <InputElementWrapper>
          <RawSlider
            id={usedId}
            value={value}
            max={maxVal}
            min={minVal}
            onChange={changeHandler}
            themeType={themeType}
            layer={layer ? clampLayer(layer - 2) : 1}
            disabled={disabled}
            {...sliderProps}
          />
          {displayNumberInput && (
            <FancyNumberInput
              value={value}
              autoWidth
              layer={layer ? countNegativLayerUpwards(layer, 2) : 1}
              align="center"
              max={maxVal}
              min={minVal}
              onChange={changeHandler}
              transparentBackground={transparentBackground}
              systemMessage={systemMessage?.type ? { type: systemMessage?.type } : undefined}
            />
          )}
        </InputElementWrapper>
      }
    />
  );
}
