import { css } from "styled-components";

import { getBackgroundColor } from "../../../Design/color/colorCalculatorForComponet";
import colorTransparencyCalculator from "../../../Design/color/colorTransparencyCalculator";
import { TUiColorsType } from "../../../Design/color/designColor";
import { IActiveSwitchIndicator } from "../SwitchActiveIndicator";
import { borderRadius } from "../../../Design/designSizes";
import { TTheme } from "@/Components/UI/Design/color/themeStore";

// Define the function to generate a blob background for the active indicator
type IGenerateBlob = Pick<IActiveSwitchIndicator, '$themeType' | '$outlined' | '$rounded' | '$layer'> & { theme: TTheme };
export const generateBlob = (props: IGenerateBlob) => {
  const { $themeType, theme, $rounded, $outlined, $layer } = props;
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
    border-radius: ${isRadiusKey ? borderRadius[$rounded as keyof typeof borderRadius] : $rounded};
    ${backgroundStyle}
  `;
};