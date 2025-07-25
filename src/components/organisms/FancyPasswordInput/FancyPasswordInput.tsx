'use client';

import { forwardRef, useId, useState } from 'react';

import { PasswordInput } from '@/components/atoms/PasswordInput';
import { InputWrapper } from '@/components/molecules/InputWrapper';

import { TFancyPasswordInput } from './TFancyPasswordInput.model';
import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';

// --------------------------------------------------------------------------- //
// ----The PasswordInput Comonent with surrounding icon, label and underline-- //
// --------------------------------------------------------------------------- //
const FancyPasswordInput = forwardRef<HTMLInputElement, TFancyPasswordInput>((props, ref) => {
  const {
    id,
    value,
    placeholder,
    systemMessage,
    disabled,
    align = 'left',
    themeType = 'primary',
    layer = 2,
    icon,
    label,
    onFocus,
    underline,
    onBlur,
    transparentBackground,
    outlined,
    outlinedBackgroundStrength,
    outlinedRemoveBorder,
    className,
    readOnly,
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
      themeType={themeType}
      layer={layer}
      hasValue={!!value}
      placeholder={placeholder}
      label={label}
      disabled={disabled || readOnly}
      align={align}
      underline={underline}
      isActive={isActive}
      icon={icon}
      className={className}
      systemMessage={systemMessage}
      transparentBackground={transparentBackground}
      outlined={outlined}
      outlinedBackgroundStrength={outlinedBackgroundStrength}
      outlinedRemoveBorder={outlinedRemoveBorder}
      InputElement={
        <PasswordInput
          id={usedId}
          ref={ref}
          value={value}
          align={align}
          themeType={getOpositMainThemeType(themeType)}
          layer={layer}
          disabled={disabled}
          readOnly={readOnly}
          onFocus={(e) => {
            onFocus && onFocus(e);
            setIsActive(true);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
            setIsActive(false);
          }}
          placeholder={placeholder}
          {...inputProps}
        />
      }
    />
  );
});

export default FancyPasswordInput;
