import React from 'react';
import { styled } from 'styled-components';

import colorTransparencyCalculator from '../../Design/color/colorTransparencyCalculator';
import { TTheme } from '@/Components/UI/Design/color/themeStore';

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

const Marker = styled.div<{ theme: TTheme }>`
  box-sizing: border-box;
  position: relative;
  border: ${({ theme }) => `solid 1px ${theme.colors.primary[0]} `};
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 1px 1px ${({ theme }) => colorTransparencyCalculator(theme.colors.secondary[0], 0.5)};
  border-radius: ${({theme}) => theme.borderRadius.sm};
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
