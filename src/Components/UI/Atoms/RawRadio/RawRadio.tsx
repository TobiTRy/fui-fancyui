import React from 'react';

import { HiddenRadio, RadioWrapper, StyledRadio } from './RawRadio.style';

type TRawRadioProp = {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
export default function RawRadio(props: TRawRadioProp) {
  const { id, name, value, checked, onChange, tabIndex, ...inputProps } = props;

  return (
    <RadioWrapper tabIndex={tabIndex} role="radio">
      <StyledRadio checked={checked} />
      <HiddenRadio id={id} name={name} value={value} aria-hidden={true} checked={checked} onChange={onChange} {...inputProps} />
    </RadioWrapper>
  );
}
