import { css } from 'styled-components';
import { getBackgroundColor } from '../../colorCalculatorForComponent/colorCalculatorForComponent';
import { IGenerateThemeDesignForComponent } from '../generateThemeDesignForComponent';
import { generateStateStyle } from './generateHoverActiveColor';

type TGenerateOutlineStyle = Pick<
  IGenerateThemeDesignForComponent,
  '$outlined' | '$themeType' | 'theme' | '$layer' | '$backgroundStrength' | '$backgroundState' | '$hoverColor' | '$textColor'
>;
// --------------------------------------------------------------------------- //
// ------- Generates the style for a outlined box or other compoent ---------- //
// --------------------------------------------------------------------------- //
export const generateOutlineStyle = (props: TGenerateOutlineStyle) => {
  const { $themeType, theme, $layer, $backgroundState, $backgroundStrength = 0.05, $textColor } = props;

  // generates the color for the border
  const borderColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 0 });

  return css`
    box-sizing: border-box;
    border: 1.5px solid ${borderColor};
    color: ${getBackgroundColor({ $themeType: $textColor ?? $themeType ?? 'secondary', theme, $layer: 0 })};
    ${$backgroundState !== 'active' && 'background-color: transparent'};
    /* This generate the hover / active style if its needed */
    ${$backgroundState && generateStateStyle({ ...props, $outlined: true, $backgroundStrength })}
  `;
};
