import React from 'react'
import styled, { CSSProp } from 'styled-components'

type TAlign = 'center' | 'left' | 'right';

const StyledSlot = styled.div<{$align?: TAlign, $grow?: number, $extenalStyle?: CSSProp}>`
  display: flex;
  position: relative;
  box-sizing: border-box;
  justify-content: ${({$align}) => {
    if ($align === 'center') return 'center';
    if ($align === 'left') return 'flex-start';
    if ($align === 'right') return 'flex-end';
    return 'flex-start';
  }};
  flex-grow: ${({$grow = 1}) => $grow};
  align-items: center;

  ${({$extenalStyle}) => $extenalStyle ? $extenalStyle : ''}
`;

// --------------------------------------------------------------------------- //
// ------  A simple Slot component wich can use to position a component ------ //
// --------------------------------------------------------------------------- //
export interface ISlot {
  children?: React.ReactNode;
  align?: TAlign;
  grow?: number;
  externalStyle?: CSSProp;
}
export default function Slot(props: ISlot) {
  const { children, align, grow, externalStyle } = props;

  return (
    <StyledSlot $extenalStyle={externalStyle} $align={align} $grow={grow}>{children}</StyledSlot>
  )
}

