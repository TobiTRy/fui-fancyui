import React from 'react';
import { styled } from 'styled-components';

import { simpleColorTransition } from '../../Design/simpleTransition';
import { TUiColorsType } from '../../Design/color/designColor';

const StyledSwipeUpDash = styled.div<{theme: TUiColorsType}>`
    width: 50px;
    height: 3px;
    background-color: ${({theme}) => theme.secondary[0]};
    border-radius: 3px;
`;

const StyledButton = styled.button`
    font-size: lgr;
    font-weight: bold;
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-top: 1rem;
    margin-bottom: 1rem;
    ${simpleColorTransition}
`;

// --------------------------------------------------------------------------- //
// ---- The SwipeUpDash component is a simple horizontal line as Button ------ //
// --------------------------------------------------------------------------- //
export default function SwipeUpDash() {
  return (
    <StyledButton>
      <StyledSwipeUpDash/>
    </StyledButton>
  )
}
