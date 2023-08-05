import React from 'react'

import styled, { keyframes } from 'styled-components';
import { uiColors } from '../../Design/design';

const spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledFancyLoadingSpinner = styled.div<{$size?: string, $thickness?: string}>`
  border-top:  ${({$thickness}) => $thickness || '0.6em'} solid ${uiColors.secondary.darkest};
  border-right: ${({$thickness}) => $thickness || '0.6em'} solid ${uiColors.secondary.darkest};
  border-bottom: ${({$thickness}) => $thickness || '0.6em'} solid ${uiColors.secondary.darkest};
  border-left: ${({$thickness}) => $thickness || '0.6em'} solid ${uiColors.accent.main};
  animation: ${spinner} 1.1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: ${({$size}) => $size || '3em' };
    aspect-ratio: 1/1;
  }
`;



export default function FancyLoadingSpinner() {
  return (
    <div>
      <StyledFancyLoadingSpinner $thickness='2px' $size='3rem'/>
    </div>
  )
}
