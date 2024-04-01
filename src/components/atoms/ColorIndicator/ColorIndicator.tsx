import Color from 'color';

import { Indicator, WrapperIndicator } from './ColorIndicator.style';
import { TColorIndicator } from '@/components/atoms/ColorIndicator';

// --------------------------------------------------------------------------- //
// ---------- The colorIndicator to displays the color in a bubble  ---------- //
// --------------------------------------------------------------------------- //
export default function ColorIndicator({ position, color, isActive }: TColorIndicator) {
  const positionTop = position?.y ?? '50%';
  const positionLeft = position?.x ?? '50%';

  return (
    <WrapperIndicator $isActive={isActive} style={{ top: positionTop, left: positionLeft }}>
      <Indicator $color={Color(color).hexa()} $isActive={isActive} />
    </WrapperIndicator>
  );
}
