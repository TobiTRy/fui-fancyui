import Color from 'color';

import { Indicator, WrapperIndicator } from './ColorIndicator.style';

interface IColorIndicator {
  position?: { x?: number | string; y?: number | string };
  color: string;
  isActive: boolean;
}
// --------------------------------------------------------------------------- //
// ---------- The colorIndicator to displays the color in a bubble  ---------- //
// --------------------------------------------------------------------------- //
export default function ColorIndicator({ position, color, isActive }: IColorIndicator) {
  const positionTop = position?.y ?? '50%';
  const positionLeft = position?.x ?? '50%';

  return (
    <WrapperIndicator $isActive={isActive} style={{ top: positionTop, left: positionLeft }}>
      <Indicator $color={Color(color).hexa()} $isActive={isActive} />
    </WrapperIndicator>
  );
}
