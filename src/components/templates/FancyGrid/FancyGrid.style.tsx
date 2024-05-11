import { css, styled } from 'styled-components';

import { FancyGridProps } from '@/components/templates/FancyGrid/FancyGrid.model';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

type TFancyGridProps = TStyledPrefixAndOmiter<FancyGridProps>;
export const GridContainer = styled.div<TFancyGridProps & { as: React.ElementType }>`
  display: grid;
  grid-template-columns: repeat(${({ $grid }) => $grid}, 1fr);
  grid-gap: ${({ $gap }) => $gap};
  margin: ${({ $margin }) => arrayToCssValues($margin, 'spacing')};
  padding: ${({ $padding }) => arrayToCssValues($padding, 'spacing')};

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
