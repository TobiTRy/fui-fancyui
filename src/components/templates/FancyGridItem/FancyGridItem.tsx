import React from 'react';

import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { TFancyFlexBox } from '@/components/templates/FancyFlexBox/FancyFlexBox';
import { FancyGridItemProps } from '@/components/templates/FancyGridItem/FancyGridItem.model';
import { GridItem } from '@/components/templates/FancyGridItem/FancyGridItem.style';
import { TDynamicElementProps } from '@/types/TDynamicElement';

// --------------------------------------------------------------------------- //
// ------------ The FancyGrid Item to get the space for the item - ----------- //
// --------------------------------------------------------------------------- //
function FancyGridItem<T extends React.ElementType = 'div'>(props: TDynamicElementProps<T> & FancyGridItemProps) {
  const { gridSpace, children, breakpoints, as } = props;

  return (
    <GridItem as={as ?? 'div'} $gridSpace={gridSpace} $breakpoints={breakpoints}>
      {children}
    </GridItem>
  );
}
FancyGridItem.FlexBox = (props: TFancyFlexBox) => <FancyFlexBox fitBox={true} {...props} />;

// is needed here for the storybook to work
export default FancyGridItem;
