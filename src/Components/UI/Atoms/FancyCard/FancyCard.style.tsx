import { css, styled } from 'styled-components';

import { StyledCardProps } from './Card.model';
import IStyledPrefixAndOmiter from '../../Interface/IStyledPrefixAndOmiter.model';
import { spacingPx } from '../../Design/design';
import edgeCalculation from '../../HelperFunctions/designFunctions/edgeCaluculation';
import checkThemeOrColor from '../../Design/color/ckeckThemeOrColor';

import { TUiColorsType } from '../../Design/color/designColor';
import { boxShadow } from '../../Design/shadows';

type IGetBackgroundColor = {
  theme: TUiColorsType;
  themeType: keyof TUiColorsType;
  variant?: number;
  customColor?: string;
};
function getBackgroundColor({ theme, themeType, customColor, variant }: IGetBackgroundColor) {
  if (customColor) return customColor;
  if (variant) return theme[themeType][variant || 0];
  return theme[themeType][0];
}

type IGetTextColor = {
  theme: TUiColorsType;
  themeType: keyof TUiColorsType;
  customTextColor?: string;
};
function getTextColor({ theme, themeType, customTextColor }: IGetTextColor) {
  if (customTextColor) return customTextColor;
  return theme[themeType][0];
}

type IGetColorForComponent = {
  theme: TUiColorsType;
  themeType: keyof TUiColorsType;
  customColor?: string;
  customTextColor?: string;
  variant?: number;
};

function getColorForComponent({ theme, themeType, customColor, customTextColor, variant }: IGetColorForComponent) {
  const backgroundColor = getBackgroundColor({ theme, themeType, customColor, variant });
  const textColor = getTextColor({ theme, themeType, customTextColor });

  return css`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;
}

// the converted $ styling props for the card
type IStyledCard = IStyledPrefixAndOmiter<StyledCardProps>;
//the main design of the card
export const StyledCard = styled.div<IStyledCard & { theme: TUiColorsType }>`
  ${({ theme, $themeType, $customColor, $customTextColor, $variant }) =>
    getColorForComponent({ theme, themeType: $themeType, customColor: $customColor, customTextColor: $customTextColor, variant: $variant })}
  overflow: hidden;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  box-sizing: border-box;
  padding: ${({ $padding }) => ($padding ? spacingPx[$padding] : '')};
  border-radius: ${({ $roundedEdges, $radius }) => edgeCalculation($roundedEdges, $radius)};
  ${({ $shadow }) => $shadow && boxShadow.sm};
`;

//the innercard makes it better to align the content with absolute position
export const InnerCard = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
`;
