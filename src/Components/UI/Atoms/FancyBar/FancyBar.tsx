import React from 'react';
import { styled } from 'styled-components';

import { IFancyBarProps } from './FancyBar.model';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { TUiColorsType } from '../../Design/color/designColor';
import generateColorDesign from './FancyBar.style';
import { generateHeaderFormat } from './utils/generateAlignment';

type IStyledFancyBar = IStyledPrefixAndPicker<IFancyBarProps> & { theme: TUiColorsType };
export const StyledFancyBar = styled.div<IStyledFancyBar>`
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  ${generateHeaderFormat}
  ${({ $themeType, theme, $outlined, $padding, $rounded, $layer, $outlinedBackgroundStrength }) =>
    generateColorDesign({ $themeType, theme, $padding, $outlined, $rounded, $layer, $outlinedBackgroundStrength })};
  ${({ $externalStyle }) => $externalStyle};
`;
// --------------------------------------------------------------------------- //
// ------------  A Bar that can usesd for for the most components ------------ //
// --------------------------------------------------------------------------- //
export default function FancyBar(props: IFancyBarProps) {
  const { layer, themeType, outlined, rounded, height, width, spacingLeftRight, spacingTopBottom, externalStyle } = props;

  return (
    <StyledFancyBar
      $layer={layer}
      $themeType={themeType}
      $outlined={outlined}
      $rounded={rounded}
      $height={height}
      $width={width}
      $spacingLeftRight={spacingLeftRight}
      $spacingTopBottom={spacingTopBottom}
      $externalStyle={externalStyle}
    >
      {props.children}
    </StyledFancyBar>
  );
}
