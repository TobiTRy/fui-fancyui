import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { uiColors, spacingPx, fontSize } from '../../Design/design';


// the style for a single input
interface StyledSingleInputProps {
  hasValue: boolean;
  isFocused: boolean;
}
const StyledSingleInput = styled.input<StyledSingleInputProps>`
  aspect-ratio: 4/5;
  width: 1.5ch;
  font-size: ${fontSize.xxl};
  text-align: center;
  color: ${uiColors.secondary.main};
  border: 1.5px solid ${(props) => (props.hasValue ? uiColors.accent.main : uiColors.secondary.main)};
  border-radius: 5px;
  padding: ${spacingPx.xs};
  background-color: transparent;
  appearance: none;
  outline: none;
  box-shadow: ${(props) => (props.isFocused ? `0 0 2px 1px${uiColors.accent.main_light}` : 'none')};
`;

// --------------------------------------------------------------------------- //
// --------- A Single Letter/NumberInput for a Verification process ---------- //
// --------------------------------------------------------------------------- //
interface ISingleInputAtomProps {
  value: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
const SingleInputAtom = forwardRef<HTMLInputElement, ISingleInputAtomProps>(({ value, onKeyDown }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledSingleInput
      type="text"
      maxLength={1}
      value={value}
      onKeyDown={onKeyDown}
      ref={ref}
      hasValue={value.length > 0}
      onChange={() => {}}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      isFocused={isFocused}
    />
  );
});

export default SingleInputAtom;
