import React from 'react';
import { styled, keyframes, css, CSSProp } from 'styled-components';

import { TTheme } from '@/components/core/interface/TTheme';

// Define keyframe animations for the spinner
const spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const reverseSpinner = keyframes`
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
`;

// Define size options for the spinner
const sizes = {
  sm: {
    width: '16px',
    thickness: '1px',
    thicknessInner: '0.5px',
  },
  md: {
    width: '32px',
    thickness: '1.5px',
    thicknessInner: '1px',
  },
  lg: {
    width: '48px',
    thickness: '1.5px',
    thicknessInner: '1px',
  },
  xl: {
    width: '64px',
    thickness: '2px',
    thicknessInner: '1.5px',
  },
  xxl: {
    width: '96px',
    thickness: '2px',
    thicknessInner: '1.5px',
  },
  xxxl: {
    width: '128px',
    thickness: '2px',
    thicknessInner: '1.5px',
  },
};

// Define a styled component for the spinner container
const SpinnerContainer = styled.div<{ $size?: keyof typeof sizes }>`
  position: relative;
  width: ${({ $size }) => ($size ? sizes[$size].width : sizes.md.width)};
  height: ${({ $size }) => ($size ? sizes[$size].width : sizes.md.width)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Define a function to generate the border for the spinner
const generateBorder = (size: string, theme: TTheme): CSSProp => {
  return css`
    border-top: ${size} solid transparent;
    border-right: ${size} solid ${theme.colors.accent[0]};
    border-bottom: ${size} solid transparent;
    border-left: ${size} solid ${theme.colors.accent[0]};
  `;
};

// Define a styled component for the inner spinner
const StyledInnerSpinner = styled.div<{ $size?: keyof typeof sizes; theme: TTheme }>`
  ${({ $size, theme }) => generateBorder($size ? sizes[$size].thicknessInner : sizes.md.thickness, theme)}
  animation: ${reverseSpinner} 2s infinite ease-in-out;
  border-radius: 50%;
  width: 80%;
  aspect-ratio: 1 / 1;
`;

// Define a styled component for the outer spinner
const StyledFancyLoadingSpinner = styled.div<{ $size?: keyof typeof sizes; $thickness?: string; theme: TTheme }>`
  ${({ $size, theme }) => generateBorder($size ? sizes[$size].thickness : sizes.md.thickness, theme)}
  position: absolute;
  animation: ${spinner} 2s infinite ease-in-out;
  border-radius: 50%;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

// Define the props for the FancyLoadingSpinner component
// --------------------------------------------------------------------------- //
// ------------------ A Loadingspinner with different sizes ------------------ //
// --------------------------------------------------------------------------- //
interface IFancyLoadingSpinner {
  size?: keyof typeof sizes;
}
export default function FancyLoadingSpinner({ size = 'md' }: IFancyLoadingSpinner) {
  return (
    <SpinnerContainer $size={size}>
      <StyledFancyLoadingSpinner $size={size} />
      <StyledInnerSpinner $size={size} />
    </SpinnerContainer>
  );
}
