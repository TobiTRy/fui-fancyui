import { styled } from 'styled-components';

import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker.model';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';

type FancyGridItemProps = {
  gridSpace: number;
  children?: React.ReactNode;
} & React.ComponentProps<typeof FancyFlexBox>;

// --------------------------------------------------------------------------- //
// ------------ The FancyGrid Item to get the space for the item - ----------- //
// --------------------------------------------------------------------------- //
export default function FancyGridItem(props: FancyGridItemProps) {
  const { gridSpace, children, ...flexBoxProps } = props;

  return (
    <GridItem $gridSpace={gridSpace}>
      <FancyFlexBox {...flexBoxProps} externalStyle={{ height: '100%' }}>
        {children}
      </FancyFlexBox>
    </GridItem>
  );
}

type TGirdItemProps = IStyledPrefixAndPicker<FancyGridItemProps, 'gridSpace'>;
const GridItem = styled.div<TGirdItemProps>`
  grid-column: span ${({ $gridSpace }) => $gridSpace};
  overflow: hidden;
`;
