import React, { TouchEvent } from 'react';
import { styled } from 'styled-components';

import { SwipeUpDash } from '@/components/atoms/SwipeUpDash';

// --------------------------------------------------------------------------- //
//the ScalingSection is for conroling events on the swipe up dash for better UX //
// --------------------------------------------------------------------------- //
interface IScalingSection {
  touchStart?: (e: TouchEvent<HTMLDivElement>) => void;
  touchMove?: (e: TouchEvent<HTMLDivElement>) => void;
  touchEnd?: (e: TouchEvent<HTMLDivElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export default function ScalingSection(props: IScalingSection) {
  return (
    <SytledScalingSection {...props}>
      <SwipeUpDash />
    </SytledScalingSection>
  );
}

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
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
