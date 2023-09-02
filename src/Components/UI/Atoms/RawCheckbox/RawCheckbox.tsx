import React, { useState, useId, useEffect } from 'react';

import Typography from '../Typography/Typography';
import SVGCheckMark from '../../SVGIcons/SVGCheckMark';
import { FakeCheckbox, HidenCheckBox, InputContainer, Label, TextWrapper, Wrapper } from './RawCheckbox.style';
import { IRawCheckbox, IRawCheckboxProps } from './RawCheckbox.model';

// --------------------------------------------------------------------------- //
// -------------------- A simple Checkbox with a Label ----------------------- //
// --------------------------------------------------------------------------- //
export default function RawCheckbox(props: IRawCheckboxProps) {
  const { label, onChange, defaultChecked, align, alignCheckbox, ...rest } = { ...props, ...defaultProps };
  const [checked, setChecked] = useState(false);
  const id = useId();

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
    <Wrapper $align={align!}>
      <TextWrapper>
        {label && (
          <Label htmlFor={id} $align={alignCheckbox}>
            <Typography
              type="inlineElement"
              variant="label"
            >
              {label}
            </Typography>
          </Label>
        )}
        <Typography
          type="inlineElement"
          variant="label"
        >Mooiin</Typography>
      </TextWrapper>
      
      <InputContainer>
        <FakeCheckbox $checked={checked} onClick={handleClick}>
          <SVGCheckMark />
        </FakeCheckbox>
        <HidenCheckBox id={id} type="checkbox" defaultChecked={checked} onChange={handleChange} {...rest} />
      </InputContainer>
    </Wrapper>
  );
}

// the default props of the component
const defaultProps: IRawCheckbox = {
  align: 'center',
  alignCheckbox: 'right',
};
