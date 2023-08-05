import React from 'react';
import { uiColors } from '../../Design/design';
import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% {
    left: -50%;
  }
  100% {
    left: 100%;
  }
`;

const LoadingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background-color: ${uiColors.secondary.darkest};
  overflow: hidden;
`;

const LoadingBar = styled.div`
  position: absolute;
  left: -40%;
  height: 100%;
  width: 50%;
  background-image: linear-gradient(90deg, transparent, ${uiColors.accent.main}, transparent);
  animation: ${loadingAnimation} 3s ease-in-out infinite; // Animation duration set to 4s
`;


const FancyLoadingBar = () => (
  <LoadingContainer>
    <LoadingBar />
  </LoadingContainer>
);

export default FancyLoadingBar;
