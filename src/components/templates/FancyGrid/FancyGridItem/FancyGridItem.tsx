import React from 'react';

import { CSSProp, css, styled } from 'styled-components';

import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker.model';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { ICustomBreakpoint } from '@/components/templates/FancyGrid/FancyGrid';
import { TFancyFlexBox } from '@/components/templates/FancyFlexBox/FancyFlexBox';

type TDynamicElementProps<T extends React.ElementType> = {
  as?: T;
} & Omit<React.ComponentProps<T>, 'as'>;

type FancyGridItemProps = {
  gridSpace: number;
  children?: React.ReactNode;
  breakpoints?: ICustomBreakpoint[];
  externalStyle?: CSSProp;
};
// --------------------------------------------------------------------------- //
// ------------ The FancyGrid Item to get the space for the item - ----------- //
// --------------------------------------------------------------------------- //
export default function FancyGridItem<T extends React.ElementType = 'div'>(
  props: TDynamicElementProps<T> & FancyGridItemProps
) {
  const { gridSpace, children, breakpoints, as } = props;

  return (
    <GridItem as={as ?? 'div'} $gridSpace={gridSpace} $breakpoints={breakpoints}>
      {children}
    </GridItem>
  );
}

type TGirdItemProps = IStyledPrefixAndPicker<FancyGridItemProps, 'gridSpace' | 'breakpoints' | 'externalStyle'>;
const GridItem = styled.div<TGirdItemProps & { as: React.ElementType }>`
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

FancyGridItem.FlexBox = (props: TFancyFlexBox) => <FancyFlexBox fitBox={true} {...props} />;
