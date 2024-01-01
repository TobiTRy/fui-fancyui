import { styled } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TTheme } from '@/types/TTheme';

// Define the styled component for the DateOutputFromTo component
export const StyledDateOutputFromTo = styled.div<{ theme: TTheme; $themeType?: TThemeTypes; $layer?: TLayer }>`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-around;
  align-items: stretch;

  button:nth-child(1) {
    border-radius: 50px 0 0 50px;
    padding: ${({ theme }) => theme.spacing.sm};
  }

  button:nth-child(3) {
    border-radius: 0 50px 50px 0;
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

// Define the styled component for the VRWrapper
export const VRWrapper = styled.div`
  position: absolute;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center; // this center the FancyVR vertically
`;
