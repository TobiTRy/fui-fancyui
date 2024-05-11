import { CSSProp, css, keyframes, styled } from 'styled-components';

import { sizes } from './sizeSettings';
import { TTheme } from '@/types/TTheme';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TLayer } from '@/types/TLayer';

// ------------------------------------------------- //
// ------- The helperfunctions for the style ------- //
// ------------------------------------------------- //
// Define a function to generate the border for the spinner
interface IGenerateBorder {
  $sizeC: string;
  theme: TTheme;
  $themeType?: TUiColorsNotTransparent;
  $layer?: TLayer;
}
const generateBorder = ({ $sizeC, theme, $layer, $themeType = 'accent' }: IGenerateBorder): CSSProp => {
  return css`
    border-top: ${$sizeC} solid transparent;
    border-right: ${$sizeC} solid ${theme.color[$themeType][$layer || 0]};
    border-bottom: ${$sizeC} solid transparent;
    border-left: ${$sizeC} solid ${theme.color[$themeType][$layer || 0]};
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
export const SpinnerContainer = styled.div<{ $sizeC?: keyof typeof sizes }>`
  position: relative;
  width: ${({ $sizeC }) => ($sizeC ? sizes[$sizeC].width : sizes.md.width)};
  height: ${({ $sizeC }) => ($sizeC ? sizes[$sizeC].width : sizes.md.width)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IStyledFancyLoadingSpinner {
  $sizeC: keyof typeof sizes;
  theme: TTheme;
  $themeType?: TUiColorsNotTransparent;
  $layer?: TLayer;
}
// Define a styled component for the inner spinner
export const StyledInnerSpinner = styled.div<IStyledFancyLoadingSpinner>`
  ${({ $sizeC, theme, $themeType, $layer }) =>
    generateBorder({ $sizeC: $sizeC ? sizes[$sizeC].thicknessInner : sizes.md.thickness, theme, $themeType, $layer })}
  animation: ${reverseSpinner} 2s infinite ease-in-out;
  border-radius: 50%;
  width: 80%;
  aspect-ratio: 1 / 1;
`;

// Define a styled component for the outer spinner
export const StyledFancyLoadingSpinner = styled.div<IStyledFancyLoadingSpinner>`
  ${({ $sizeC, theme, $themeType, $layer }) =>
    generateBorder({ $sizeC: $sizeC ? sizes[$sizeC].thickness : sizes.md.thickness, theme, $themeType, $layer })}
  position: absolute;
  animation: ${spinner} 2s infinite ease-in-out;
  border-radius: 50%;
  width: 100%;
  aspect-ratio: 1 / 1;
`;
