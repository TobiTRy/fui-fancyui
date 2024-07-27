'use client';

import { StyledAlignedLabel } from './AlignedLabel.style';
import { Typography } from '@/components/atoms/Typography';

import { TAlignedLabelWithAllProps } from './TAlinedLabel.model';

import { sizeSettings } from './sizeSettings';

// --------------------------------------------------------------------------- //
// ---------- The label handles alignment and typography  -------------------- //
// --------------------------------------------------------------------------- //
export default function AlignedLabel(props: TAlignedLabelWithAllProps) {
  const {
    children,
    size = 'md',
    ownTypographyComponent,
    typography,
    align,
    systemMessageType,
    themeType,
    layer,
  } = props;

  return (
    <StyledAlignedLabel $align={align} $themeType={themeType} $systemMessageType={systemMessageType} $layer={layer}>
      {!ownTypographyComponent && (
        <Typography
          variant={sizeSettings[size].fontSize}
          elType="span"
          themeType={themeType}
          layer={layer}
          {...typography}
        >
          {children}
        </Typography>
      )}
      {/* when you want a owm typorgraphy component */}
      {ownTypographyComponent && children}
    </StyledAlignedLabel>
  );
}
