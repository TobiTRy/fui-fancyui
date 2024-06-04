// FancyGrid.tsx
import React from 'react';

import { FancyGridProps } from '@/components/templates/FancyGrid/FancyGrid.model';
import { GridContainer } from '@/components/templates/FancyGrid/FancyGrid.style';
import { TDynamicElement } from '@/types/TDynamicElement';
import { FancyGridItem } from '@/components/templates/FancyGridItem';

// --------------------------------------------------------------------------- //
// ------- The FancyGrid to allocate the grid and give the items space ------- //
// --------------------------------------------------------------------------- //
function FancyGrid<T extends React.ElementType = 'div'>(props: TDynamicElement<T> & FancyGridProps) {
  const {
    children,
    simpleGrid,
    gap,
    as,
    breakpoints,
    margin,
    padding,
    externalStyle,
    gridTemplateColumns,
    gridTemplateRows,
    rowGap,
    columnGap,
    ...htmlProps
  } = props;

  return (
    <GridContainer
      as={as ?? 'div'}
      $breakpoints={breakpoints}
      $margin={margin}
      $padding={padding}
      $externalStyle={externalStyle}
      $simplesimpleGrid={simpleGrid}
      $gridTemplateColumns={gridTemplateColumns}
      $gridTemplateRows={gridTemplateRows}
      $gridRowGap={rowGap}
      $gridColumnGap={columnGap}
      $gap={gap}
      {...htmlProps}
    >
      {children}
    </GridContainer>
  );
}

FancyGrid.Item = FancyGridItem;

export default FancyGrid;
