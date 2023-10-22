import React from 'react';

import { IFancyBarProps } from './FancyBar.model';
import { StyledFancyBar } from './FancyBar.style';

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
