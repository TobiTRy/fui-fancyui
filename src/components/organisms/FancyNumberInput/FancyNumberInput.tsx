'use client';

import { forwardRef, useId, useState } from 'react';
import { css } from 'styled-components';

import { NumberInput } from '@/components/atoms/NumberInput';
import { InputWrapper } from '@/components/molecules/InputWrapper';
import { TFancyNumberInput } from './TFancyNumberInput.model';
import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';

// --------------------------------------------------------------------------- //
// ----The NumberInput Comonent with surrounding icon, label and underline --- //
// --------------------------------------------------------------------------- //
const FancyNumberInput = forwardRef<HTMLInputElement, TFancyNumberInput>((props, ref) => {
  const {
    value,
    label,
    icon,
    disabled,
    systemMessage,
    align = 'left',
    id,
    themeType = 'primary',
    layer = 2,
    autoWidth,
    underline,
    placeholder,
    onFocus,
    onBlur,
    transparentBackground,
    outlined,
    outlinedBackgroundStrength,
    outlinedRemoveBorder,
    externalStyle,
    className,
    ...inputProps
  } = props;

  //the states activity of the input
  const [isActive, setIsActive] = useState(false);

  // if no id is provided, generate a random one
  const useid = useId();
  const usedId = id ? id : useid;

  return (
    <InputWrapper
      id={usedId}
      hasValue={!!((value === 0 ? undefined : value) || value === 0)} // 0 is a valid value for a number input
      label={label}
      disabled={disabled}
      align={align}
      placeholder={placeholder}
      isActive={isActive}
      icon={icon}
      underline={underline}
      autoWidth={autoWidth}
      systemMessage={systemMessage}
      themeType={themeType}
      layer={layer}
      className={className}
      outlined={outlined}
      outlinedBackgroundStrength={outlinedBackgroundStrength}
      outlinedRemoveBorder={outlinedRemoveBorder}
      transparentBackground={transparentBackground}
      externalStyle={externalStyle}
      InputElement={
        <NumberInput
          ref={ref}
          id={usedId}
          value={value}
          align={align}
          themeType={getOpositMainThemeType(themeType)}
          disabled={disabled}
          onFocus={(e) => {
            onFocus && onFocus(e);
            setIsActive(true);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
            setIsActive(false);
          }}
          placeholder={placeholder}
          autoWidth={autoWidth}
          externalStyle={css`
            transition: width 0.3s ease-in-out;
          `}
          {...inputProps}
        />
      }
    />
  );
});

export default FancyNumberInput;
