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
    width: '16px',
    thickness: '1px',
    thicknessInner: '0.5px',
  },
  medium: {
    width: '32px',
    thickness: '1.5px',
    thicknessInner: '1px',
  },
  large: {
    width: '48px',
    thickness: '1.5px',
    thicknessInner: '1px',
  },
};

const SpinnerContainer = styled.div<{ $size?: keyof typeof sizes }>`
  position: relative;
  width: ${({ $size }) => ($size ? sizes[$size].width : sizes.medium.width)};
  height: ${({ $size }) => ($size ? sizes[$size].width : sizes.medium.width)};
  display: flex;
  align-items: center;
  justify-content: center; 
`;

const StyledInnerSpinner = styled.div<{ $size?: keyof typeof sizes }>`
  border-top: ${({ $size }) => ($size ? sizes[$size].thicknessInner : sizes.medium.thicknessInner)} solid transparent;
  border-right: ${({ $size }) => ($size ? sizes[$size].thicknessInner : sizes.medium.thicknessInner)} solid ${uiColors.accent.main};
  border-bottom: ${({ $size }) => ($size ? sizes[$size].thicknessInner : sizes.medium.thicknessInner)} solid transparent;
  border-left: ${({ $size }) => ($size ? sizes[$size].thicknessInner : sizes.medium.thicknessInner)} solid ${uiColors.accent.main};
  animation: ${reverseSpinner} 2s infinite ease-in-out;
  border-radius: 50%;
  width: 80%;
  height: 80%;
`;

const StyledFancyLoadingSpinner = styled.div<{ $size?: keyof typeof sizes; $thickness?: string }>`
  position: absolute;
  border-top: ${({ $size }) => ($size ? sizes[$size].thickness : sizes.medium.thickness)} solid transparent;
  border-right: ${({ $size }) => ($size ? sizes[$size].thickness : sizes.medium.thickness)} solid ${uiColors.accent.main};
  border-bottom: ${({ $size }) => ($size ? sizes[$size].thickness : sizes.medium.thickness)} solid transparent;
  border-left: ${({ $size }) => ($size ? sizes[$size].thickness : sizes.medium.thickness)} solid ${uiColors.accent.main};
  animation: ${spinner} 2s infinite ease-in-out;
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
