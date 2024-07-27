'use client';

import { animated, useSpring } from '@react-spring/web';
import { useEffect, useRef } from 'react';

import { StyledUL, WrapperUL } from './FancyDropDownUL.style';
import { TFancyDropDownULWithHTMLAttrs } from './TFancyDropDownUL.model';

// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
export default function FancyDropDownUL({
  children,
  isOpen,
  themeType = 'primary',
  layer = 1,
  ...styledProps
}: TFancyDropDownULWithHTMLAttrs) {
  const { width = '50%', alignHorizontal = 'center', alignVertical = 'top', borderRadius, ...htmlProps } = styledProps;

  const listRef = useRef<HTMLUListElement>(null);
  const [style, animate] = useSpring(() => ({ height: '0px' }), []);

  // This useEffect hook animates the height of the UL element
  useEffect(() => {
    if (!listRef.current) return;
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    animate.start({
      height: (isOpen ? listRef?.current.offsetHeight : 0) + 'px',
    });
  }, [animate, listRef, isOpen]);

  return (
    <WrapperUL
      as={animated.div}
      $width={width}
      $borderRadius={borderRadius}
      $alignHorizontal={alignHorizontal}
      $alignVertical={alignVertical}
      style={{
        ...style,
      }}
      {...htmlProps}
    >
      <StyledUL ref={listRef} $themeType={themeType} $layer={layer}>
        {children}
      </StyledUL>
    </WrapperUL>
  );
}
