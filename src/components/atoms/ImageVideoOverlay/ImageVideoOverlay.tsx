import { TImageVideoOverlay } from '@/components/atoms/ImageVideoOverlay/ImageVideoOverlay.model';
import { Gradient, TextWrapper, Wrapper } from './ImageVideoOverlay.style';

// --------------------------------------------------------------------------- //
// ----------- The Definition for the ImageVideoOverlay Component ------------ //
// --------------------------------------------------------------------------- //
export default function ImageVideoOverlay(props: TImageVideoOverlay) {
  const { children, position = 'top-right', textChildren } = props;

  return (
    <Wrapper>
      {/* The Overlay for the gradient */}
      <Gradient $position={position} />
      <TextWrapper $position={position}>{textChildren}</TextWrapper>
      {/* The children is normaly only a Video or a image, but do with it what d o you fuucking want */}
      {children}
    </Wrapper>
  );
}
