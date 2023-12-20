import React from 'react';

import VideoAtom, { TFancyVideo } from '@/components/atoms/FancyVideo/FancyVideo';
import ImageVideoOverlay, { TPositions } from '@/components/atoms/ImageVideoOverlay/ImageVideoOverlay';

// Define the props for the FancyVideoText component
interface IFancyVideoTextProps extends TFancyVideo {
  position: TPositions;
  children?: React.ReactNode;
}
// --------------------------------------------------------------------------- //
// ----------- The Definition for the FancyVideoText Component --------------- //
// --------------------------------------------------------------------------- //
export default function FancyVideoText(props: IFancyVideoTextProps) {
  const { position, ...restProps } = props;

  return (
    // Render the ImageVideoOverlay component with the specified position and textChildren props
    <ImageVideoOverlay position={position} textChildren={props.children}>
      {/* Render the VideoAtom component with the remaining props */}
      <VideoAtom {...restProps} />
    </ImageVideoOverlay>
  );
}
