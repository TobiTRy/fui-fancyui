import React from 'react';
import { styled } from 'styled-components';

import IStyledPrefixAndOmiter from '../../../interface/IStyledPrefixAndOmiter.model';
import { spacingPx } from '../../../design/theme/designSizes';
import { TSpacings } from '../../../interface/TSpacings';

type StyledFancyLi = IStyledPrefixAndOmiter<FancyLIProps, 'children'>;

const FancyLiItem = styled.li<StyledFancyLi>`
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${({ $aligned }) => $aligned};
  padding: ${({ $size }) => $size && spacingPx[$size]};
`;

interface FancyLIProps {
  aligned?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
  size?: TSpacings;
}
// --------------------------------------------------------------------------- //
// ------------- The fancy LI Item that can dynamicly adjusted --------------- //
// --------------------------------------------------------------------------- //
export default function FancyLI(props: FancyLIProps) {
  const { children, size, aligned } = { ...defaultProps, ...props };

  return (
    <FancyLiItem $size={size} $aligned={aligned}>
      {children}
    </FancyLiItem>
  );
}

const defaultProps: FancyLIProps = {
  size: 'md',
  aligned: 'left',
};
