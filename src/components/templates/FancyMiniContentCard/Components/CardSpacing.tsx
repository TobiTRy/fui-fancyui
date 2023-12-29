import { ElementType } from 'react';

import { SpacingsContainer, TSpacingsContainerFullProps } from '@/components/atoms/SpacingContainer';

export default function CardSpacing<T extends ElementType>(props: TSpacingsContainerFullProps<T>) {
  const { children, padding, className, ...htmlProps } = props;

  return (
    <SpacingsContainer className={`content ${className ?? ''}`} padding={padding} {...htmlProps}>
      {children}
    </SpacingsContainer>
  );
}
