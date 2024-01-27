import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TLayer } from '@/types/TLayer';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

import { sizeSettings } from './sizeSettings';

// Styled component for the wrapper for the complete component
export const WrapperListInput = styled.div`
  position: relative;
  width: 100%;
  min-height: fit-content;
`;

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

// Styled component for the search bar list
export const WrapperList = styled.div<TWrapperListInput & { $width?: string }>`
  width: ${({ $width }) => $width || '100%'}; // Set the width of the search bar listssss
  height: auto;
  transition: height 0.5s ease-in-out;
`;

type TWrapperListInput = {
  theme: TTheme;
  $size: TComponentSizes;
  $borderRadius?: TBorderRadiusSizes;
  $themeType?: TUiColorsNotTransparent;
  $layer?: TLayer;
};
export const Background = styled.div<TWrapperListInput>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: fit-content;
  background-color: ${({ theme }) => theme.colors.primary[0]};
  border-radius: ${({ $size, $borderRadius, theme }) =>
    $borderRadius ? theme.borderRadius[$borderRadius] : theme.borderRadius[sizeSettings[$size].borderRadius]};
`;
