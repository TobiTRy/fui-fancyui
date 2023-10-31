import React from 'react';

import { IFancyBoxProps } from './FancyBox.model';
import { StyledFancyBar } from './FancyBox.style';

// --------------------------------------------------------------------------- //
// ------------  A Bar that can usesd for for the most components ------------ //
// --------------------------------------------------------------------------- //
export default function FancyBar(props: IFancyBoxProps) {
  const { layer, themeType, outlined, externalStyle } = props;

  return (
    <StyledFancyBar
      $layer={layer}
      $themeType={themeType}
      $outlined={outlined}
      $externalStyle={externalStyle}
    >
      {props.children}
    </StyledFancyBar>
  );
}
