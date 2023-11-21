import React from 'react';

import { HiddenRadio, RadioWrapper, StyledRadio } from './RawRadio.style';

interface RawRadioProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function RawRadio(props: RawRadioProps) {
  const { id, name, value, checked, onChange } = props;

  return (
    <RadioWrapper>
      <StyledRadio checked={checked} />
      <HiddenRadio id={id} name={name} value={value} checked={checked} onChange={onChange} />
    </RadioWrapper>
  );
}
