import { ElementType } from 'react';

import { TSpacingsContainerWithHTMLAttrs } from '@/components/atoms/FancySpacingBox/TFancySpacingBox.model';
import { StyledSpacingsBox } from '@/components/atoms/FancySpacingBox/FancySpacingBox.style';

export default function FancySpacingBox<T extends ElementType = 'div'>(props: TSpacingsContainerWithHTMLAttrs<T>) {
  const { children, padding, margin, as, externalStyle, ...htmlProps } = props;

  return (
    <StyledSpacingsBox
      as={as ?? 'div'}
      $padding={padding}
      $margin={margin}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      {children}
    </StyledSpacingsBox>
  );
}
