import { GridItem } from './FancyGridTemplateItem.style';
import { TFancyGridTemplateItem } from './TFancyGridTemplateItem.model';

// --------------------------------------------------------------------------- //
// -------- The GridItem Component to fill the grid with the postion --------- //
// --------------------------------------------------------------------------- //
export default function FancyGridTemplateItem(props: TFancyGridTemplateItem) {
  const { gridArea, externalStyle, children, ...htmlProps } = props;
  return (
    <GridItem $gridArea={gridArea} $externalStyle={externalStyle} {...htmlProps}>
      {children}
    </GridItem>
  );
}
