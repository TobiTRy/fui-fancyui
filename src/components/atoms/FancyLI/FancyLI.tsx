import React from 'react';
import { styled } from 'styled-components';

import IStyledPrefixAndOmiter from '@/interface/IStyledPrefixAndOmiter';
import { TSpacings } from '@/interface/TSpacings';
import { TTheme } from '@/interface/TTheme';

type TFancyLIProps = {
  aligned?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
  size?: TSpacings;
} & React.HTMLAttributes<HTMLLIElement>;
// --------------------------------------------------------------------------- //
// ------------- The fancy LI Item that can dynamicly adjusted --------------- //
// --------------------------------------------------------------------------- //
export default function FancyLI(props: TFancyLIProps) {
  const { children, size, aligned, ...htmlProps } = { ...defaultProps, ...props };

  return (
    <FancyLiItem $size={size} $aligned={aligned} {...htmlProps}>
      {children}
    </FancyLiItem>
  );
}

const defaultProps = {
  size: 'md' as const,
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
  padding: ${({ theme, $size }) => $size && theme.spacing[$size]};
`;
