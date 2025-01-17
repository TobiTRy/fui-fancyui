'use client';

import { forwardRef } from 'react';
import { TSwipeUpContainerWithHTMLAttrs } from './SwipeUpContainer.model';
import { OverflowHidden, StyledSwipeUpContainer } from './SwipeUpContainer.style';

// --------------------------------------------------------------------------- //
// ----------- The Modal Atom the displays a simple Mobile Modal ------------- //
// --------------------------------------------------------------------------- //
const SwipeUpContainer = forwardRef<HTMLDivElement, TSwipeUpContainerWithHTMLAttrs>((props, ref) => {
  const {
    children,
    style,
    isScalable = false,
    themeType = 'primary',
    layer = 0,
    isOpen,
    externalStyle,
    ...htmlAttrs
  } = props;

  return (
    <StyledSwipeUpContainer
      ref={ref}
      style={isScalable ? style : { ...style }}
      $giveSpace={!isScalable}
      $themeType={themeType}
      $layer={layer}
      $isOpen={isOpen}
      $externalStyle={externalStyle}
      {...htmlAttrs}
    >
      <OverflowHidden>{children}</OverflowHidden>
    </StyledSwipeUpContainer>
  );
});

export default SwipeUpContainer;
