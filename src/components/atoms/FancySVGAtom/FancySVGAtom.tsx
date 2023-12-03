import React from 'react';

import { ISVGAtomProps } from './FancySVGAtom.model';
import { StyledSVG } from './FancySVGAtom.style';

// --------------------------------------------------------------------------- //
// --------- This is a wrapper for SVGs to wrap them and style them ---------- //
// --------------------------------------------------------------------------- //
export default function FancySVGAtom(props: ISVGAtomProps) {
  const { children, isPassive, size, isActive, errorMessage, externalStyle, themeType, layer, ...htmlProps } = {
    ...defaultProps,
    ...props,
  };

  return (
    <StyledSVG
      $size={size}
      $isPassive={isPassive}
      $isActive={isActive}
      $errorMessage={errorMessage}
      $externalStyle={externalStyle}
      $themeType={themeType}
      $layer={layer}
      {...htmlProps}
    >
      {children}
    </StyledSVG>
  );
}

const defaultProps: ISVGAtomProps = {
  size: 'md',
  isPassive: false,
  isActive: false,
};
