import { useState } from 'react';

import { StyledDatePicker } from '@/components/organisms/FancyDateInput/FancyDateInput.style';
import { TDateInputProps, TNativeAttrs } from '@/components/atoms/DateInput/TDateInput.model';

// --------------------------------------------------------------------------- //
// -------------- A simple date input for all kind of types ------------------ //
// --------------------------------------------------------------------------- //
export default function DateInput(props: TDateInputProps & TNativeAttrs) {
  const { value, align, themeType = 'secondary', layer = 0, type, onFocus, onBlur, ...htmlInputProps } = props;
  const [isActive, setIsActive] = useState(false);

  const activeFocusHandler = (isActive: boolean) => {
    setIsActive(isActive);
  };

  return (
    <StyledDatePicker
      $align={align}
      $layer={layer}
      $themeType={themeType}
      $isActive={isActive || !!value} // if the input has a value or is active, the placeholder should be hidden
      type={type || 'date'}
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
}
