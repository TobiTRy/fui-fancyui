'use client';

import { TFancyTextOverlay } from '@/components/atoms/FancyTextOverlay/FancyTextOverlay.model';
import { Gradient, TextWrapper, Wrapper } from './FancyTextOverlay.style';

// --------------------------------------------------------------------------- //
// ----------- The Definition for the ImageVideoOverlay Component ------------ //
// --------------------------------------------------------------------------- //
export default function FancyTextOverlay(props: TFancyTextOverlay) {
  const { children, position = 'top-right', textChildren, externalStyle, ...htmlProps } = props;

  return (
    <Wrapper $externalStyle={externalStyle} {...htmlProps}>
      {/* The Overlay for the gradient */}
      <Gradient $position={position} />
      <TextWrapper $position={position}>{textChildren}</TextWrapper>
      {/* The children is normaly only a Video or a image, but do with it what d o you fuucking want */}
      {children}
    </Wrapper>
  );
}
