import { GridItem } from './FancyGridTemplateItem.style';
import { TGridItem } from './TFancyGridTemplateItem.model';

// --------------------------------------------------------------------------- //
// -------- The GridItem Component to fill the grid with the postion --------- //
// --------------------------------------------------------------------------- //
export default function FancyGridTemplateItem(props: TGridItem) {
  const { gridArea, externalStyle, children } = props;
  return (
    <GridItem $gridArea={gridArea} $externalStyle={externalStyle}>
      {children}
    </GridItem>
  );
}
