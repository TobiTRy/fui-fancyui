import { css } from "styled-components";

import themeStore from "../../../../Design/color/themeStore";
import { generateStateStyle } from "./generateHoverActiveColor";
import { IGenerateThemeDesignForComponent } from "../generateThemeDesignForComponent";

type TGenerateTransparentStyle = Pick<
IGenerateThemeDesignForComponent,
  '$outlined' | 'theme' | '$layer' | '$backgroundStrength' | '$backgroundState' | '$hoverColor' | '$textColor'
>;
// --------------------------------------------------------------------------- //
// ---------- generates a transparent background ---------- //
// --------------------------------------------------------------------------- //
export const generateTransparentStyle = (props: TGenerateTransparentStyle) => {
  const { theme, $backgroundState, $textColor, $backgroundStrength = 0.1 } = props;
  const isDarkTheme = themeStore.getState().isDarkTheme;

  return css`
    color: ${isDarkTheme ? $textColor ?? theme.secondary[0] : $textColor ?? theme.primary[0]};
    ${$backgroundState !== 'active' && 'background-color: transparent'};
    /* This generate the hover / active style if its needed */
    ${$backgroundState && generateStateStyle({...props, $backgroundStrength})}
  `;
};