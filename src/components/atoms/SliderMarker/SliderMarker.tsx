'use client';

import { TSliderMarkerWithHTMLAttrs } from '@/components/atoms/SliderMarker/TSlidermarker.model';
import { Marker, WrapperMarker } from './SliderMarker.style';

// --------------------------------------------------------------------------- //
// --- The main Marker Component to display the position on the slider ------ //
// --------------------------------------------------------------------------- //
export default function SliderMarker(props: TSliderMarkerWithHTMLAttrs) {
  const { position, children, ...htmlProps } = props;

  return (
    <WrapperMarker style={{ left: `${position}` }} {...htmlProps}>
      <Marker>
        {/* the children can use to display something in the marker like the color indicator that moves with the marker */}
        {children}
      </Marker>
    </WrapperMarker>
  );
}
