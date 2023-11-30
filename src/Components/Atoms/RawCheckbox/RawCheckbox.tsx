import React, { useState, useEffect } from 'react';

import { FakeCheckbox, HidenCheckBox, InputContainer } from './RawCheckbox.style';
import { IRawCheckboxProps } from './RawCheckbox.model';
import SVGCheckMark from '../../icons/SVGCheckMark/SVGCheckMark';

// --------------------------------------------------------------------------- //
// -------------------- A simple Checkbox with a Label ----------------------- //
// --------------------------------------------------------------------------- //
export default function RawCheckbox(props: IRawCheckboxProps) {
  const { onChange, defaultChecked, id, ...rest } = props;
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
      <FakeCheckbox $checked={checked} onClick={handleClick}>
        <SVGCheckMark />
      </FakeCheckbox>
      {/* The real checkbox but this hidden */}
      <HidenCheckBox id={id} type="checkbox" defaultChecked={checked} onChange={handleChange} {...rest} />
    </InputContainer>
  );
}
