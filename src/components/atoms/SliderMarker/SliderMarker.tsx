import React from 'react';

import { Marker, WrapperMarker } from './SliderMarker.style';

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
        {children}
      </Marker>
    </WrapperMarker>
  );
}
