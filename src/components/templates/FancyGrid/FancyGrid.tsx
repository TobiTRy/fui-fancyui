// FancyGrid.tsx
import React from 'react';
import { CSSProp, css, styled } from 'styled-components';

import FancyGridItem from './FancyGridItem/FancyGridItem';
import IStyledPrefixAndOmitter from '@/types/IStyledPrefixAndOmiter';

export interface ICustomBreakpoint {
  breakpoint: string; // Breakpoint-Größe, z.B. '768px'
  gridSize: number; // Anzahl der Spalten für diesen Breakpoint
  gap?: string; // Optional: Angepasster Gap für diesen Breakpoint
}

type TDynamicElementProps<T extends React.ElementType> = {
  as?: T;
} & Omit<React.ComponentProps<T>, 'as'>;

interface FancyGridProps {
  grid?: number;
  gap?: string;
  children?: React.ReactNode;
  externalStyle?: CSSProp;
  breakpoints?: ICustomBreakpoint[];
}
// --------------------------------------------------------------------------- //
// ------- The FancyGrid to allocate the grid and give the items space ------- //
// --------------------------------------------------------------------------- //
function FancyGrid<T extends React.ElementType = 'div'>(props: TDynamicElementProps<T> & FancyGridProps) {
  const { children, grid = 12, gap, as, breakpoints, externalStyle } = props;
  return (
    <GridContainer as={as ?? 'div'} $breakpoints={breakpoints} $externalStyle={externalStyle} $grid={grid} $gap={gap}>
      {children}
    </GridContainer>
  );
}

FancyGrid.Item = FancyGridItem;

export default FancyGrid;

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //

type TFancyGridProps = IStyledPrefixAndOmitter<FancyGridProps>;
const GridContainer = styled.div<TFancyGridProps & { as: React.ElementType }>`
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
