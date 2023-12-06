import { CSSProp, css, keyframes, styled } from 'styled-components';

import { sizes } from './sizeSettings';
import { TTheme } from '@/interface/TTheme';
import { TThemeTypesNotTransparent } from '@/interface//TThemeTypesNotTransparent';
import { TLayer } from '@/interface/TLayer';

// ------------------------------------------------- //
// ------- The helperfunctions for the style ------- //
// ------------------------------------------------- //
// Define a function to generate the border for the spinner
interface IGenerateBorder {
  $size: string;
  theme: TTheme;
  $themeType?: TThemeTypesNotTransparent;
  $layer?: TLayer;
}
const generateBorder = ({ $size, theme, $layer, $themeType = 'accent' }: IGenerateBorder): CSSProp => {
  return css`
    border-top: ${$size} solid transparent;
    border-right: ${$size} solid ${theme.colors[$themeType][$layer || 0]};
    border-bottom: ${$size} solid transparent;
    border-left: ${$size} solid ${theme.colors.accent[$themeType][$layer || 0]};
  `;
};

// Define keyframe animations for the spinner
const spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const reverseSpinner = keyframes`
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
`;

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
// Define a styled component for the spinner container
export const SpinnerContainer = styled.div<{ $size?: keyof typeof sizes }>`
  position: relative;
  width: ${({ $size }) => ($size ? sizes[$size].width : sizes.md.width)};
  height: ${({ $size }) => ($size ? sizes[$size].width : sizes.md.width)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IStyledFancyLoadingSpinner {
  $size: keyof typeof sizes;
  theme: TTheme;
  $themeType?: TThemeTypesNotTransparent;
  $layer?: TLayer;
}
// Define a styled component for the inner spinner
export const StyledInnerSpinner = styled.div<IStyledFancyLoadingSpinner>`
  ${({ $size, theme, $themeType, $layer }) =>
    generateBorder({ $size: $size ? sizes[$size].thicknessInner : sizes.md.thickness, theme, $themeType, $layer })}
  animation: ${reverseSpinner} 2s infinite ease-in-out;
  border-radius: 50%;
  width: 80%;
  aspect-ratio: 1 / 1;
`;

// Define a styled component for the outer spinner
export const StyledFancyLoadingSpinner = styled.div<IStyledFancyLoadingSpinner>`
  ${({ $size, theme, $themeType, $layer }) =>
    generateBorder({ $size: $size ? sizes[$size].thickness : sizes.md.thickness, theme, $themeType, $layer })}
  position: absolute;
  animation: ${spinner} 2s infinite ease-in-out;
  border-radius: 50%;
  width: 100%;
  aspect-ratio: 1 / 1;
`;
