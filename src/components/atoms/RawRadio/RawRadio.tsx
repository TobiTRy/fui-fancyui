import { forwardRef } from 'react';

import { TRawRadioWithHTMLAttrs } from '@/components/atoms/RawRadio/TRawRadio.model';
import { HiddenRadio, RadioWrapper, StyledRadio } from './RawRadio.style';

// --------------------------------------------------------------------------- //
// ---------- The Raw Radio is only a styled Radio input  -------------------- //
// --------------------------------------------------------------------------- //
const RawRadio = forwardRef<HTMLInputElement, TRawRadioWithHTMLAttrs>((props, ref) => {
  const { checked, themeType = 'primary', layer = 2, ...inputProps } = props;

  return (
    <RadioWrapper>
      <HiddenRadio ref={ref} aria-checked={checked} checked={checked} {...inputProps} />
      <StyledRadio $checked={checked} $themeType={themeType} $layer={layer} />
    </RadioWrapper>
  );
});

export default RawRadio;
