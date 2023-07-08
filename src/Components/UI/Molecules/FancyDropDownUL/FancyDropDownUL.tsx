import React, { useEffect, useRef } from 'react';

import { animated, useSpring } from '@react-spring/web';
import { StyledUL, WrapperUL } from './FancyDropDownUL.style';


export interface IFancyUL {
  items: React.ReactNode[];
  width?: string;
  isOpen?: boolean;
  alignHorizontal?: 'left' | 'center' | 'right';
  alignVertical?: 'top' | 'center' | 'bottom';
}

// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
export default function FancyUL({ items, isOpen, ...styledProps }: IFancyUL) {
  const { width = '50%', alignHorizontal = 'center', alignVertical = 'top' } = styledProps;
  const ulRef = useRef<HTMLUListElement>(null);
  const [style, animate] = useSpring(() => ({ height: '0px' }), []);

  // This useEffect hook animates the height of the UL element
  useEffect(() => {
    if (!ulRef.current) return;
    animate({
      height: (isOpen ? ulRef?.current.offsetHeight : 0) + 'px',
    })
  }, [animate, ulRef, isOpen]);

  return (
      <WrapperUL
        as={animated.div}
        $width={width}
        $alignHorizontal={alignHorizontal}
        $alignVertical={alignVertical} 
        style={{
          width: '100%',
          ...style,
        }}
      >
        <StyledUL ref={ulRef}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </StyledUL>
      </WrapperUL>
  )
}

