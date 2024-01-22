import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TComponentSizes } from '@/types/TComponentSizes';
import { sizeSettings } from './sizeSettings';
import { TBorderRadiusSizes } from 'lib';

// Styled component for the entire search bar
export const StyledFancySearchBar = styled.div`
  height: 90%;
  width: 100%;
  max-height: 50px;
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

// Styled component for the wrapper around the search bar list
export const WrapperListInput = styled.div<{ theme: TTheme; size: TComponentSizes; borderRadius?: TBorderRadiusSizes }>`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary[0]};
  border-radius: ${({ size, borderRadius, theme }) =>
    borderRadius ? theme.borderRadius[borderRadius] : theme.borderRadius[sizeSettings[size].borderRadius]};
`;

// Styled component for the search bar list
export const WrapperList = styled.div<{ $width?: string }>`
  width: ${({ $width }) => $width || '100%'}; // Set the width of the search bar list
  z-index: 100;
  height: auto;
  transition: height 0.5s ease-in-out;
`;
