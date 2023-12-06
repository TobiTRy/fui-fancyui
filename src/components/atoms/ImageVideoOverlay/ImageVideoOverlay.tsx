import React from 'react';

import { Overlay, TextWrapper, Wrapper } from './ImageVideoOverlay.style';

// Define the possible positions for the overlay
export type TPositions = 'top-left' | 'top-right' | 'center' | 'bottom-left' | 'bottom-right';

// Define the props for the ImageVideoOverlay component
interface IImageVideoOverlay {
  children?: React.ReactNode;
  textChildren?: React.ReactNode;
  position?: TPositions;
}
// --------------------------------------------------------------------------- //
// ----------- The Definition for the ImageVideoOverlay Component ------------ //
// --------------------------------------------------------------------------- //
export default function ImageVideoOverlay(props: IImageVideoOverlay) {
  const { children, position, textChildren } = { ...defaultProps, ...props };

  return (
    <Wrapper>
      <Overlay $position={position} />
      <TextWrapper $position={position}>{textChildren}</TextWrapper>
      {/* The children is normaly only a Video or a image, but do with it what d o you fuucking want */}
      {children}
    </Wrapper>
  );
}

// Define the default props for the ImageVideoOverlay component
const defaultProps = {
  position: 'top-right',
};
