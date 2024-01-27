import { styled } from 'styled-components';

import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
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

type TStyledGridItem = IStyledPrefixAndPicker<TGridItem>;
const GridItem = styled.div<TStyledGridItem>`
  grid-area: ${({ $gridArea }) => $gridArea};
  ${({ $externalStyle }) => $externalStyle};
`;
