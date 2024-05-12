import { ElementType } from 'react';

import { TFancySpacingBoxWithHTMLAttrs } from '@/components/atoms/FancySpacingBox';
import { FancyAlignBox } from '@/components/templates/FancyAlignBox';

export default function CardSpacing<T extends ElementType>(props: TFancySpacingBoxWithHTMLAttrs<T>) {
  const { children, padding, className, ...htmlProps } = props;

  return (
    <FancyAlignBox className={`content ${className ?? ''}`} padding={padding} {...htmlProps}>
      {children}
    </FancyAlignBox>
  );
}
