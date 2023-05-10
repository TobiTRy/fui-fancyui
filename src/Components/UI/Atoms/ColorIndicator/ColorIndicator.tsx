import React from 'react'

import { Indicator, WrapperIndicator } from './ColorIndicator.style';
import Color from 'color';

interface IColorIndicator {
  position?: { x?: number | string, y?: number | string };
  color: string;
  isActive: boolean;
};
export default function ColorIndicator({ position, color, isActive }: IColorIndicator) {
  const positionTop = position?.y ?? '50%';
  const positionLeft = position?.x ?? '50%';
  
  return (
    <WrapperIndicator style={{top: positionTop, left: positionLeft }}>
      <Indicator color={Color(color).hexa()} isActive={isActive}/>
    </WrapperIndicator>
  )
}
