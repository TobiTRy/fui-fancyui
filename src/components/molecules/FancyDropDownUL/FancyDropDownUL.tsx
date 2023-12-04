import React, { useEffect, useRef } from 'react';

import { animated, useSpring } from '@react-spring/web';
import { StyledUL, WrapperUL } from './FancyDropDownUL.style';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';
import { TBorderRadiusSizes } from '@/interface/TBorderRadius';

export interface IFancyUL {
  children: React.ReactNode;
  width?: string;
  isOpen?: boolean;
  alignHorizontal?: 'left' | 'center' | 'right';
  alignVertical?: 'top' | 'center' | 'bottom';
  themeType?: TThemeTypes;
  layer?: TLayer;
  $rouned?: TBorderRadiusSizes;
}

// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
export default function FancyDropDownUL({ children, isOpen, themeType, layer, ...styledProps }: IFancyUL) {
  const { width = '50%', alignHorizontal = 'center', alignVertical = 'top' } = styledProps;

  const listRef = useRef<HTMLUListElement>(null);
  const [style, animate] = useSpring(() => ({ height: '0px' }), []);

  // This useEffect hook animates the height of the UL element
  useEffect(() => {
    if (!listRef.current) return;
    animate.start({
      height: (isOpen ? listRef?.current.offsetHeight : 0) + 'px',
    });
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
      <StyledUL ref={listRef} $themeType={themeType} $layer={layer}>
        {children}
      </StyledUL>
    </WrapperUL>
  );
}
