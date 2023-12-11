import React from 'react';

import { FancyBox, IFancyBox } from '@/components/atoms/FancyBox';

type TPill = IFancyBox;
export default function Pill(props: TPill) {
  const { themeType, outlined, layer, externalStyle, children } = props;

  return (
    <FancyBox themeType={themeType} outlined={outlined} layer={layer} externalStyle={externalStyle}>
      {children}
    </FancyBox>
  );
}
