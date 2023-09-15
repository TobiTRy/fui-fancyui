import React from 'react';
import { styled } from 'styled-components';

import { borderRadius, spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import { boxShadow } from '../../Design/shadows';

const StyledSwipeUpContainer = styled.div<{ $giveSpace: boolean; theme: TUiColorsType }>`
  width: 100%;
  max-height: 90%;
  border-radius: ${borderRadius.xxxl} ${borderRadius.xxxl} 0 0;
  position: sticky;
  top: 0;
  box-shadow: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ $giveSpace }) => ($giveSpace ? spacingPx.lg : '0')};
  background-color: ${({ theme }) => theme.primary[0]};
  z-index: 101;
  backdrop-filter: blur(4px);
  ${boxShadow.lg}
`;

// --------------------------------------------------------------------------- //
// ----------- The Modal Atom the displays a simple Mobile Modal ------------- //
// --------------------------------------------------------------------------- //
interface ISwipeUpContainer {
  children: React.ReactNode;
  style?: { height: string };
  isScalable?: boolean;
}
export default function SwipeUpContainer({ children, isScalable = true, style }: ISwipeUpContainer) {
  return (
    <StyledSwipeUpContainer style={isScalable ? style : { height: 'auto' }} $giveSpace={!isScalable}>
      {children}
    </StyledSwipeUpContainer>
  );
}
