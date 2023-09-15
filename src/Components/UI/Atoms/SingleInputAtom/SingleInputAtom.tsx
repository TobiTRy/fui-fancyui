import React, { forwardRef, useState } from 'react';
import { styled } from 'styled-components';
import { spacingPx, fontSize } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';

// the style for a single input
interface StyledSingleInputProps {
  $hasValue: boolean;
  $isFocused: boolean;
}
const StyledSingleInput = styled.input<StyledSingleInputProps & {theme: TUiColorsType}>`
  aspect-ratio: 4/5;
  width: 1.5ch;
  font-size: ${fontSize.xxl};
  text-align: center;
  color: ${({theme}) =>  theme.secondary[0]};
  border: 1.5px solid ${({$hasValue, theme}) => ($hasValue ? theme.accent[0] : theme.secondary[0])};
  border-radius: 5px;
  padding: ${spacingPx.xs};
  background-color: transparent;
  appearance: none;
  outline: none;
  box-shadow: ${({$isFocused, theme}) => ($isFocused ? `0 0 2px 1px${theme.accent[1]}` : 'none')};
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
