'use client';

import { forwardRef } from 'react';

import { StyledStystemMessage } from './SystemMessageBox.style';
import { TSystemMessageBoxWithHTMLAttrs } from './TSystemMessageBox.model';
import { sizes } from './sizeSettings';

const SystemMessageBox = forwardRef<HTMLDivElement, TSystemMessageBoxWithHTMLAttrs>((props, ref) => {
  const {
    children,
    layer,
    sizeC = 'sm',
    themeType = 'error',
    padding,
    borderRadius,
    margin,
    externalStyle,
    role,
  } = props;

  const calcBorderRadius = borderRadius ? borderRadius : sizeC ? sizes[sizeC].borderRadius : undefined;
  const calcPadding = padding ? padding : sizeC ? sizes[sizeC].padding : undefined;

  return (
    <StyledStystemMessage
      ref={ref}
      role={role ?? 'alert'}
      $padding={calcPadding}
      $margin={margin}
      $borderRadius={calcBorderRadius}
      $layer={layer}
      $themeType={themeType}
      $externalStyle={externalStyle}
    >
      {children}
    </StyledStystemMessage>
  );
});

SystemMessageBox.displayName = 'SystemMessageBox';

export default SystemMessageBox;
