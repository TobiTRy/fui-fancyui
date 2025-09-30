import { css } from 'styled-components';
import { getBackgroundColor } from '../../colorCalculatorForComponent/colorCalculatorForComponent';
import { IGenerateThemeDesignForComponent } from '../generateThemeDesignForComponent';
import { generateStateStyle } from './generateHoverActiveColor';
import { colorTransparencyCalculator } from '@/design/designFunctions/colorTransparencyCalculator';
import { clampLayer } from '@/utils/functions/clampLayer';

type TGenerateOutlineStyle = Pick<
  IGenerateThemeDesignForComponent,
  | '$outlined'
  | '$themeType'
  | 'theme'
  | '$layer'
  | '$outlinedBackgroundStrength'
  | '$backgroundState'
  | '$hoverColor'
  | '$textColor'
  | '$outlinedRemoveBorder'
>;
// --- //
// ----- Generates the style for a outlined box or other compoent --- //
// --- //
export const generateOutlineStyle = (props: TGenerateOutlineStyle) => {
  const {
    $themeType,
    theme,
    $layer = 0,
    $backgroundState,
    $outlinedBackgroundStrength = 0.1,
    $textColor,
    $outlinedRemoveBorder,
  } = props;

  // generates the color for the border
  const borderColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 0 });

  const generateSlightBackgroundColor = colorTransparencyCalculator(
    getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: clampLayer($layer - 3) }),
    $outlinedBackgroundStrength
  );

  return css`
    box-sizing: border-box;
    ${$outlinedRemoveBorder ? 'border: none' : `border: 2px solid ${borderColor};`};
    color: ${getBackgroundColor({ $themeType: $textColor ?? $themeType ?? 'secondary', theme, $layer: 0 })};
    background-color: ${generateSlightBackgroundColor};

    /* This generate the hover / active style if its needed */
    ${$backgroundState &&
    generateStateStyle({ ...props, $outlined: true, $outlinedBackgroundStrength: $outlinedBackgroundStrength + 0.1 })}
  `;
};
