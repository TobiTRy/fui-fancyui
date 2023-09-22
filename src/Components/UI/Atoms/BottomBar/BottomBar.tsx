import React from 'react';

import { Bar, Wrapper } from './BottomBar.style';
import IBottomBar from './IBottomBar.model';

// --------------------------------------------------------------------------- //
// ------------ A Dummy Bar for some types of navigtaion or more ------------- //
// --------------------------------------------------------------------------- //
export default function BottomBar(props: IBottomBar) {
  const { children, bottomFixed, width, spacingLeftRight, roundedness, themeType, layer } = { ...defaultProps, ...props };

  return (
    <Wrapper
      $bottomFixed={bottomFixed}
      $width={width}
      $roundedness={roundedness}
      $spacingLeftRight={spacingLeftRight}
      $themeType={themeType}
      $layer={layer}
    >
      <Bar>{children}</Bar>
    </Wrapper>
  );
}

const defaultProps: IBottomBar = {
  bottomFixed: true,
};
