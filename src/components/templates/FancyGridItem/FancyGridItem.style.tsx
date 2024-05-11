import { css, styled } from 'styled-components';

import { TFancyGridItemProps } from '@/components/templates/FancyGridItem/FancyGridItem.model';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

type TGirdItemProps = TStyledPrefixAndPicker<
  TFancyGridItemProps,
  'gridSpace' | 'breakpoints' | 'externalStyle' | 'gridColumn' | 'gridRow'
>;
export const GridItem = styled.div<TGirdItemProps>`
  ${({ $gridSpace, $gridColumn }) =>
    $gridSpace ? `grid-column: span ${$gridSpace};` : $gridColumn ? `grid-column: ${$gridColumn};` : ''}

  ${({ $gridRow }) => ($gridRow ? `grid-row: ${$gridRow};` : '')}
  min-height: 0;

  ${({ $breakpoints }) =>
    $breakpoints &&
    $breakpoints.map(
      (breakpoint) => css`
        @media (${breakpoint.breakpoint}) {
          ${breakpoint.gridSize ? `grid-column: span ${breakpoint.gridSize};` : ''}
        }
      `
    )}
  ${({ $externalStyle }) => $externalStyle}
`;
