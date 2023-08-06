import React from 'react';
import styled, { keyframes } from 'styled-components';
import { uiColors } from '../../Design/design';

const spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const reverseSpinner = keyframes`
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
`;

const sizes = {
  small: {
    width: '12px',
    thickness: '2px',
    thickness1: '1.5px',
  },
  medium: {
    width: '24px',
    thickness: '2px',
    thickness1: '1.5px',
  },
  large: {
    width: '48px',
    thickness: '2px',
    thickness1: '1.5px',
  },
};

const SpinnerContainer = styled.div<{ $size?: keyof typeof sizes }>`
  position: relative;
  width: ${({ $size }) => ($size ? sizes[$size].width : sizes.medium.width)};
  height: ${({ $size }) => ($size ? sizes[$size].width : sizes.medium.width)};
  display: flex; // Added Flexbox
  align-items: center; // Center vertically
  justify-content: center; // Center horizontally
`;

const StyledInnerSpinner = styled.div<{ $size?: keyof typeof sizes }>`
  border-top: ${({ $size }) => ($size ? sizes[$size].thickness1 : sizes.medium.thickness1)} solid transparent;
  border-right: ${({ $size }) => ($size ? sizes[$size].thickness1 : sizes.medium.thickness1)} solid ${uiColors.accent.main};
  border-bottom: ${({ $size }) => ($size ? sizes[$size].thickness1 : sizes.medium.thickness1)} solid transparent;
  border-left: ${({ $size }) => ($size ? sizes[$size].thickness1 : sizes.medium.thickness1)} solid ${uiColors.accent.main};
  animation: ${reverseSpinner} 1.4s infinite ease-in-out;
  border-radius: 50%;
  width: 66%; // Reduced to 66%
  height: 66%; // Reduced to 66%
`;

const StyledFancyLoadingSpinner = styled.div<{ $size?: keyof typeof sizes; $thickness?: string }>`
  position: absolute;
  border-top: ${({ $size }) => ($size ? sizes[$size].thickness : sizes.medium.thickness)} solid transparent;
  border-right: ${({ $size }) => ($size ? sizes[$size].thickness : sizes.medium.thickness)} solid ${uiColors.accent.main};
  border-bottom: ${({ $size }) => ($size ? sizes[$size].thickness : sizes.medium.thickness)} solid transparent;
  border-left: ${({ $size }) => ($size ? sizes[$size].thickness : sizes.medium.thickness)} solid ${uiColors.accent.main};
  animation: ${spinner} 1.4s infinite ease-in-out;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

export default function FancyLoadingSpinner() {
  return (
    <>
      <SpinnerContainer $size={'large'}>
        <StyledFancyLoadingSpinner $size={'large'} />
        <StyledInnerSpinner $size={'large'} />
      </SpinnerContainer>
    </>
  );
}
