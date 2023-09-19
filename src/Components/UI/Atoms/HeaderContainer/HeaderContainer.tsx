import React from 'react';
import { styled } from 'styled-components';
import { TUiColorsType, TthemeColorGroup } from '../../Design/color/designColor';
import checkThemeOrColor from '../../Design/color/ckeckThemeOrColor';

// the slotsInFR is an array of strings which will be used to genera dynamicly the grid-template-columns
interface IHeaderWrapper {
  $slotsInFR?: string[];
  $height: string;
  theme: TUiColorsType;
  $backgroundColor?: string | TthemeColorGroup;
}
const HeaderWrapper = styled.div<IHeaderWrapper>`
  display: grid;
  grid-template-columns: ${({ $slotsInFR }) => ($slotsInFR ? $slotsInFR.join(' ') : '1fr')};
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.secondary[0]};
  background-color: ${({ theme, $backgroundColor }) => ($backgroundColor ? checkThemeOrColor($backgroundColor) : theme.primary[1])};
`;

// --------------------------------------------------------------------------- //
// ----The HeaderContainer wich is only the container for the components ----- //
// --------------------------------------------------------------------------- //
interface IHeaderContainer {
  children?: React.ReactNode;
  slotsInFR?: string[];
  height?: string;
  backgroundColor?: string | TthemeColorGroup;
}
export default function HeaderContainer({ children, slotsInFR, height, backgroundColor }: IHeaderContainer) {
  return (
    <HeaderWrapper $slotsInFR={slotsInFR} $height={height || '3rem'} $backgroundColor={backgroundColor}>
      {children}
    </HeaderWrapper>
  );
}
