import { css } from "styled-components";
import { getBackgroundColor } from "../../../../Design/color/colorCalculatorForComponet";
import { IGenerateThemeDesignForComponent } from "../generateThemeDesignForComponent";
import { generateTextColor } from "./generateTextColor";
import { generateStateStyle } from "./generateHoverActiveColor";

type TGenerateOutlineStyle = Pick<
IGenerateThemeDesignForComponent,
  '$outlined' | '$themeType' | 'theme' | '$layer' | '$backgroundStrength' | '$backgroundState' | '$hoverColor' | '$textColor'
>;
export const generateOutlineStyle = (props: TGenerateOutlineStyle) => {
  const { $themeType, theme, $layer = 3, $backgroundState, $backgroundStrength = 0.1, $hoverColor, $textColor } = props;
  let backgroundColor;

  if ($backgroundState) backgroundColor = generateStateStyle({ ...props, $outlined: true, $backgroundStrength });

  // if the theme type istransparent, generate the transparent style and return it
  // if ($themeType === 'transparent') return generateTransparentStyle({ $themeType, theme });
  // get theme background color
  const borderColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 0 });

  return css`
    box-sizing: border-box;
    border: 1.5px solid ${borderColor};
    color: ${generateTextColor({ $themeType, $textColor, $layer })};
    ${$backgroundState !== 'active' && 'background-color: transparent'};
    ${backgroundColor}
  `;
};