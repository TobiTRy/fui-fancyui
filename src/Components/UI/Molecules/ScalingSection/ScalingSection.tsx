import React from 'react';
import { styled } from 'styled-components';
import SwipeUpDash from '../../../Atoms/SwipeUpDash/SwipeUpDash';

const SytledScalingSection = styled.div`
  position: sticky;
  height: 30px;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

// --------------------------------------------------------------------------- //
//the ScalingSection is for conroling events on the swipe up dash for better UX //
// --------------------------------------------------------------------------- //
interface IScalingSection {
  touchStart?: (e: React.TouchEvent<HTMLDivElement>) => void;
  touchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
  touchEnd: (e: React.TouchEvent<HTMLDivElement>) => void;
  click: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export default function ScalingSection({ touchStart, touchMove, touchEnd, click }: IScalingSection) {
  return (
    <SytledScalingSection onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd} onClick={click}>
      <SwipeUpDash />
    </SytledScalingSection>
  );
}
