import { ElementType } from 'react';

import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { SpacingsContainer } from '@/components/atoms/SpacingContainer';

import { TFancyAlignBox } from './TFancyAlignBox.model';

export default function FancyAlignBox<T extends ElementType>(props: TFancyAlignBox<T>) {
  const { justify, align, direction, gap, padding, margin, externalStyle, children, as = 'div' } = props;
  return (
    <SpacingsContainer as={as} padding={padding} margin={margin}>
      <FancyFlexBox as={as} justify={justify} align={align} direction={direction} gap={gap}>
        {children}
      </FancyFlexBox>
    </SpacingsContainer>
  );
}
