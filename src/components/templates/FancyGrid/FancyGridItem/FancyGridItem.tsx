import { styled } from 'styled-components';
import IStyledPrefixAndPicker from '../../../../interface/IStyledPrefixAndPicker.model';

interface FancyGridItemProps {
  gridSpace: number;
  children?: React.ReactNode;
}

type TGirdItemProps = IStyledPrefixAndPicker<FancyGridItemProps, 'gridSpace'>;
const GridItem = styled.div<TGirdItemProps>`
  grid-column: span ${({ $gridSpace }) => $gridSpace};
`;

// --------------------------------------------------------------------------- //
// ------------ The FancyGrid Item to get the space for the item - ----------- //
// --------------------------------------------------------------------------- //
export default function FancyGridItem({ children, gridSpace }: FancyGridItemProps) {
  return <GridItem $gridSpace={gridSpace}>{children}</GridItem>;
}
