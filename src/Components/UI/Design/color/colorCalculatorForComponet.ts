import { css } from 'styled-components';
import checkThemeOrColor from './ckeckThemeOrColor';
import { TUiColorsType, TthemeColorGroup } from './designColor';
import Color from 'color';

// Define the types for the arguments that will be passed to the getBackgroundColor function
type IGetBackgroundColor = Pick<IGetColorForComponent, '$themeType' | '$customColor' | '$variant' | 'theme'>;

// Define the getBackgroundColor function
function getBackgroundColor({ theme, $themeType, $customColor, $variant }: IGetBackgroundColor) {
  // Check if the provided custom color is valid
  const validCustomColor = $customColor ? checkThemeOrColor($customColor) : undefined;
  let proviedColor: string | undefined;

  // If a valid custom color was provided, use it
  if (validCustomColor) {
    proviedColor = validCustomColor;
  } 
  // If a theme type was provided and no valid custom color was set, use the corresponding color from the theme
  else if ($themeType) {
    proviedColor = theme[$themeType][$variant || 0];
  }

  // Return the background color as a styled-component CSS string
  return css`
    background-color: ${proviedColor || theme.primary[0]};
  `;
}

// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// Define the types for the arguments that will be passed to the getTextColor function
type IGetTextColor = Pick<IGetColorForComponent, '$themeType' | '$customTextColor' | '$textVariant' | 'theme'>;

// Define the getTextColor function
function getTextColor({ theme, $themeType, $customTextColor, $textVariant }: IGetTextColor) {
  // Check if the provided custom text color is valid
  const validCustomColor = $customTextColor ? checkThemeOrColor($customTextColor) : undefined;
  let proviedColor: string | undefined;

  // If a valid custom text color was provided, use it
  if (validCustomColor) {
    proviedColor = validCustomColor;
  } 
  // If the theme type is 'primary', use the corresponding secondary color from the theme
  else if ($themeType === 'primary') {
    proviedColor = theme.secondary[$textVariant || 0];
  } 
  // If the theme type is 'secondary', use the corresponding primary color from the theme
  else if ($themeType === 'secondary') {
    proviedColor = theme.primary[$textVariant || 0];
  } 
  // If the theme type is 'accent', use the corresponding accent color from the theme
  else if ($themeType === 'accent') {
    proviedColor = Color(theme.accent[$textVariant || 0]).isDark() ? theme.secondary[$textVariant || 0] : theme.primary[$textVariant || 0];
  }

  // Return the text color as a styled-component CSS string
  return css`
    color: ${proviedColor || theme[$themeType][$textVariant || 0]};
  `;
}


// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// Define the types for the arguments that will be passed to the getColorsForComponent function
type IGetColorForComponent = {
  theme: TUiColorsType;
  $themeType: keyof TUiColorsType;
  $customColor?: string | TthemeColorGroup;
  $customTextColor?: string | TthemeColorGroup;
  $variant?: number;
  $textVariant?: number;
};

// Define the getColorsForComponent function
export default function getColorsForComponent({
  theme,
  $themeType,
  $customColor,
  $customTextColor,
  $variant,
  $textVariant,
}: IGetColorForComponent) {
  // Get the background color and text color using the getBackgroundColor and getTextColor functions
  const backgroundColor = getBackgroundColor({ theme, $themeType, $customColor, $variant });
  const textColor = getTextColor({ theme, $themeType, $customTextColor, $textVariant });

  // Return the background color and text color as a styled-component CSS string
  return css`
    ${backgroundColor};
    ${textColor};
  `;
}
