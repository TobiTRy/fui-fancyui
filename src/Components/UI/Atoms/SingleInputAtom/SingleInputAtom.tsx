import React, { forwardRef, useState } from 'react';
import { styled } from 'styled-components';
import { uiColors, spacingPx, fontSize } from '../../Design/design';

// the style for a single input
interface StyledSingleInputProps {
  $hasValue: boolean;
  $isFocused: boolean;
}
const StyledSingleInput = styled.input<StyledSingleInputProps>`
  aspect-ratio: 4/5;
  width: 1.5ch;
  font-size: ${fontSize.xxl};
  text-align: center;
  color: ${uiColors.secondary[0]};
  border: 1.5px solid ${(props) => (props.$hasValue ? uiColors.accent[0] : uiColors.secondary[0])};
  border-radius: 5px;
  padding: ${spacingPx.xs};
  background-color: transparent;
  appearance: none;
  outline: none;
  box-shadow: ${(props) => (props.$isFocused ? `0 0 2px 1px${uiColors.accent.light}` : 'none')};
`;

// --------------------------------------------------------------------------- //
// --------- A Single Letter/NumberInput for a Verification process ---------- //
// --------------------------------------------------------------------------- //
interface ISingleInputAtomProps {
  value: string;
  ariaLabel?: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
const SingleInputAtom = forwardRef<HTMLInputElement, ISingleInputAtomProps>(({ value, onKeyDown, ariaLabel }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledSingleInput
      type="text"
      maxLength={1}
      value={value}
      onKeyDown={onKeyDown}
      ref={ref}
      aria-label={ariaLabel}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onChange={() => {}}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      $hasValue={value.length > 0}
      $isFocused={isFocused}
    />
  );
});

export default SingleInputAtom;
