import { css } from 'styled-components';
import { getBackgroundColor, getTextColor } from '../../colorCalculatorForComponent/colorCalculatorForComponent';
import { IGenerateThemeDesignForComponent } from '../generateThemeDesignForComponent';
import { generateStateStyle } from './generateHoverActiveColor';

type TGenerateNormalStyle = Pick<
  IGenerateThemeDesignForComponent,
  '$themeType' | 'theme' | '$layer' | '$textColor' | '$backgroundState' | '$hoverColor'
>;
// --------------------------------------------------------------------------- //
// ----------- generates a normal style for the specific component  ---------- //
// --------------------------------------------------------------------------- //
export const generateNormalStyle = (props: TGenerateNormalStyle) => {
  const { $themeType, theme, $layer = 0, $textColor, $backgroundState } = props;

  // get theme background color
  const backgorundColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 0 });

  // this function returns the oposit text color of the background color like primary -> secondary
  const getOpositTextColor = () => {
    return getTextColor({ theme, $themeType: $themeType ?? 'primary', $textLayer: $layer ?? 0, turnColorTheme: true });
  };

  return css`
    border: none;
    background-color: ${backgorundColor};
    color: ${$textColor ? theme.color[$textColor][0] : getOpositTextColor()};
    /* This generate the hover / active style if its needed */
    ${$backgroundState && generateStateStyle(props)}
  `;
};
