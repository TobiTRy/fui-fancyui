import React from 'react';

import { IcalcIconPaddingAsProps } from '../../HelperFunctions/designFunctions/generateIconMargin';
import { styled } from 'styled-components';
import IStyledPrefixAndOmiter from '../../Interface/IStyledPrefixAndOmiter.model';

type StyledFancyLi = IStyledPrefixAndOmiter<IFancyLi, 'children'>;

const FancyLiItem = styled.li<StyledFancyLi>`
  list-style: none;
  display: flex;
  align-items: self-start;
  width: 100%;
`;


interface FancyLIProps {
  children?: React.ReactNode;
}
export type IFancyLi = FancyLIProps & IcalcIconPaddingAsProps;
// --------------------------------------------------------------------------- //
// ------------- The fancy LI Item that can dynamicly adjusted --------------- //
// --------------------------------------------------------------------------- //
export default function FancyLI(props: IFancyLi) {
  const { children, size, aligned } = {...defaultProps, ...props};

  return (
    <FancyLiItem $size={size} $aligned={aligned}>
      {children}
    </FancyLiItem>
  );
}

const defaultProps:IFancyLi = {
  size: 'md',
  aligned: 'left',
};
