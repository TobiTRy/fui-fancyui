// FancyGrid.tsx
import React from 'react';
import { CSSProp, styled } from 'styled-components';

import FancyGridItem from './FancyGridItem/FancyGridItem';
import IStyledPrefixAndOmitter from '@/interface/IStyledPrefixAndOmiter.model';


export interface ICustomBreakpoint {
  breakpoint: string; // Breakpoint-Größe, z.B. '768px'
  gridSize: number; // Anzahl der Spalten für diesen Breakpoint
  gap?: string; // Optional: Angepasster Gap für diesen Breakpoint
}

interface FancyGridProps {
  grid?: number;
  gap?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
  externalStyle?: CSSProp;
  breakpoints?: ICustomBreakpoint[];
}
// --------------------------------------------------------------------------- //
// ------- The FancyGrid to allocate the grid and give the items space ------- //
// --------------------------------------------------------------------------- //
function FancyGrid(props: FancyGridProps) {
  const { children, grid = 12, gap, breakpoints, externalStyle } = props;
  return (
    <GridContainer as={props.as} $breakpoints={breakpoints} externalStyle={externalStyle} $grid={grid} $gap={gap}>
      {children}
    </GridContainer>
  );
}

FancyGrid.Item = FancyGridItem;

export default FancyGrid;

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
const GridContainer = styled.div<
  IStyledPrefixAndOmitter<FancyGridProps, 'children' | 'as'> & { as?: React.ElementType }
>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(${(props) => props.$grid}, 1fr);
  grid-gap: ${(props) => props.$gap};
  ${({ $externalStyle }) => $externalStyle}

  ${({ $breakpoints }) =>
  $breakpoints &&
  $breakpoints.map(
    (breakpoint) => `
      @media (min-width: ${breakpoint.breakpoint}) {
        grid-template-columns: repeat(${breakpoint.gridSize}, 1fr);
        ${breakpoint.gap ? `grid-gap: ${breakpoint.gap};` : ''}
      }
    `
  )}
`;
