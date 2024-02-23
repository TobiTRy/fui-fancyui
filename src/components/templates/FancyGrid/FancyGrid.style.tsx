import { css, styled } from 'styled-components';

import { FancyGridProps } from '@/components/templates/FancyGrid/FancyGrid.model';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';

type TFancyGridProps = TStyledPrefixAndOmiter<FancyGridProps>;
export const GridContainer = styled.div<TFancyGridProps & { as: React.ElementType }>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(${(props) => props.$grid}, 1fr);
  grid-gap: ${(props) => props.$gap};
  ${({ $externalStyle }) => $externalStyle}

  ${({ $breakpoints }) =>
    $breakpoints &&
    $breakpoints.map(
      (breakpoint) => css`
        @media (min-width: ${breakpoint.breakpoint}) {
          grid-template-columns: repeat(${breakpoint.gridSize}, 1fr);
          ${breakpoint.gap ? `grid-gap: ${breakpoint.gap};` : ''}
        }
      `
    )}
`;
