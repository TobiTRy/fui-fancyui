import React from 'react';

import styled, { keyframes } from 'styled-components';
import { uiColors } from '../../Design/design';

const spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const sizes = {
  small: {
    width: '12px',
    thickness: '2px',
  },
  medium: {
    width: '24px',
    thickness: '2px',
  },
  large: {
    width: '48px',
    thickness: '2px',
  },
};

const StyledFancyLoadingSpinner = styled.div<{ $size?: keyof typeof sizes; $thickness?: string }>`
  position: relative;
  border-top: ${({ $size }) => ($size ? sizes[$size].thickness : sizes.medium.thickness)} solid ${uiColors.secondary.darkest};
  border-right: ${({ $size }) => ($size ? sizes[$size].thickness : sizes.medium.thickness)} solid ${uiColors.accent.main};
  border-bottom: ${({ $size }) => ($size ? sizes[$size].thickness : sizes.medium.thickness)} solid ${uiColors.secondary.darkest};
  border-left: ${({ $size }) => ($size ? sizes[$size].thickness : sizes.medium.thickness)} solid ${uiColors.accent.main};
  animation: ${spinner} 1.4s infinite ease-in-out;

  &,
  &:after {
    border-radius: 50%;
    width: ${({ $size }) => ($size ? sizes[$size].width : sizes.medium.width)};
    aspect-ratio: 1/1;
  }
`;

export default function FancyLoadingSpinner() {
  return (
    <>
      <StyledFancyLoadingSpinner $size={'large'} />
    </>
  );
}
