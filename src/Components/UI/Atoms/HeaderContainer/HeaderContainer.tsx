import React from 'react';
import { styled } from 'styled-components';
import { TUiColorsType } from '../../Design/color/designColor';
import getColorsForComponent from '../../Design/color/colorCalculatorForComponet';

// the slotsInFR is an array of strings which will be used to genera dynamicly the grid-template-columns
interface IHeaderWrapper {
  $slotsInFR?: string[];
  $height: string;
  theme: TUiColorsType;
  $themeType?: keyof TUiColorsType;
  $layer?: number;
}
const HeaderWrapper = styled.div<IHeaderWrapper>`
  display: grid;
  grid-template-columns: ${({ $slotsInFR }) => ($slotsInFR ? $slotsInFR.join(' ') : '1fr')};
  width: 100%;
  height: 3rem;
  box-sizing: border-box;
  ${({ theme, $themeType = 'primary', $layer = 1 }) => getColorsForComponent({ theme, $themeType, $layer })};
`;

// --------------------------------------------------------------------------- //
// ----The HeaderContainer wich is only the container for the components ----- //
// --------------------------------------------------------------------------- //
interface IHeaderContainer {
  children?: React.ReactNode;
  slotsInFR?: string[];
  height?: string;
  themeType?: keyof TUiColorsType;
  layer?: number;
}
export default function HeaderContainer({ children, slotsInFR, height, themeType, layer }: IHeaderContainer) {
  return (
    <HeaderWrapper $slotsInFR={slotsInFR} $height={height || '3rem'} $themeType={themeType} $layer={layer}>
      {children}
    </HeaderWrapper>
  );
}
