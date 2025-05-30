'use client';

import { StyledDisabledBox } from './DisabledBox.style';
import { TDisabledBoxProps } from './TDisabled.model';

export default function DisabledBox(props: TDisabledBoxProps) {
  const { disabled, pointerEvents, children, ...rest } = props;

  return (
    <StyledDisabledBox $disabled={disabled} $pointerEvents={pointerEvents} {...rest}>
      {children}
    </StyledDisabledBox>
  );
}
