import React, { forwardRef, useState } from 'react';
import { styled } from 'styled-components';

import { fontSize } from '../../Design/designSizes';
import { TThemeTypes } from '@/Components/UI/Interface/TUiColors';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { TLayer } from '@/Components/UI/Interface/TLayer';
import { TTheme } from '@/Components/UI/Interface/TTheme';

// the style for a single input
interface StyledSingleInputProps {
  $hasValue: boolean;
  $isFocused: boolean;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
}
const StyledSingleInput = styled.input<StyledSingleInputProps & { theme: TTheme }>`
  aspect-ratio: 4/5;
  width: 1.5ch;
  font-size: ${fontSize.xxl};
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary[0]};
  border: 1.5px solid
    ${({ $hasValue, theme, $themeType = 'secondary', $layer }) =>
      $hasValue ? theme.colors.accent[0] : getBackgroundColor({ theme, $themeType, $layer })};
  border-radius: 5px;
  padding: ${({ theme }) => theme.spacing.xs};
  background-color: transparent;
  appearance: none;
  outline: none;
  box-shadow: ${({ $isFocused, theme }) => ($isFocused ? `0 0 2px 1px${theme.colors.accent[1]}` : 'none')};
`;

// --------------------------------------------------------------------------- //
// --------- A Single Letter/NumberInput for a Verification process ---------- //
// --------------------------------------------------------------------------- //
interface ISingleInputAtomProps {
  value: string;
  ariaLabel?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
export const SingleInputAtom = forwardRef<HTMLInputElement, ISingleInputAtomProps>(
  ({ value, onKeyDown, ariaLabel, themeType, layer }, ref) => {
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
        aria-label={ariaLabel}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        $hasValue={value.length > 0}
        $isFocused={isFocused}
      />
    );
  }
);

export default SingleInputAtom;
