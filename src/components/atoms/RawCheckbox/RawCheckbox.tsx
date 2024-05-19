import React, { useState, useEffect, forwardRef } from 'react';

import { FakeCheckbox, HidenCheckBox, InputContainer } from './RawCheckbox.style';
import { TRawCheckbox } from './TRawCheckbox.model';
import { SVGCheckMark } from '@/components/icons';

// --------------------------------------------------------------------------- //
// -------------------- A simple Checkbox with a Label ----------------------- //
// --------------------------------------------------------------------------- //
const RawCheckbox = forwardRef<HTMLInputElement, TRawCheckbox>((props, ref) => {
  const { onChange, defaultChecked, themeType = 'primary', layer = 3, id, ...htmlProps } = props;
  const [checked, setChecked] = useState(false);

  // the onClick for clicking the fake checkbox to set the state
  const handleClick = () => {
    setChecked(!checked);
  };

  // the onChange handler to set the state and call the incomming onChange handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (onChange) onChange(e);
  };

  // Set default incomming checked value
  useEffect(() => {
    if (defaultChecked) setChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <InputContainer>
      {/* The Fakecheckbox for the styling */}
      <FakeCheckbox $checked={checked} $themeType={themeType} $layer={layer} onClick={handleClick}>
        <SVGCheckMark />
      </FakeCheckbox>
      {/* The real checkbox but this hidden */}
      <HidenCheckBox
        id={id}
        ref={ref}
        type="checkbox"
        onChange={handleChange}
        defaultChecked={checked}
        {...htmlProps}
      />
    </InputContainer>
  );
});

export default RawCheckbox;
