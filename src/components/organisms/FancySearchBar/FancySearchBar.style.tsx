import { CSSProp, styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TLayer } from '@/types/TLayer';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

import { sizeSettings } from './sizeSettings';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TThemeArrayOrValueCSS, arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

// Styled component for the wrapper for the complete component
export const WrapperListInput = styled.div<{ $externalStyle?: CSSProp }>`
  position: relative;
  width: 100%;
  min-height: fit-content;
  ${({ $externalStyle }) => $externalStyle};
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
  $sizeC: TComponentSizes;
  $borderRadius?: TThemeArrayOrValueCSS;
  $themeType: TUiColorsNotTransparent;
  $layer: TLayer;
};
export const Background = styled.div<TWrapperListInput>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: fit-content;
  background-color: ${({ theme, $themeType, $layer }) => getBackgroundColor({ theme, $themeType, $layer })};
  border-radius: ${({ $sizeC, $borderRadius, theme }) =>
    $borderRadius
      ? arrayToCssValues($borderRadius, 'borderRadius')
      : theme.borderRadius[sizeSettings[$sizeC].borderRadius]};
`;
