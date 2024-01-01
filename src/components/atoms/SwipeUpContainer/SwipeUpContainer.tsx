import React from 'react';
import { styled } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TTheme } from '@/types/TTheme';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';

// --------------------------------------------------------------------------- //
// ----------- The Modal Atom the displays a simple Mobile Modal ------------- //
// --------------------------------------------------------------------------- //
interface ISwipeUpContainer {
  children: React.ReactNode;
  style?: { height: string };
  isScalable?: boolean;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
export default function SwipeUpContainer({ children, isScalable = true, style, themeType, layer }: ISwipeUpContainer) {
  return (
    <StyledSwipeUpContainer
      style={isScalable ? style : { height: 'auto' }}
      $giveSpace={!isScalable}
      $themeType={themeType}
      $layer={layer}
    >
      {children}
    </StyledSwipeUpContainer>
  );
}

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
interface IStyledSwipeUpContainer {
  $giveSpace: boolean;
  theme: TTheme;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
}
const StyledSwipeUpContainer = styled.div<IStyledSwipeUpContainer>`
  width: 100%;
  max-height: 90%;
  border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
  position: sticky;
  top: 0;
  box-shadow: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ $giveSpace }) => ($giveSpace ? ({ theme }) => theme.spacing.lg : '0')};
  z-index: 101;
  backdrop-filter: blur(4px);
  background-color: ${({ theme, $themeType = 'primary', $layer = 0 }) =>
    getBackgroundColor({ theme, $themeType, $layer })};
`;
