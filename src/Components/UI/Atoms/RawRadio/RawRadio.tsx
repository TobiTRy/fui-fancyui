import React from 'react';

import { HiddenRadio, RadioWrapper, StyledRadio } from './RawRadio.style';

type TRawRadioProp = {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
export default function RawRadio(props: TRawRadioProp) {
  const { id, name, value, checked, onChange, ...inputProps } = props;

  return (
    <RadioWrapper>
      <StyledRadio checked={checked} />
      <HiddenRadio id={id} name={name} value={value} checked={checked} onChange={onChange} tabIndex={0} {...inputProps} />
    </RadioWrapper>
  );
}
