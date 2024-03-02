import { ElementType } from 'react';

import { TSpacingsContainerWithHTMLAttrs } from '@/components/atoms/SpacingContainer/TSpacingsContainer.model';
import { StyledSpacingsContainer } from '@/components/atoms/SpacingContainer/SpacingContainer.style';

export default function SpacingContainer<T extends ElementType = 'div'>(props: TSpacingsContainerWithHTMLAttrs<T>) {
  const { children, padding, margin, as, externalStyle, ...htmlProps } = props;

  return (
    <StyledSpacingsContainer
      as={as ?? 'div'}
      $padding={padding}
      $margin={margin}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      {children}
    </StyledSpacingsContainer>
  );
}
