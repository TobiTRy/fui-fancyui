import React from 'react';

import { HiddenRadio, RadioWrapper, StyledRadio } from './RawRadio.style';

export type TRawRadioProp = {
  checked: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
// --------------------------------------------------------------------------- //
// ---------- The Raw Radio is only a styled Radio input  -------------------- //
// --------------------------------------------------------------------------- //
export default function RawRadio(props: TRawRadioProp) {
  const { checked, tabIndex, ...inputProps } = props;

  return (
    <RadioWrapper tabIndex={tabIndex} role="radio">
      <StyledRadio checked={checked} />
      <HiddenRadio aria-hidden={true} checked={checked} {...inputProps} />
    </RadioWrapper>
  );
}
