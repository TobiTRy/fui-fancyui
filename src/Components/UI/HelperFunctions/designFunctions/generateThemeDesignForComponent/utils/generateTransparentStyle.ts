import { css } from "styled-components";
import themeStore from "../../../../Design/color/themeStore";
import { generateStateStyle } from "./generateHoverActiveColor";
import { IGenerateThemeDesignForComponent } from "../generateThemeDesignForComponent";

type TGenerateTransparentStyle = Pick<
IGenerateThemeDesignForComponent,
  '$outlined' | '$themeType' | 'theme' | '$layer' | '$backgroundStrength' | '$backgroundState' | '$hoverColor' | '$textColor'
>;
export const generateTransparentStyle = (props: TGenerateTransparentStyle) => {
  const { theme, $backgroundState, $themeType, $textColor, $backgroundStrength = 0.1 } = props;
  const isDarkTheme = themeStore.getState().isDarkTheme;
  let backgroundColor;

  if ($backgroundState) backgroundColor = generateStateStyle({...props, $backgroundStrength});

  return css`
    border: none;
    color: ${isDarkTheme ? $textColor ?? theme.secondary[0] : $textColor ?? theme.primary[0]};
    ${$backgroundState !== 'active' && 'background-color: transparent'};
    ${backgroundColor}
  `;
};