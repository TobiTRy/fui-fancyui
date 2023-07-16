import React, { useEffect, useRef } from 'react';

import { animated, useSpring } from '@react-spring/web';
import { StyledUL, WrapperUL } from './FancyDropDownUL.style';


export interface IFancyUL {
  items: React.ReactNode[];
  children: React.ReactNode;
  width?: string;
  isOpen?: boolean;
  alignHorizontal?: 'left' | 'center' | 'right';
  alignVertical?: 'top' | 'center' | 'bottom';
}

// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
export default function FancyUL({ items, children, isOpen, ...styledProps }: IFancyUL) {
  const { width = '50%', alignHorizontal = 'center', alignVertical = 'top' } = styledProps;
  const listRef = useRef<HTMLDivElement>(null);
  const [style, animate] = useSpring(() => ({ height: '0px' }), []);

  // This useEffect hook animates the height of the UL element
  useEffect(() => {
    if (!listRef.current) return;
    animate({
      height: (isOpen ? listRef?.current.offsetHeight : 0) + 'px',
    })
  }, [animate, listRef, isOpen]);

  return (
      <WrapperUL
        as={animated.div}
        $width={width}
        $alignHorizontal={alignHorizontal}
        $alignVertical={alignVertical} 
        style={{
          ...style,
        }}
      >
        <StyledUL ref={listRef}>
          {children}
        </StyledUL>
      </WrapperUL>
  )
}

