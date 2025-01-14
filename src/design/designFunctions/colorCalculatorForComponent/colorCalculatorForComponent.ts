import Color from 'color';
import { css } from 'styled-components';

import checkThemeOrColor from '../checkThemeOrColor/checkThemeOrColor';
import { TthemeColorGroup } from '../../theme/generateThemeColor/generateThemeColor';
import { TTheme } from '@/types/TTheme';
import { TUiColorTypes } from '@/types/TUiColorTypes';
import { themeStore } from '@/design/theme/themeStore';
import { TLayer } from '@/types';

// Define the types for the arguments that will be passed to the getBackgroundColor function
type IGetBackgroundColor = Pick<IGetColorForComponent, '$customColor' | '$layer' | 'theme'> &
  Partial<Pick<IGetColorForComponent, '$themeType'>>;

// Define the getBackgroundColor function
export function getBackgroundColor({ theme, $themeType, $customColor, $layer }: IGetBackgroundColor) {
  // Check if the provided custom color is valid
  const validCustomColor = $customColor ? checkThemeOrColor($customColor) : undefined;
  let proviedColor: string | undefined;

  // If a valid custom color was provided, use it
  if (validCustomColor) {
    proviedColor = validCustomColor;
  }
  // If a theme type was provided and no valid custom color was set, use the corresponding color from the theme
  else if ($themeType && $themeType !== 'transparent') {
    proviedColor = theme.color[$themeType][$layer ?? 0];
  } else if ($themeType === 'transparent') {
    proviedColor = 'transparent';
  }

  // Return the background color as a styled-component CSS string
  return proviedColor || '';
}

// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// Define the types for the arguments that will be passed to the getTextColor function
type IGetTextColor = Pick<IGetColorForComponent, '$themeType' | '$customTextColor' | '$textLayer' | 'theme'>;

// Define the getTextColor function
export function getTextColor({
  theme,
  $themeType,
  $customTextColor,
  $textLayer,
  turnColorTheme,
}: IGetTextColor & { turnColorTheme?: boolean }) {
  // Check if the provided custom text color is valid
  const validCustomColor = $customTextColor ? checkThemeOrColor($customTextColor) : undefined;
  let proviedColor: string | undefined;

  // If a valid custom text color was provided, use it
  if (validCustomColor) {
    proviedColor = validCustomColor;
  }
  // If the theme type is 'primary', use the corresponding secondary color from the theme
  else if ($themeType === 'primary' && turnColorTheme) {
    proviedColor = theme.color.secondary[$textLayer ?? 0];
  }
  // If the theme type is 'secondary', use the corresponding primary color from the theme
  else if ($themeType === 'secondary' && turnColorTheme) {
    proviedColor = theme.color.primary[$textLayer ?? 0];
  }
  // If the theme type is 'accent', use the corresponding accent color from the theme
  else if ($themeType === 'accent') {
    proviedColor = Color(theme.color.accent[$textLayer ?? 0]).isDark()
      ? theme.color.secondary[$textLayer ?? 0]
      : theme.color.primary[$textLayer ?? 0];
  } else if ($themeType === 'transparent') {
    proviedColor = themeStore.getState().isDarkTheme
      ? theme.color.secondary[$textLayer ?? 0]
      : theme.color.primary[$textLayer ?? 0];
  } else {
    proviedColor = theme.color[$themeType][$textLayer ?? 0];
  }
  // Return the text color as a styled-component CSS string
  return proviedColor;
}

// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// Define the types for the arguments that will be passed to the getColorsForComponent function
type IGetColorForComponent = {
  theme: TTheme;
  $themeType: TUiColorTypes;
  $customColor?: string | TthemeColorGroup;
  $customTextColor?: string | TthemeColorGroup;
  $layer?: TLayer;
  $textLayer?: TLayer;
};

// Define the getColorsForComponent function
export function getColorsForComponent({
  theme,
  $themeType,
  $customColor,
  $customTextColor,
  $layer,
  $textLayer,
}: IGetColorForComponent) {
  // Get the background color and text color using the getBackgroundColor and getTextColor functions
  const backgroundColor = getBackgroundColor({ theme, $themeType, $customColor, $layer });
  const textColor = getTextColor({ theme, $themeType, $customTextColor, $textLayer, turnColorTheme: true });

  // Return the background color and text color as a styled-component CSS string
  return css`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;
}
