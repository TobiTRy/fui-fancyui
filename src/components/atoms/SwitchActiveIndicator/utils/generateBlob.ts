import { css } from 'styled-components';

import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import colorTransparencyCalculator from '@/design/designFunctions/colorTransparencyCalculator/colorTransparencyCalculator';
import { TActiveSwitchIndicator } from '../TSwitchActiveindicator.model';
import { TTheme } from '@/types/TTheme';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

// Define the function to generate a blob background for the active indicator
type IGenerateBlob = TStyledPrefixAndPicker<
  TActiveSwitchIndicator,
  'themeType' | 'outlined' | 'borderRadius' | 'layer'
> & {
  theme: TTheme;
};
export const generateBlob = (props: IGenerateBlob) => {
  const { $themeType, theme, $borderRadius, $outlined, $layer } = props;
  let backgroundStyle;

  // Get the background color for the active indicator
  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'accent', $layer: $layer ?? 0 });

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
    border-radius: ${arrayToCssValues($borderRadius)};
    ${backgroundStyle}
  `;
};
