import React, { forwardRef } from 'react';

import { HiddenRadio, RadioWrapper, StyledRadio } from './RawRadio.style';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TLayer } from '@/types/TLayer';

export type TRawRadio = {
  checked: boolean;
  themeType?: TUiColorsMain;
  layer?: TLayer;
} & React.InputHTMLAttributes<HTMLInputElement>;
// --------------------------------------------------------------------------- //
// ---------- The Raw Radio is only a styled Radio input  -------------------- //
// --------------------------------------------------------------------------- //
const RawRadio = forwardRef<HTMLInputElement, TRawRadio>((props, ref) => {
  const { checked, tabIndex, themeType = 'primary', layer = 2, ...inputProps } = props;

  return (
    <RadioWrapper tabIndex={tabIndex} role="radio">
      <StyledRadio $checked={checked} $themeType={themeType} $layer={layer} />
      <HiddenRadio aria-hidden={true} ref={ref} checked={checked} {...inputProps} />
    </RadioWrapper>
  );
});

export default RawRadio;
