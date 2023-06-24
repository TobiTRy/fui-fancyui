import React, { ChangeEvent, useId, useState } from 'react';

import RawSlider from '../../../Atoms/RawSlider/RawSlider';
import FancyNumberInput from '../FancyNumberInput';
import { StyledInputWrapper } from '../../../Atoms/InputWrapper/InputWrapper.style';

import SVGAtom from '../../../Atoms/SVGAtom/SVGAtom';
import { Label, NumberContainer, RangeSliderContainer, Icon } from './FancyRangeSlider.style';
import IFancyRangeSlider from './FancyRangeSlider.model';


// --------------------------------------------------------------------------- //
// -------------------- The main FancySlider Component --------------------- //
// --------------------------------------------------------------------------- //

export default function FancyRangeSlider(props: IFancyRangeSlider) {
  const { label, labelAlign, icon, value, minValue, maxValue, displayNumber, handler, disabled } = props;

  const [sliderProgress, setSliderProgress] = useState(value ? value : 0);
  const [isActive, setIsActive] = useState(false);
  const [toutched, setToutched] = useState(false);

  const id = useId();

  const changeHandler = (value?: string, e?: ChangeEvent<HTMLInputElement>) => {
    if (!value) return;
    setToutched(true);
    setSliderProgress(parseFloat(value));
    handler && handler(parseFloat(value), e);
  };

  const activeHandler = (value: boolean) => {
    setIsActive(value);
  };

  return (
    <StyledInputWrapper disabled={disabled}>
      {/* Icon for the left side of the slider */}
      {icon && (
        <Icon>
          <SVGAtom isActive={isActive} size="large">
            {icon}
          </SVGAtom>
        </Icon>
      )}

      {/* label for the top side of the slider */}
      {label && (
        <Label htmlFor={id} align={labelAlign} active={isActive || toutched}>
          {label}
        </Label>
      )}
      {/* Range Slider */}
      <RangeSliderContainer>
        <RawSlider
          id={id}
          disabled={disabled}
          value={sliderProgress}
          handler={changeHandler}
          activeHandler={activeHandler}
          minValue={minValue}
          maxValue={maxValue}
        />
      </RangeSliderContainer>

      {/* Number input for typing the number */}
      {displayNumber && (
        <NumberContainer>
          <FancyNumberInput
            autoWidth={true}
            align="center"
            value={sliderProgress.toString()}
            handler={changeHandler}
            minValue={minValue}
            maxValue={maxValue}
          />
        </NumberContainer>
      )}
    </StyledInputWrapper>
  );
}
