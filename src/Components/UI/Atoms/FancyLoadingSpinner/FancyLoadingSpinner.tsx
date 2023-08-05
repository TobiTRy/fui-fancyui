import React from 'react'

import styled, { keyframes } from 'styled-components';
import { uiColors } from '../../Design/design';

const spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledFancyLoadingSpinner = styled.div`
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.6em solid ${uiColors.secondary.darkest};
  border-right: 0.6em solid ${uiColors.secondary.darkest};
  border-bottom: 0.6em solid ${uiColors.secondary.darkest};
  border-left: 0.6em solid ${uiColors.accent.main};
  transform: translateZ(0);
  animation: ${spinner} 1.1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: 3em;
    height: 3em;
  }
`;



export default function FancyLoadingSpinner() {
  return (
    <div>
      <StyledFancyLoadingSpinner />
    </div>
  )
}
