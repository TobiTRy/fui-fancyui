import React from 'react';

import { Bar, Wrapper } from './BottomBar.style';

interface IBottomBar {
  children?: JSX.Element[];
  scrollable?: boolean;
  bottomFixed?: boolean;
  width?: string;
  spacingLeftRight?: string;
}
export default function BottomBar(props: IBottomBar) {
  const { children, bottomFixed = true, width, spacingLeftRight } = props;

  return (
    <Wrapper $bottomFixed={bottomFixed} $width={width} $spacingLeftRight={spacingLeftRight}>
      <Bar>{children}</Bar>
    </Wrapper>
  );
}
