import React from 'react';
import { styled } from 'styled-components';

import { uiColors } from '../../Design/design';
import { simpleColorTransition } from '../../Design/simpleTransition';

const StyledSwipeUpDash = styled.div`
    width: 50px;
    height: 3px;
    background-color: ${uiColors.secondary.main};
    border-radius: 3px;
`;

const StyledButton = styled.button`
    font-size: lgr;
    font-weight: bold;
    border: none;
    background-color: transparent;
    cursor: pointer;
    ${simpleColorTransition}
    margin-top: 1rem;
    margin-bottom: 1rem;
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
