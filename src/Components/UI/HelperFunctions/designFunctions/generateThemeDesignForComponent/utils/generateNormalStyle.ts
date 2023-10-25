import { css } from 'styled-components';
import { getBackgroundColor, getTextColor } from '../../../../Design/color/colorCalculatorForComponet';
import { IGenerateThemeDesignForComponent } from '../generateThemeDesignForComponent';
import { generateStateStyle } from './generateHoverActiveColor';

type TGenerateNormalStyle = Pick<IGenerateThemeDesignForComponent, '$themeType' | 'theme' | '$layer' | '$textColor' | '$backgroundState'>;
export const generateNormalStyle = (props: TGenerateNormalStyle) => {
  const { $themeType, theme, $layer = 0, $textColor, $backgroundState } = props;
  const backgorundColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 0 });

  const getOpositTextColor = () => {
    if ($textColor) return theme[$textColor][0];
    return getTextColor({ theme, $themeType: $themeType ?? 'primary', $textLayer: $layer ?? 0, turnColorTheme: true });
  };

  return css`
    border: none;
    background-color: ${backgorundColor};
    color: ${getOpositTextColor};
    ${$backgroundState && generateStateStyle(props)}
  `;
};
