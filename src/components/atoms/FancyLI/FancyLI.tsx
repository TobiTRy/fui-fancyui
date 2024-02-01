import React from 'react';
import { styled } from 'styled-components';

import IStyledPrefixAndOmiter from '@/types/IStyledPrefixAndOmiter';
import { TSpacings } from '@/types/TSpacings';
import { TTheme } from '@/types/TTheme';

type TFancyLIProps = {
  aligned?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
  sizeC?: TSpacings;
} & React.HTMLAttributes<HTMLLIElement>;
// --------------------------------------------------------------------------- //
// ------------- The fancy LI Item that can dynamicly adjusted --------------- //
// --------------------------------------------------------------------------- //
export default function FancyLI(props: TFancyLIProps) {
  const { children, sizeC, aligned, ...htmlProps } = { ...defaultProps, ...props };

  return (
    <FancyLiItem $sizeC={sizeC} $aligned={aligned} {...htmlProps}>
      {children}
    </FancyLiItem>
  );
}

const defaultProps = {
  sizeC: 'md' as const,
  aligned: 'left' as const,
};

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
type StyledFancyLi = IStyledPrefixAndOmiter<TFancyLIProps, 'children'> & { theme: TTheme };
const FancyLiItem = styled.li<StyledFancyLi>`
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${({ $aligned }) => $aligned};
  padding: ${({ theme, $sizeC }) => $sizeC && theme.spacing[$sizeC]};
`;
