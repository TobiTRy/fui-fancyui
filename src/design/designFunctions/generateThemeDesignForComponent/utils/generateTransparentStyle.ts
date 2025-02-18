import { css } from 'styled-components';

import { IGenerateThemeDesignForComponent } from '../generateThemeDesignForComponent';
import { generateStateStyle } from './generateHoverActiveColor';
import { generateTextColor } from './generateTextColor';
import { themeStore } from '@/design/theme/themeStore';

type TGenerateTransparentStyle = Pick<
  IGenerateThemeDesignForComponent,
  | '$outlined'
  | 'theme'
  | '$layer'
  | '$outlinedBackgroundStrength'
  | '$backgroundState'
  | '$hoverColor'
  | '$textColor'
  | '$textHover'
>;
// -------------------------------------------------------- //
// ---------- generates a transparent background ---------- //
// --------------------------------------------------------- //
export const generateTransparentStyle = (props: TGenerateTransparentStyle) => {
  const { $backgroundState, $textColor, $outlinedBackgroundStrength = 0.3, $layer, $textHover } = props;

  const getBackgroundStrength = themeStore((state) => state.theme.outlined.outlinedBackgroundStrength);

  return css`
    color: ${generateTextColor({ $layer, $themeType: $textColor })};
    ${$backgroundState !== 'active' && 'background-color: transparent'};
    /* This generate the hover / active style if its needed */
    ${$backgroundState &&
    generateStateStyle({
      ...props,
      $outlinedBackgroundStrength: $outlinedBackgroundStrength || getBackgroundStrength,
      $textHover: $textHover,
      $textColor: $textColor,
    })}
  `;
};
