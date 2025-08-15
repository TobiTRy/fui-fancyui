import React from 'react';
import { StyledFloatingWrapper, TFloatingPosition } from './FloatingWrapper.style';

export default function FloatingWrapper({
  children,
  position,
}: {
  children: React.ReactNode;
  position: TFloatingPosition;
}) {
  return <StyledFloatingWrapper $position={position}>{children}</StyledFloatingWrapper>;
}
