import React from 'react';
import { styled } from 'styled-components';

import { uiColors } from '../../Design/design';

// the slotsInFR is an array of strings which will be used to genera dynamicly the grid-template-columns
const HeaderWrapper = styled.div<{ $slotsInFR?: string[]; $height: string }>`
  background-color: ${uiColors.primary.lighter};
  color: ${uiColors.secondary.main};
  display: grid;
  grid-template-columns: ${({ $slotsInFR }) => ($slotsInFR ? $slotsInFR.join(' ') : '1fr')};
  width: 100%;
  height: 44px;
  box-sizing: border-box;
`;

// --------------------------------------------------------------------------- //
// ----The HeaderContainer wich is only the container for the components ----- //
// --------------------------------------------------------------------------- //
interface IHeaderContainer {
  children?: React.ReactNode;
  slotsInFR?: string[];
  height?: string;
}
export default function HeaderContainer({ children, slotsInFR, height }: IHeaderContainer) {
  return (
    <HeaderWrapper $slotsInFR={slotsInFR} $height={height || '3rem'}>
      {children}
    </HeaderWrapper>
  );
}
