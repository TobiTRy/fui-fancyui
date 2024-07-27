'use client';

import { TInputLabelWithNAtiveAttrs } from './TInputLabel.model';
import { StyledInputLabel } from './InputLabel.style';

export default function InputLabel(props: TInputLabelWithNAtiveAttrs) {
  const {
    children,
    isActive,
    systemMessageType,
    themeType,
    layer,
    align,
    lableVariant,
    externalStyle,
    isMovedUp,
    ...htmlProps
  } = props;

  return (
    <StyledInputLabel
      $isActive={isActive}
      $systemMessageType={systemMessageType}
      $themeType={themeType}
      $layer={layer}
      $isMovedUp={isMovedUp}
      $align={align}
      $lableVariant={lableVariant}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      {children}
    </StyledInputLabel>
  );
}
