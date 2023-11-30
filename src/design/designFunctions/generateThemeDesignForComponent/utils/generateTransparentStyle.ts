import { css } from 'styled-components';

import { IGenerateThemeDesignForComponent } from '../generateThemeDesignForComponent';
import { generateStateStyle } from './generateHoverActiveColor';
import { generateTextColor } from './generateTextColor';

type TGenerateTransparentStyle = Pick<
  IGenerateThemeDesignForComponent,
  '$outlined' | 'theme' | '$layer' | '$backgroundStrength' | '$backgroundState' | '$hoverColor' | '$textColor' | '$textHover'
>;
// --------------------------------------------------------------------------- //
// ---------- generates a transparent background ---------- //
// --------------------------------------------------------------------------- //
export const generateTransparentStyle = (props: TGenerateTransparentStyle) => {
  const { $backgroundState, $textColor, $backgroundStrength = 0.3, $layer, $textHover } = props;

  return css`
    color: ${generateTextColor({ $layer, $themeType: $textColor })};
    ${$backgroundState !== 'active' && 'background-color: transparent'};
    /* This generate the hover / active style if its needed */
    ${$backgroundState && generateStateStyle({ ...props, $backgroundStrength, $textHover: $textHover, $textColor: $textColor })}
  `;
};
