// FancyGrid.tsx
import React from 'react';

import { FancyGridProps } from '@/components/templates/FancyGrid/FancyGrid.model';
import { GridContainer } from '@/components/templates/FancyGrid/FancyGrid.style';
import { TDynamicElementProps } from '@/types/TDynamicElement';
import { FancyGridItem } from '@/components/templates/FancyGrid';

// --------------------------------------------------------------------------- //
// ------- The FancyGrid to allocate the grid and give the items space ------- //
// --------------------------------------------------------------------------- //
function FancyGrid<T extends React.ElementType = 'div'>(props: TDynamicElementProps<T> & FancyGridProps) {
  const { children, grid = 12, gap, as, breakpoints, externalStyle } = props;
  return (
    <GridContainer as={as ?? 'div'} $breakpoints={breakpoints} $externalStyle={externalStyle} $grid={grid} $gap={gap}>
      {children}
    </GridContainer>
  );
}

FancyGrid.Item = FancyGridItem;

export default FancyGrid;
