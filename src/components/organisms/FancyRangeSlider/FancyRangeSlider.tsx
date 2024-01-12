import { ChangeEvent, useId, useState } from 'react';
import { css } from 'styled-components';

import { RawSlider } from '@/components/atoms/RawSlider';
import { StyledInputWrapper } from '@/components/molecules/InputWrapper/InputWrapper.style';
import { FancyNumberInput } from '@/components/organisms/FancyNumberInput';

import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { calcItemState } from '@/design/designFunctions/calcItemState';

import IFancyRangeSlider from './FancyRangeSlider.model';
import { Icon, NumberContainer, RangeSliderContainer } from './FancyRangeSlider.style';
import { InputLabel } from '@/components/atoms/InputLabel/InputLabel';

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

  const [isActive] = useState(false);
  const [toutched, setToutched] = useState(false);

  const id = useId();

  const colorStateLabel = calcItemState({ type: 'text', isActive: isActive || toutched, value });
  console.log(colorStateLabel);
  // this function is called when the slider is moved
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // this line handles the the input bewteen number and slider
    setToutched(true);
    onChange && onChange(e);
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
        <InputLabel
          $lableVariant="static"
          htmlFor={id}
          $align={align}
          $themeType={themeType}
          $layer={layer}
          $externalStyle={css`
            grid-row: 1/2;
            grid-column: 2/3;
          `}
        >
          {label}
        </InputLabel>
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
