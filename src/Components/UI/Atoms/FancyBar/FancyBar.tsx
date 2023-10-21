import React from 'react';
import { styled } from 'styled-components';

import { IFancyBarProps } from './FancyBar.model';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { TUiColorsType } from '../../Design/color/designColor';
import generateColorDesign from './FancyBar.style';

type IStyledFancyBar = IStyledPrefixAndPicker<IFancyBarProps> & { theme: TUiColorsType };
export const StyledFancyBar = styled.div<IStyledFancyBar>`
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateColorDesign({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })};
  ${({ $style }) => $style};
`;
// --------------------------------------------------------------------------- //
// ------------  A Bar that can usesd for for the most components ------------ //
// --------------------------------------------------------------------------- //
export default function FancyBar(props: IFancyBarProps) {
  const { layer, themeType, outlined, style } = props;

  return (
    <StyledFancyBar
      $layer={layer}
      $themeType={themeType}
      $outlined={outlined}
      $style={style}
    >
      {props.children}
    </StyledFancyBar>
  );
}
