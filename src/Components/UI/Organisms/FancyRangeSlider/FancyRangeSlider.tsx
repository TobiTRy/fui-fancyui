import React, { ChangeEvent, useId, useState } from 'react';

import RawSlider from '../../Atoms/RawSlider/RawSlider';
import FancyNumberInput from '../FancyNumberInput/FancyNumberInput';
import { StyledInputWrapper } from '../../Molecules/InputWrapper/InputWrapper.style';
import FancySVGAtom from '../../Atoms/FancySVGAtom/FancySVGAtom';
import { Label, NumberContainer, RangeSliderContainer, Icon } from './FancyRangeSlider.style';
import IFancyRangeSlider from './FancyRangeSlider.model';


// --------------------------------------------------------------------------- //
// -------------------- The main FancySlider Component ----------------------- //
// --------------------------------------------------------------------------- //
export default function FancyRangeSlider(props: IFancyRangeSlider) {
  const { label, align, icon, value, minValue, maxValue, displayNumber, handler, disabled } = props;

  const [sliderProgress, setSliderProgress] = useState(value ? value : 0);
  const [isActive, setIsActive] = useState(false);
  const [toutched, setToutched] = useState(false);

  const id = useId();

  // this function is called when the slider is moved
  const changeHandler = (value?: string, e?: ChangeEvent<HTMLInputElement>) => { 
    // this line handles the the input bewteen number and slider
    value = value || e?.target.value;
    if (!value) return;
    setToutched(true);
    setSliderProgress(parseFloat(value));
    handler && handler(parseFloat(value), e);
  };

  // this function is called when the slider is clicked
  const activeHandler = (value: boolean) => {
    setIsActive(value);
  };

  return (
    <StyledInputWrapper disabled={disabled}>
      {/* Icon for the left side of the slider */}
      {icon && (
        <Icon>
          <FancySVGAtom isPassive={false} isActive={isActive} size="large">
            {icon}
          </FancySVGAtom>
        </Icon>
      )}

      {/* label for the top side of the slider */}
      {label && (
        <Label htmlFor={id} $align={align} $isActive={isActive || toutched}>
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
            ariaLabel={label}
            autoWidth={true}
            align="center"
            value={sliderProgress.toString()}
            handler={(e) => changeHandler(undefined, e)}
            minValue={minValue}
            maxValue={maxValue}
          />
        </NumberContainer>
      )}
    </StyledInputWrapper>
  );
}
