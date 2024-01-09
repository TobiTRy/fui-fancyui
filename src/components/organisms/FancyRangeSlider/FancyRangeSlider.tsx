import { ChangeEvent, useId, useState } from 'react';

import { RawSlider } from '@/components/atoms/RawSlider';
import { FancyNumberInput } from '@/components/organisms/FancyNumberInput';
import { StyledInputWrapper } from '@/components/molecules/InputWrapper/InputWrapper.style';

import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { calcItemState } from '@/design/designFunctions/calcItemState';

import IFancyRangeSlider from './FancyRangeSlider.model';
import { Label, NumberContainer, RangeSliderContainer, Icon } from './FancyRangeSlider.style';
// --------------------------------------------------------------------------- //
// -------------------- The main FancySlider Component ----------------------- //
// --------------------------------------------------------------------------- //
export default function FancyRangeSlider(props: IFancyRangeSlider) {
  const {
    label,
    align,
    icon,
    value,
    min,
    max,
    displayNumber,
    onChange,
    themeType = 'primary',
    layer = 4,
    disabled,
  } = { ...defaultProps, ...props };

  const [isActive, setIsActive] = useState(false);
  const [toutched, setToutched] = useState(false);

  const id = useId();

  const colorStateLabel = calcItemState({ type: 'text', isActive: isActive || toutched, value });

  // this function is called when the slider is moved
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // this line handles the the input bewteen number and slider
    setToutched(true);
    onChange && onChange(e);
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
          <FancySVGAtom
            isActive={isActive}
            size="xs"
            themeType={themeType}
            layer={layer}
            externalStyle={{ transition: 'color 0.3s ease-in-out' }}
          >
            {icon}
          </FancySVGAtom>
        </Icon>
      )}

      {/* label for the top side of the slider */}
      {label && (
        <Label htmlFor={id} $align={align} $colorState={colorStateLabel} $themeType={themeType} $layer={layer}>
          {label}
        </Label>
      )}
      {/* Range Slider */}
      <RangeSliderContainer>
        <RawSlider
          id={id}
          disabled={disabled}
          value={value}
          themeType={themeType}
          layer={layer}
          onChange={changeHandler}
          activeHandler={activeHandler}
          min={min}
          max={max}
        />
      </RangeSliderContainer>

      {/* Number input for typing the number */}
      {displayNumber && (
        <NumberContainer>
          <FancyNumberInput
            themeType={themeType}
            transparentBackground={true}
            layer={layer}
            aria-label={label}
            autoWidth={true}
            align="center"
            value={value}
            onChange={changeHandler}
            min={min}
            max={max}
          />
        </NumberContainer>
      )}
    </StyledInputWrapper>
  );
}

const defaultProps: IFancyRangeSlider = {
  min: 0,
  max: 100,
};
