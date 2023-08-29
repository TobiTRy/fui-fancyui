import React from 'react';

import { styled } from 'styled-components';
import { borderRadius } from '../../Design/design';
import { boxShadow } from '../../Design/shadows';

export const WrapperMarker = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 2px;
  bottom: 2px;
  margin-left: 0;
  margin-right: 0;
  width: 5px;
  z-index: 2;
  transform: translate(-2.5px);
`;

const Marker = styled.div`
  box-sizing: border-box;
  position: relative;
  border: 1px solid white;
  width: 100%;
  height: 100%;
  ${boxShadow.large}
  border-radius: ${borderRadius.sm};
`;

// --------------------------------------------------------------------------- //
// --- The main Marker Component to display the position on the slider ------ //
// --------------------------------------------------------------------------- //
interface ISliderMarker {
  position: string;
  children?: React.ReactNode;
}
export default function SliderMarker({ position, children }: ISliderMarker) {
  return (
    <WrapperMarker style={{ left: `${position}` }}>
      <Marker>
        {/* the children can use to display something in the marker like the color indicator that moves with the marker */}
        {children && children}
      </Marker>
    </WrapperMarker>
  );
}
