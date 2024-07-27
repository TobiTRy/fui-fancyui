'use client';

import React from 'react';

import { FancyFlexBox, TFancyFlexBoxWithDynamicElAttrs } from '@/components/templates/FancyFlexBox';

import { GridItem } from '@/components/templates/FancyGridItem/FancyGridItem.style';
import { TFancyGridItemProps } from '@/components/templates/FancyGridItem/FancyGridItem.model';
import { TDynamicElement } from '@/types/TDynamicElement';

// --------------------------------------------------------------------------- //
// ------------ The FancyGrid Item to get the space for the item - ----------- //
// ------------------------------------------------<--------------------------- //
function FancyGridItem<T extends React.ElementType = 'div'>(props: TFancyGridItemProps & TDynamicElement<T>) {
  const { gridSpace, children, breakpoints, gridColumn, gridRow, as, ...htmlProps } = props;

  return (
    <GridItem
      as={as ?? 'div'}
      $gridSpace={gridSpace}
      $gridColumn={gridColumn}
      $gridRow={gridRow}
      $breakpoints={breakpoints}
      {...htmlProps}
    >
      {children}
    </GridItem>
  );
}

FancyGridItem.FlexBox = (props: TFancyFlexBoxWithDynamicElAttrs) => <FancyFlexBox fitBox={true} {...props} />;

// is needed here for the storybook to work
export default FancyGridItem;
