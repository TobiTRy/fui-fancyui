import { css, styled } from 'styled-components';

import { FancyGridItemProps } from '@/components/templates/FancyGridItem/FancyGridItem.model';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

type TGirdItemProps = TStyledPrefixAndPicker<FancyGridItemProps, 'gridSpace' | 'breakpoints' | 'externalStyle'>;
export const GridItem = styled.div<TGirdItemProps & { as: React.ElementType }>`
  grid-column: span ${({ $gridSpace }) => $gridSpace};
  min-height: 0;

  // Media Queries basierend auf benutzerdefinierten Breakpoints
  ${({ $breakpoints }) =>
    $breakpoints &&
    $breakpoints.map(
      (breakpoint) => css`
        @media (${breakpoint.breakpoint}) {
          grid-column: span ${breakpoint.gridSize};
        }
      `
    )}
  ${({ $externalStyle }) => $externalStyle}
`;
