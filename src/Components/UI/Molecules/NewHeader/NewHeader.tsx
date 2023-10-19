import React from 'react';

import { TUiColorsType } from '../../Design/color/designColor';
import { StyledNewHeader } from './FancyHeader.style';
import { IBorderRadius } from '../../Design/design';
import { TLayer } from '../../Design/color/generateColorSteps';



export interface IHeader {
  children?: React.ReactNode;
  height?: string;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  outlined?: boolean;
  spacingLeftRight?: string;
  width?: string;
  rounded?: keyof IBorderRadius;
}

export default function NewHeader(props: IHeader) {
  const { children, height, themeType, layer, width, outlined, spacingLeftRight } = props;

  return (
    <StyledNewHeader
      $height={height}
      $themeType={themeType}
      $layer={layer}
      $width={width}
      $outlined={outlined}
      $spacingLeftRight={spacingLeftRight}
    >
      {children}
    </StyledNewHeader>
  );
}
