import { css } from "styled-components";
import { getBackgroundColor } from "../../../../Design/color/colorCalculatorForComponet";
import { IGenerateThemeDesignForComponent } from "../generateThemeDesignForComponent";
import { generateTextColor } from "./generateTextColor";
import { generateStateStyle } from "./generateHoverActiveColor";

type TGenerateOutlineStyle = Pick<
IGenerateThemeDesignForComponent,
  '$outlined' | '$themeType' | 'theme' | '$layer' | '$backgroundStrength' | '$backgroundState' | '$hoverColor' | '$textColor'
>;
// --------------------------------------------------------------------------- //
// ------- Generates the style for a outlined box or other compoent ---------- //
// --------------------------------------------------------------------------- //
export const generateOutlineStyle = (props: TGenerateOutlineStyle) => {
  const { $themeType, theme, $layer, $backgroundState, $backgroundStrength = 0.1, $textColor } = props;
  
  // generates the color for the border 
  const borderColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 0 });

  return css`
    box-sizing: border-box;
    border: 1.5px solid ${borderColor};
    color: ${generateTextColor({ $themeType, $textColor, $layer })};
    ${$backgroundState !== 'active' && 'background-color: transparent'};
      /* This generate the hover / active style if its needed */
    ${$backgroundState && generateStateStyle({ ...props, $outlined: true, $backgroundStrength })}
  `;
};