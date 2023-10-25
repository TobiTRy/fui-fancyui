import { css } from 'styled-components';

import themeStore from '../../../../Design/color/themeStore';
import { generateStateStyle } from './generateHoverActiveColor';
import { IGenerateThemeDesignForComponent } from '../generateThemeDesignForComponent';

type TGenerateTransparentStyle = Pick<
  IGenerateThemeDesignForComponent,
  '$outlined' | 'theme' | '$layer' | '$backgroundStrength' | '$backgroundState' | '$hoverColor' | '$textColor'
>;
// --------------------------------------------------------------------------- //
// ---------- generates a transparent background ---------- //
// --------------------------------------------------------------------------- //
export const generateTransparentStyle = (props: TGenerateTransparentStyle) => {
  const { theme, $backgroundState, $textColor, $backgroundStrength = 0.05, $layer } = props;
  const isDarkTheme = themeStore.getState().isDarkTheme;

  const calcTextColor = isDarkTheme ? theme.secondary[$layer ?? 0] : theme.primary[$layer ?? 0];

  return css`
    color: ${$textColor ? theme[$textColor][ 0]: calcTextColor};
    ${$backgroundState !== 'active' && 'background-color: transparent'};
    /* This generate the hover / active style if its needed */
    ${$backgroundState && generateStateStyle({ ...props, $backgroundStrength })}
  `;
};
