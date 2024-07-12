import { forwardRef } from 'react';
import { TSwipeUpContainerWithHTMLAttrs } from './SwipeUpContainer.model';
import { StyledSwipeUpContainer } from './SwipeUpContainer.style';

// --------------------------------------------------------------------------- //
// ----------- The Modal Atom the displays a simple Mobile Modal ------------- //
// --------------------------------------------------------------------------- //
const SwipeUpContainer = forwardRef<HTMLDivElement, TSwipeUpContainerWithHTMLAttrs>((props, ref) => {
  const { children, style, isScalable = false, themeType = 'primary', layer = 0, isOpen, ...htmlAttrs } = props;

  return (
    <StyledSwipeUpContainer
      style={isScalable ? style : { ...style }}
      $giveSpace={!isScalable}
      $themeType={themeType}
      $layer={layer}
      ref={ref}
      $isOpen={isOpen}
      {...htmlAttrs}
    >
      <div style={{ overflow: 'hidden' }}>{children}</div>
    </StyledSwipeUpContainer>
  );
});

export default SwipeUpContainer;
