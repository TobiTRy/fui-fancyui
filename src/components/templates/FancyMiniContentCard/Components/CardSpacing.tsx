import { ElementType } from 'react';

import { SpacingsContainer, TPaddingContainerFullProps } from '@/components/atoms/SpacingContainer';

export default function CardSpacing<T extends ElementType>(props: TPaddingContainerFullProps<T>) {
  const { children, padding, className, ...htmlProps } = props;

  return (
    <SpacingsContainer className={`content ${className ?? ''}`} padding={padding} {...htmlProps}>
      {children}
    </SpacingsContainer>
  );
}
