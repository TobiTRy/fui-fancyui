import React from 'react';

import { SpacingsContainer, TPaddingContainerFullProps } from '@/components/atoms/SpacingContainer';

export default function CardSpacing(props: TPaddingContainerFullProps) {
  const { children, padding, className, ...htmlProps } = props;

  return (
    <SpacingsContainer className={`content ${className ?? ''}`} padding={padding} {...htmlProps}>
      {children}
    </SpacingsContainer>
  );
}
