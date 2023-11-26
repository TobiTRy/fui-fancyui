import React from 'react';

import { HiddenRadio, RadioWrapper, StyledRadio } from './RawRadio.style';

export type TRawRadioProp = {
  name: string;
  checked: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
// --------------------------------------------------------------------------- //
// ---------- The Raw Radio is only a styled Radio input  -------------------- //
// --------------------------------------------------------------------------- //
export default function RawRadio(props: TRawRadioProp) {
  const { name, checked, tabIndex, ...inputProps } = props;

  return (
    <RadioWrapper tabIndex={tabIndex} role="radio">
      <StyledRadio checked={checked} />
      <HiddenRadio name={name} aria-hidden={true} checked={checked} {...inputProps} />
    </RadioWrapper>
  );
}
