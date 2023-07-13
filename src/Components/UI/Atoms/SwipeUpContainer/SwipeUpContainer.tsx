import React from 'react';
import styled from 'styled-components';

import { uiColors } from '../../Design/design';
import { borderRadius } from '../../Design/design';

const StyledSwipeUpContainer = styled.div`
  width: 100%;
  max-height: 90%;
  border-radius: ${borderRadius.xxxl} ${borderRadius.xxxl} 0 0;
  position: sticky;
  top: 0;
  box-shadow: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${uiColors.primary.dark};
  z-index: 101;
  box-shadow: 1px 0px 23px #000000e3;
  backdrop-filter: blur(4px);
`;

// --------------------------------------------------------------------------- //
// ----------- The Modal Atom the displays a simple Mobile Modal ------------- //
// --------------------------------------------------------------------------- //
interface ISwipeUpContainer {
  children: React.ReactNode;
  style?: { height: string };
}
export default function SwipeUpContainer({ children, style }: ISwipeUpContainer) {
  return <StyledSwipeUpContainer style={style}>{children}</StyledSwipeUpContainer>;
}
