import React from 'react';
import { styled, keyframes } from 'styled-components';

import { TUiColorsType } from '../../Design/color/designColor';

// Define keyframe animation for the loading bar
const loadingAnimation = keyframes`
  0% {
    left: -70%;
  }
  100% {
    left: 100%;
  }
`;

// Define a styled component for the loading container
const LoadingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  overflow: hidden;
`;

// Define a styled component for the loading bar
const LoadingBar = styled.div<{theme: TUiColorsType}>`
  position: absolute;
  left: -70%;
  height: 100%;
  width: 70%;
  background-image: linear-gradient(90deg, transparent, ${({theme}) => theme.colors.accent[0]}, transparent);
  animation: ${loadingAnimation} 3s ease-in-out infinite; // Set the animation duration to 3s
`;

// ----------------------------------------------------- //
// ------------------ A Loadingbar --------------------- //
// ----------------------------------------------------- //
export default function FancyLoadingBar() {
  return (
    <LoadingContainer>
      <LoadingBar />
    </LoadingContainer>
  );
}
