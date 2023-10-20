import React from 'react';

import { TUiColorsType } from '../../Design/color/designColor';
import { StyledNewHeader } from './FancyHeader.style';
import { IBorderRadius } from '../../Design/design';
import { TLayer } from '../../Design/color/generateColorSteps';
import { CSSProp } from 'styled-components';

export interface IHeader {
  children?: React.ReactNode;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  outlined?: boolean;
  outlinedBackgroundStrength?: number;
  height?: string;
  width?: string;
  spacingLeftRight?: string;
  spacingTop?: string;
  rounded?: keyof IBorderRadius;
  externalStyle?: CSSProp;
}


export default function NewHeader(props: IHeader) {
  const {
    children,
    height,
    themeType,
    layer,
    width,
    outlined,
    spacingLeftRight,
    spacingTop,
    rounded,
    outlinedBackgroundStrength,
    externalStyle,
  } = props;

  return (
    <StyledNewHeader
      $height={height}
      $themeType={themeType}
      $layer={layer}
      $width={width}
      $outlined={outlined}
      $spacingLeftRight={spacingLeftRight}
      $spacingTop={spacingTop}
      $rounded={rounded}
      $outlinedBackgroundStrength={outlinedBackgroundStrength}
      $externalStyle={externalStyle}
    >
      {children}
    </StyledNewHeader>
  );
}
