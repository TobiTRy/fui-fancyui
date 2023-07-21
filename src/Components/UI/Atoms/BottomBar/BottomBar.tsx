import React from 'react';

import { Bar, Wrapper } from './BottomBar.style';
import IBottomBar from './IBottomBar.model';

export default function BottomBar(props: IBottomBar) {
  const { children, bottomFixed, width, spacingLeftRight, roundedness } = {...defaultProps, ...props};

  return (
    <Wrapper $bottomFixed={bottomFixed} $width={width} $roundedness={roundedness} $spacingLeftRight={spacingLeftRight}>
      <Bar>{children}</Bar>
    </Wrapper>
  );
}


const defaultProps: IBottomBar = {
  bottomFixed: true,
}
