'use client';

import { GridItem } from './FancyGridTemplateItem.style';
import { TFancyGridTemplateItemWithHTMlAttrs } from './TFancyGridTemplateItem.model';

// --------------------------------------------------------------------------- //
// -------- The GridItem Component to fill the grid with the postion --------- //
// --------------------------------------------------------------------------- //
export default function FancyGridTemplateItem(props: TFancyGridTemplateItemWithHTMlAttrs) {
  const { gridArea, externalStyle, children, ...htmlProps } = props;

  return (
    <GridItem $gridArea={gridArea} $externalStyle={externalStyle} {...htmlProps}>
      {children}
    </GridItem>
  );
}
