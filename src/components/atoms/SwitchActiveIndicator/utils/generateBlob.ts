import { css } from 'styled-components';

import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import colorTransparencyCalculator from '@/design/designFunctions/colorTransparencyCalculator/colorTransparencyCalculator';
import { IActiveSwitchIndicator } from '../SwitchActiveIndicator';
import themeStore from '@/design/theme/themeStore/themeStore';
import { TBorderRadiusSizes } from '@/interface/TBorderRadius';
import { TTheme } from '@/interface/TTheme';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker.model';

// Define the function to generate a blob background for the active indicator
type IGenerateBlob = IStyledPrefixAndPicker<IActiveSwitchIndicator, 'themeType' | 'outlined' | 'rounded' | 'layer'> & { theme: TTheme };
export const generateBlob = (props: IGenerateBlob) => {
  const { $themeType, theme, $rounded, $outlined, $layer } = props;
  const borderRadius = themeStore.getState().theme.borderRadius;
  let backgroundStyle;

  // Get the background color for the active indicator
  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'accent', $layer: $layer ?? 0 });

  // Check if the provided rounded value is a valid key in the borderRadius object
  const isRadiusKey = $rounded ? Object.keys(borderRadius).includes($rounded) : false;

  // If the outlined prop is true, generate a slightly transparent background color and a border
  if ($outlined) {
    const generateSlightBackgroundColor = colorTransparencyCalculator(
      getBackgroundColor({ theme, $themeType: $themeType ?? 'accent', $layer: $layer ?? 3 }),
      0.2
    );

    backgroundStyle = css`
      background-color: ${generateSlightBackgroundColor};
      border: 1px solid ${backgroundColor};
      box-sizing: border-box;
    `;
  } else {
    // If the outlined prop is false, use the background color as the background style
    backgroundStyle = css`
      background-color: ${backgroundColor};
    `;
  }

  // Return the styled-component CSS for the active indicator
  return css`
    top: 0;
    height: 100%;
    border-radius: ${isRadiusKey ? borderRadius[$rounded as TBorderRadiusSizes] : $rounded};
    ${backgroundStyle}
  `;
};
