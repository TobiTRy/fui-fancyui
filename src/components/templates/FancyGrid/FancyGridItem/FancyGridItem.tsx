import { styled } from 'styled-components';

import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker.model';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { ICustomBreakpoint } from '@/components/templates/FancyGrid/FancyGrid';


type FancyGridItemProps = {
  gridSpace: number;
  children?: React.ReactNode;
  breakpoints?: ICustomBreakpoint[];
} & React.ComponentProps<typeof FancyFlexBox>;
// --------------------------------------------------------------------------- //
// ------------ The FancyGrid Item to get the space for the item - ----------- //
// --------------------------------------------------------------------------- //
export default function FancyGridItem(props: FancyGridItemProps) {
  const { gridSpace, children, breakpoints,...flexBoxProps } = props;

  return (
    <GridItem $gridSpace={gridSpace} $breakpoints={breakpoints}>
      <FancyFlexBox {...flexBoxProps} externalStyle={{ height: '100%' }}>
        {children}
      </FancyFlexBox>
    </GridItem>
  );
}

type TGirdItemProps = IStyledPrefixAndPicker<FancyGridItemProps, 'gridSpace' | 'breakpoints'>;
const GridItem = styled.div<TGirdItemProps>`
  grid-column: span ${({ $gridSpace }) => $gridSpace};
  overflow: hidden;

  // Media Queries basierend auf benutzerdefinierten Breakpoints
  ${({ $breakpoints }) =>
    $breakpoints &&
    $breakpoints.map(
      (breakpoint) => `
        @media (min-width: ${breakpoint.breakpoint}) {
          grid-column: span ${breakpoint.gridSize};
        }
      `
    )}
`;
