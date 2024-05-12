import { styled, keyframes, CSSProp } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TFancyLoadingBar } from '@/components/atoms/FancyLoadingBar/TFancyLoadingBar.model';

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

export const LoadingContainer = styled.div<{ $externalStyle: CSSProp }>`
  position: relative;
  width: 100%;
  height: 2px;
  overflow: hidden;
  ${({ $externalStyle }) => $externalStyle}
`;

// Define a styled component for the loading bar
type TLoadingBar = TStyledPrefixAndPicker<TFancyLoadingBar, 'layer' | 'themeType'>;
export const LoadingBar = styled.div<TLoadingBar & { theme: TTheme }>`
  position: absolute;
  left: -70%;
  height: 100%;
  width: 70%;
  background-image: linear-gradient(
    90deg,
    transparent,
    ${({ theme, $layer = 0, $themeType = 'accent' }) => theme.color[$themeType][$layer]},
    transparent
  );
  animation: ${loadingAnimation} 3s ease-in-out infinite; // Set the animation duration to 3s
`;
