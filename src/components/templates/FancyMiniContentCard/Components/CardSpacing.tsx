import { ElementType } from 'react';

import { TSpacingsContainerFullProps } from '@/components/atoms/SpacingContainer';
import { FancyAlignBox } from '@/components/templates/FancyAlignBox';

export default function CardSpacing<T extends ElementType>(props: TSpacingsContainerFullProps<T>) {
  const { children, padding, className, ...htmlProps } = props;

  return (
    <FancyAlignBox className={`content ${className ?? ''}`} padding={padding} {...htmlProps}>
      {children}
    </FancyAlignBox>
  );
}
