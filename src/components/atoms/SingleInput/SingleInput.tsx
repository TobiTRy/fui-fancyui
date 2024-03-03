import { forwardRef, useState } from 'react';

import { TSingleInputAtomWithHTMLAttrs } from '@/components/atoms/SingleInput/TSingleInput.model';
import { StyledSingleInput } from './SingleInput.style';

// --------------------------------------------------------------------------- //
// --------- A Single Letter/NumberInput for a Verification process ---------- //
// --------------------------------------------------------------------------- //
const SingleInput = forwardRef<HTMLInputElement, TSingleInputAtomWithHTMLAttrs>((props, ref) => {
  const { value, onKeyDown, themeType, layer, onFocus, onBlur, externalStyle } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledSingleInput
      type="text"
      $themeType={themeType}
      $layer={layer}
      maxLength={1}
      value={value}
      onKeyDown={onKeyDown}
      ref={ref}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onChange={() => {}}
      onFocus={(e) => {
        setIsFocused(true);
        onFocus && onFocus(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        onBlur && onBlur(e);
      }}
      $hasValue={value.length > 0}
      $isFocused={isFocused}
      $externalStyle={externalStyle}
    />
  );
});

export default SingleInput;
