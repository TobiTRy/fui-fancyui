import { ElementType } from 'react';

import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { SpacingsContainer } from '@/components/atoms/FancySpacingBox';

import { TFancyAlignBox } from './TFancyAlignBox.model';

export default function FancyAlignBox<T extends ElementType>(props: TFancyAlignBox<T>) {
  const {
    justify,
    align,
    direction,
    gap,
    padding,
    margin,
    externalStyle,
    children,
    as = 'div',
    separator,
    ...htmlProps
  } = props;

  return (
    <SpacingsContainer as={as} padding={padding} margin={margin} externalStyle={externalStyle} {...htmlProps}>
      <FancyFlexBox
        as={as}
        justify={justify}
        align={align}
        direction={direction ?? 'column'}
        gap={gap}
        separator={separator}
      >
        {children}
      </FancyFlexBox>
    </SpacingsContainer>
  );
}
