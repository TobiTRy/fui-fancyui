'use client';

import { forwardRef, useState } from 'react';

import { TDateInputPropsWithNativeAttrs } from './TDateInput.model';
import { StyledDatePicker } from './DateInput.style';

// --------------------------------------------------------------------------- //
// -------------- A simple date input for all kind of types ------------------ //
// --------------------------------------------------------------------------- //
const DateInput = forwardRef<HTMLInputElement, TDateInputPropsWithNativeAttrs>((props, ref) => {
  const {
    value,
    align,
    themeType = 'secondary',
    layer = 0,
    type = 'date',
    onFocus,
    onBlur,
    externalStyle,
    ...htmlInputProps
  } = props;
  const [isActive, setIsActive] = useState(false);

  const activeFocusHandler = (isActive: boolean) => {
    setIsActive(isActive);
  };

  return (
    <StyledDatePicker
      ref={ref}
      $align={align}
      $layer={layer}
      $themeType={themeType}
      $isActive={isActive || !!value} // if the input has a value or is active, the placeholder should be hidden
      $externalStyle={externalStyle}
      type={type}
      value={value}
      onFocus={(e) => {
        onFocus && onFocus(e), activeFocusHandler(true);
      }}
      onBlur={(e) => {
        onBlur && onBlur(e), activeFocusHandler(false);
      }}
      {...htmlInputProps}
    />
  );
});

export default DateInput;
