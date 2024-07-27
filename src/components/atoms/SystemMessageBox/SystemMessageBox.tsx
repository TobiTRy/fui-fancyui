'use client';

import { StyledStystemMessage } from './SystemMessageBox.style';
import { TSystemMessageBoxWithHTMLAttrs } from './TSystemMessageBox.model';
import { sizes } from './sizeSettings';

export default function SystemMessageBox(props: TSystemMessageBoxWithHTMLAttrs) {
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
}
