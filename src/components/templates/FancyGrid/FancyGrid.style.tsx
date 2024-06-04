import { css, styled } from 'styled-components';

import { FancyGridProps } from '@/components/templates/FancyGrid/FancyGrid.model';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { getThemeOrValueAsCSS } from '@/design/designFunctions/getThemeOrValueAsCss';

type TFancyGridProps = TStyledPrefixAndOmiter<FancyGridProps>;
export const GridContainer = styled.div<TFancyGridProps & { as: React.ElementType }>`
  display: grid;

  grid-template-columns: ${({ $simpleGrid }) => $simpleGrid && `repeat(${$simpleGrid})`};
  grid-template-rows: ${({ $gridTemplateRows }) => $gridTemplateRows?.join(' ')};
  grid-template-columns: ${({ $gridTemplateColumns }) => $gridTemplateColumns?.join(' ')};
  grid-row-gap: ${({ $rowGap }) => getThemeOrValueAsCSS($rowGap)};
  grid-column-gap: ${({ $columnGap }) => getThemeOrValueAsCSS($columnGap)};

  margin: ${({ $margin }) => arrayToCssValues($margin, 'spacing')};
  padding: ${({ $padding }) => arrayToCssValues($padding, 'spacing')};

  // Breakpoint handling
  /* Responsive Breakpoints */
  ${({ $breakpoints }) =>
    $breakpoints?.map(
      (breakpoint) => css`
        @media (min-width: ${breakpoint.breakpoint}) {
          grid-template-columns: ${breakpoint.gridSize && `repeat(${breakpoint.gridSize})`};
          grid-template-columns: ${breakpoint?.rows?.join(' ')};
          grid-template-rows: ${breakpoint?.rows?.join(' ')};
          grid-row-gap: ${breakpoint.rowGap};
          grid-column-gap: ${breakpoint.columnGap};
        }
      `
    )}

  ${({ $externalStyle }) => $externalStyle}; // Apply external styles if providedƒ
`;
