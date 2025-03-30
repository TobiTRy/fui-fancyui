'use client';

import { ElementType } from 'react';

import { TFancySpacingBoxWithHTMLAttrs } from './TFancySpacingBox.model';
import { StyledSpacingsBox } from '@/components/atoms/FancySpacingBox/FancySpacingBox.style';

export default function FancySpacingBox<T extends ElementType = 'div'>(props: TFancySpacingBoxWithHTMLAttrs<T>) {
  const { children, padding, margin, as, externalStyle, height, width, ...htmlProps } = props;

  return (
    <StyledSpacingsBox
      as={as ?? 'div'}
      $padding={padding}
      $margin={margin}
      $height={height}
      $width={width}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      {children}
    </StyledSpacingsBox>
  );
}
